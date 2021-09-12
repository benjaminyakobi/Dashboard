import React from 'react'

const EditableRow = ({ editFormData, handleEditFormChange }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="fullName"
                    required="required"
                    placeholder="Enter a name..."
                    value={editFormData.fullName}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input
                    type="text"
                    name="address"
                    required="required"
                    placeholder="Enter an address..."
                    value={editFormData.address}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phone number..."
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    value={editFormData.email}
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <button type='submit'>Save</button>
            </td>
        </tr>
    )
}

export default EditableRow
