import "../App.css"
import { nanoid } from 'nanoid'
import React, { useState, useEffect } from 'react'
import { db } from "../initFirebase"
import { ref, push, set, onValue } from "firebase/database"
import Signup from "./Signup"
import { Container } from "react-bootstrap"

const App = () => {
  const listsRef = ref(db, 'Lists') //Getting a reference to 'Lists' in Firebase-RT-DB
  const [contacts, setContacts] = useState([])
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  //Loading data from Firebase-Realtime-Database
  useEffect(() => {
    onValue(listsRef, (snapshot) => {
      const jsonObject = snapshot.val() //Getting each child value under 'Lists' as a json object
      try {
        const listObject = Object.values(jsonObject) //Convert a json object to a list of jsons
        setContacts(listObject) //Updating state: 'contacts' using setContacts
      }
      catch {
        console.log("Database is empty")
      }
    })
  }, [])

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
      id: nanoid(), //Generates an id
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    }

    //Inserting new object to Firebase-RT-DB
    const newChildRef = push(listsRef); //Generating new child under 'Lists'
    set(newChildRef, newContact); //Setting new object into the new child (newChildRef)

    onValue(listsRef, (snapshot) => {
      const jsonObject = snapshot.val() //Getting each child value under 'Lists' as a json object
      const listObject = Object.values(jsonObject) //Convert a json object to a list of jsons
      setContacts(listObject) //Updating state: 'contacts' using setContacts
    })
  }

  return (
    <>
      <Container className='signup-container'>
          <div className='w-100' style={{ maxWidth: '400px' }}>
            <Signup />
          </div>
      </Container>

      <div className="table-container">
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
              <tr key={contact.id}>
                <td>{contact.fullName}</td>
                <td>{contact.address}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
              </tr>)}
          </tbody>
        </table>
        <h2>Add a Contact</h2>
        <form className='form-container'>
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

          <button type="reset" onClick={handleAddFormSubmit}>Add</button>
        </form>
      </div>
    </>
  )
}

export default App