import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import "./App.css"
import data from "./mock-data.json" //pretend we call an api

const App = () => {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newContact = {
      id: nanoid(), //generates an id
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) =>
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>)}
        </tbody>
      </table>
      <h2>Add a Contact</h2>
      <form>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange} />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..." 
          onChange={handleAddFormChange} />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange} />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..." 
          onChange={handleAddFormChange} />
        
        <button type="submit" onClick={handleAddFormSubmit}>Add</button>
      </form>
    </div>
  )
}

export default App