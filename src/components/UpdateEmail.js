import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../components/contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { updateEmail } from 'firebase/auth'

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
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Update Email/Password</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} placeholder='Leave blank to keep the same' />
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} placeholder='Leave blank to keep the same' />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 mt-3' type='submit'>Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Link to='/dashboard'>Cancel</Link>
            </div>
        </>
    )
}