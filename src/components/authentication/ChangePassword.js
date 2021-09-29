import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { AppButton, LoginDiv, LoginDivContainer, LoginH2, LoginInput } from '../styles/App.style'
import { Alert } from 'react-bootstrap'

export default function ChangePassword() {
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { updatedPassword } = useAuth()
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
        <LoginDiv><LoginH2>Change Password</LoginH2></LoginDiv>
        {error && <Alert variant='danger'>{error}</Alert>}
            <LoginDiv>
                <form onSubmit={handleSubmit}>
                    <fieldset id='password'>
                        <LoginInput type='password' ref={passwordRef} placeholder='Enter New Password' />
                    </fieldset>
                    <fieldset id='password-confirm'>
                        <LoginInput type='password' ref={passwordConfirmRef} placeholder='Confirm New Password' />
                    </fieldset>
                    <AppButton disabled={loading} type='submit'>Change Password</AppButton>
                </form>
            </LoginDiv>
            <br/>
            <LoginDiv>
                <Link to='/dashboard' style={{ color: 'white', marginBottom: '2rem' }}>Cancel</Link>
            </LoginDiv>
        </LoginDivContainer>
    )
}