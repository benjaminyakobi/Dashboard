import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

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
        <>
            <div>
                <h2>Update Email/Password</h2>
                {error && <alert variant='danger'>{error}</alert>}
                <form onSubmit={handleSubmit}>
                    <fieldset id='email'>
                        <label>Email</label>
                        <input type='email' ref={emailRef} required defaultValue={currentUser.email} />
                    </fieldset>
                    <fieldset id='password'>
                        <label>Password</label>
                        <input type='password' ref={passwordRef} placeholder='Leave blank to keep the same' />
                    </fieldset>
                    <fieldset id='password-confirm'>
                        <label>Password Confirmation</label>
                        <input type='password' ref={passwordConfirmRef} placeholder='Leave blank to keep the same' />
                    </fieldset>
                    <button disabled={loading} type='submit'>Update</button>
                </form>
            </div>
            <div>
                <Link to='/dashboard'>Cancel</Link>
            </div>
        </>
    )
}