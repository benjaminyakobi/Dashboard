import React from 'react'
import {Button} from 'react-bootstrap'

function ReadOnlyRow({ contact, handleEditClick, handleDeleteClick }) {
    return (
        <tr>     
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <Button type='button' size='sm' variant='success' onClick={(event) => handleEditClick(event, contact)}>Edit</Button>{' '}
                <Button type='button' size='sm' variant='danger'  onClick={() => handleDeleteClick(contact.id)}>Delete</Button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow

