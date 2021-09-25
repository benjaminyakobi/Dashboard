import React, { useRef, useState } from 'react'
import { useAuth } from '../components/contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(event) {
        event.preventDefault()
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
            .then(() => {
                setLoading(false)
                history.push('/dashboard')
            })
            .catch(error => {
                setError('Failed to log in')
                setLoading(false)
                console.log(error)
            })
    }
    return (
        <>
            <card>
                <body>
                    <h2>Log In</h2>
                    {error && <alert variant='danger'>{error}</alert>}
                    <form onSubmit={handleSubmit}>
                        <fieldset id='email'>
                            <label>Email</label>
                            <input type='email' ref={emailRef} required />
                        </fieldset>
                        <fieldset id='password'>
                            <label>Password</label>
                            <input type='password' ref={passwordRef} required />
                        </fieldset>
                        <button disabled={loading} type='submit'>Log In</button>
                    </form>
                    <div>
                        <Link to='/forgot-password'>Forgot Password?</Link>
                    </div>

                </body>
            </card>
            <div>
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    )
}