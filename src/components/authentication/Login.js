import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { AppButton, LoginDiv, LoginH1, LoginInput } from '../styles/App.style'

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
            <LoginDiv>
                <LoginH1>Log In</LoginH1>
                {error && <alert>{error}</alert>}
            </LoginDiv>
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

            <LoginDiv>
                <Link to='/forgot-password'>
                    <AppButton>Forgot Password?</AppButton>
                </Link>
                <Link to='/signup'>
                    <AppButton>Sign Up</AppButton>
                </Link>
            </LoginDiv>
        </>
    )
}