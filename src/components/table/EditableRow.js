import React from 'react'
import { Button } from 'react-bootstrap'

const EditableRow = ({ addFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="fullName"
                    required="required"
                    placeholder="Enter a name..."
                    value={addFormData.fullName}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input
                    type="text"
                    name="address"
                    required="required"
                    placeholder="Enter an address..."
                    value={addFormData.address}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phone number..."
                    value={addFormData.phoneNumber}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    value={addFormData.email}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <Button type='submit' size='sm' variant='success'>Save</Button> {' '}
                <Button type='button' size='sm' variant='danger' onClick={handleCancelClick}>Cancel</Button>
            </td>
        </tr>
    )
}

export default EditableRow
