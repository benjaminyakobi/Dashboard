import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { AppButton, LoginDiv, LoginDivContainer, LoginH1, LoginInput } from '../styles/App.style'
import { Alert } from 'react-bootstrap'

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
        <LoginDivContainer>
            <LoginDiv><LoginH1>Log In</LoginH1></LoginDiv>
            {error && <Alert variant='danger'>{error}</Alert>}

            <LoginDiv>
                <form onSubmit={handleSubmit}>
                    <fieldset id='email'>
                        <LoginInput type='email' placeholder='Enter Email' ref={emailRef} required />
                    </fieldset>
                    <fieldset id='password'>
                        <LoginInput type='password' placeholder='Enter Password' ref={passwordRef} required />
                    </fieldset>
                    <AppButton disabled={loading} type='submit'>Log In</AppButton>
                </form>
            </LoginDiv>
            <br />
            <LoginDiv>
                <Link to='/forgot-password' style={{ color: 'white' }}>
                    Forgot Password?
                </Link>
            </LoginDiv>
            <LoginDiv>
                <Link to='/signup' style={{ color: 'white', marginBottom: '2rem' }}>
                    Sign Up
                </Link>
            </LoginDiv>
        </LoginDivContainer>
    )
}