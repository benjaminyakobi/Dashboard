import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { AppButton, LoginDiv, LoginDivContainer, LoginH2, LoginInput } from '../styles/App.style'
import { Alert } from 'react-bootstrap'

export default function UpdateEmail() {
    const emailRef = useRef()
    const { currentUser, updatedEmail } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(event) {
        event.preventDefault()

        const promises = []
        setLoading(true)
        setError('')
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updatedEmail(emailRef.current.value))
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
        <LoginDiv><LoginH2>Update Email</LoginH2></LoginDiv>
        {error && <Alert variant='danger'>{error}</Alert>}
            <LoginDiv>
                <form onSubmit={handleSubmit}>
                    <fieldset id='email'>
                        <LoginInput type='email' ref={emailRef} placeholder='Enter Email' required defaultValue={currentUser.email} />
                    </fieldset>
                    <AppButton disabled={loading} type='submit'>Update Email</AppButton>
                </form>
            </LoginDiv>
            <br/>
            <LoginDiv>
                <Link to='/dashboard' style={{ color: 'white', marginBottom: '2rem' }}>Cancel</Link>
            </LoginDiv>
        </LoginDivContainer>
    )
}