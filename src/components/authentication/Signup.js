import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(event) {
        event.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value) //if the signup fails -> go to catch block
            setLoading(false)
            history.push('/')
        } catch {
            setError('Failed to create an account')
        }
    }

    return (
        <>
            <div>
                <h2>Sign Up</h2>
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
                    <fieldset id='password-confirm'>
                        <label>Password Confirmation</label>
                        <input type='password' ref={passwordConfirmRef} required />
                    </fieldset>
                    <button disabled={loading} type='submit'>Sign Up</button>
                </form>
            </div>
            <div>
                Already have an account? <Link to='/'>Log In</Link>
            </div>
        </>
    )
}