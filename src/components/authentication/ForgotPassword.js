import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { AppButton, LoginDivContainer, LoginH1, LoginInput, LoginDiv } from '../styles/App.style'
import { Alert } from 'react-bootstrap'

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
        <LoginDivContainer>
            <LoginDiv><LoginH1>Password Reset</LoginH1></LoginDiv>
            {error && <Alert variant='danger'>{error}</Alert>}
            {message && <Alert variant='info'>{message}</Alert>}
            <LoginDiv>
                <form onSubmit={handleSubmit}>
                    <fieldset id='email'>
                        <LoginInput type='email' placeholder='Enter Email' ref={emailRef} required />
                    </fieldset>
                    <AppButton disabled={loading} type='submit'>Reset Password</AppButton>
                </form>
            </LoginDiv>
            <br />
            <LoginDiv>
                <Link to='/' style={{ color: 'white' }}>Back To Login</Link>
            </LoginDiv>
            <LoginDiv>
                <Link to='/signup' style={{ color: 'white', marginBottom: '2rem' }}>Sign Up</Link>
            </LoginDiv>
        </LoginDivContainer>
    )
}