import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { AppButton, LoginDiv, LoginDivContainer, LoginH2, LoginInput } from '../styles/App.style'

export default function UpdateEmail() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatedEmail, updatedPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(event) {
        event.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError('')
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updatedEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(updatedPassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/dashboard')
        }).catch(() => {
            setError('Failed to update')
        }).finally()
        setLoading(false)
    }

    return (
        <LoginDivContainer>
        <LoginDiv><LoginH2>Update Email/Password</LoginH2></LoginDiv>
        {error && <alert variant='danger'>{error}</alert>}
            <LoginDiv>
                <form onSubmit={handleSubmit}>
                    <fieldset id='email'>
                        <LoginInput type='email' ref={emailRef} placeholder='Enter Email' required defaultValue={currentUser.email} />
                    </fieldset>
                    <fieldset id='password'>
                        <LoginInput type='password' ref={passwordRef} placeholder='Enter Password' />
                    </fieldset>
                    <fieldset id='password-confirm'>
                        <LoginInput type='password' ref={passwordConfirmRef} placeholder='Confirm Password' />
                    </fieldset>
                    <AppButton disabled={loading} type='submit'>Update</AppButton>
                </form>
            </LoginDiv>
            <br/>
            <LoginDiv>
                <Link to='/dashboard' style={{ color: 'white', marginBottom: '2rem' }}>Cancel</Link>
            </LoginDiv>
        </LoginDivContainer>
    )
}