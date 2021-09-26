import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { AppButton, LoginDivContainer, LoginH1, LoginDiv, LoginInput } from '../styles/App.style'
import { Alert } from 'react-bootstrap'

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
        <LoginDivContainer>
            <LoginDiv><LoginH1>Sign Up</LoginH1></LoginDiv>
            {error && <Alert variant='danger'>{error}</Alert>}
            <LoginDiv>
                <form onSubmit={handleSubmit}>
                    <fieldset id='email'>
                        <LoginInput type='email' placeholder='Enter Email' ref={emailRef} required />
                    </fieldset>
                    <fieldset id='password'>
                        <LoginInput type='password' placeholder='Enter Password' ref={passwordRef} required />
                    </fieldset>
                    <fieldset id='password-confirm'>
                        <LoginInput type='password' placeholder='Confirm Password' ref={passwordConfirmRef} required />
                    </fieldset>
                    <AppButton disabled={loading} type='submit'>Sign Up</AppButton>
                </form>
            </LoginDiv>
            <br />
            <LoginDiv>
                <Link to='/' style={{ color: 'white', marginBottom: '2rem' }}>Back To Login</Link>
            </LoginDiv>
        </LoginDivContainer>
    )
}