import "../App.css"
import { nanoid } from 'nanoid'
import React, { useState, useEffect, Fragment } from 'react'
import { db } from "../initFirebase"
import { ref, push, child, set, update, onValue, get } from "firebase/database"
// import { updateCurrentUser } from "firebase/auth"
import { useAuth } from './contexts/AuthContext'
import { Button, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import ReadOnlyRow from "./ReadOnlyRow"
import EditableRow from "./EditableRow"


const Dashboard = () => {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState('')
  const history = useHistory()

  const listsRef = ref(db, `Lists/${currentUser.uid}`) //Getting a reference to 'Lists' in Firebase-RT-DB
  const [contacts, setContacts] = useState([])
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })
  const [editContactId, setEditContactId] = useState(null)

  //Loading data from Firebase-Realtime-Database
  useEffect(() => {
    onValue(listsRef, (snapshot) => {
      const jsonObject = snapshot.val() //Getting each child value under 'Lists' as a json object
      try {
        setError('')
        const listObject = Object.values(jsonObject) //Convert a json object to a list of jsons
        setContacts(listObject) //Updating state: 'contacts' using setContacts
      }
      catch {
        setError("Database is empty")
        console.log(error)
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

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
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

  const HandleEditFormSubmit = (event) => {
    event.preventDefault()

    //Updated contact information
    const updatedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email
    }

    //BROKEN CODE: Updating Firebase RT-DB
    // onValue(listsRef, (snapshot) => {
    //   const jsonObject = snapshot.val()
    //   for (const [key, value] of Object.entries(jsonObject)) {
    //     if (value['id'] === editContactId) {
    //       const updates = {}
    //       updates[key] = updatedContact
    //       return update(listsRef, updates)
    //       //TODO: WHY DO I HAVE AN INFINITE LOOP HERE?!
    //     }
    //   }
    // })

    get(listsRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          const jsonObject = snapshot.val()
          for (const [key, value] of Object.entries(jsonObject)) {
            if (value['id'] === editContactId) {
              const updates = {}
              updates[key] = updatedContact
              return update(listsRef, updates)
            }
          }
        }
        else { console.log('No data available') }
      }).catch(error => { console.log(error) })

    setEditContactId(null)
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault()
    setEditContactId(contact.id)

    const formData = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    }

    setEditFormData(formData)
  }

  async function handleLogout() {
    setError('')
    try {
      await logout()
      history.push('/')
    } catch {
      setError('Failed to log out')
      console.log(error)
    }
  }

  return (
    <>
      <Card>
        <Card.Body className='text-center mt-2'>
          <h6>Email: {currentUser.email}</h6>
          <Link to='/update-email'>Update Email/Password</Link>
          <div>
            <Button variant='link' onClick={handleLogout}>Log Out</Button>
          </div>
        </Card.Body>
      </Card>

      <div style={{ width: '800px', marginTop: 6 }}>
        <form onSubmit={HandleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) =>
                <Fragment key={contact.id}>
                  {
                    (contact.id === editContactId) ?
                      <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} /> :
                      <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} />
                  }
                </Fragment>
              )}
            </tbody>
          </table>
        </form>
      </div>

      <div style={{ width: '800px', marginTop: 6 }}>
        <h3>Add a Contact</h3>
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

export default Dashboard