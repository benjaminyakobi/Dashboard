import React, { useRef, useState } from 'react'
// import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../components/contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    async function handleSubmit(event) {
        event.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }
    return (
        <>
            <card>
                <body>
                    <h2>Password Reset</h2>
                    {error && <alert variant='danger'>{error}</alert>}
                    {message && <alert variant='info'>{message}</alert>}
                    <form onSubmit={handleSubmit}>
                        <fieldset id='email'>
                            <label>Email</label>
                            <input type='email' ref={emailRef} required />
                        </fieldset>
                        <button disabled={loading} type='submit'>Reset Password</button>
                    </form>
                    <div>
                        <Link to='/'>Login</Link>
                    </div>

                </body>
            </card>
            <div>
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    )
}