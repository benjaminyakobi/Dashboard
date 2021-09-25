import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
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
            <div>
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
            </div>
            <div>
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    )
}