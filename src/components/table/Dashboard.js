import { nanoid } from 'nanoid'
import React, { useState, useEffect, Fragment } from 'react'
import { db } from "../../initFirebase"
import { ref, push, set, update, onValue, get } from "firebase/database"
import { useAuth } from '../../components/contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import ReadOnlyRow from "./ReadOnlyRow"
import EditableRow from "./EditableRow"
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap'
import { LoginDiv } from '../styles/App.style'


const Dashboard = () => {
  const { currentUser, logout } = useAuth() //For firebase authentication
  const [error, setError] = useState('') //For errors
  const history = useHistory() //For routing between components
  const listsRef = ref(db, `Lists/${currentUser.uid}`) //Getting a reference to 'Lists' in Firebase-RT-DB
  const [contacts, setContacts] = useState([]) //For rendeting contacts that fetched from firebase
  const [editContactId, setEditContactId] = useState(null) //For editing rows
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })


  /* FIREBASE REALTIME DATABASE */
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

  /* ADDING DATA TO FIREBASE RTDB */
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
      if (snapshot.exists()) {
        const jsonObject = snapshot.val() //Getting each child value under 'Lists' as a json object
        const listObject = Object.values(jsonObject) //Convert a json object to a list of jsons
        setContacts(listObject) //Updating state: 'contacts' using setContacts
      } else {
        setContacts([])
        console.log('No data available')
      }
    })
  }

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  /* EDDITING DATA IN FIREBASE RTDB */
  const HandleEditFormSubmit = (event) => {
    event.preventDefault()

    //Updated contact information
    const updatedContact = {
      id: editContactId,
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    }

    get(listsRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          const jsonObject = snapshot.val()
          for (const [key, value] of Object.entries(jsonObject)) {
            if (value['id'] === editContactId) {
              const updates = {}
              updates[key] = updatedContact //Set an updated contact
              return update(listsRef, updates)
            }
          }
        }
        else { console.log('No data available') }
      }).catch(error => { console.log(error) })

    setEditContactId(null)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
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

    setAddFormData(formData)
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }

  /* DELETE DATA FROM FIREBASE RTDB */
  const handleDeleteClick = (contactId) => {
    get(listsRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          const jsonObject = snapshot.val()
          for (const [key, value] of Object.entries(jsonObject)) {
            if (value['id'] === contactId) {
              const updates = {}
              updates[key] = null //Set to null to remove
              setEditContactId(null)
              return update(listsRef, updates)
            }
          }
        }
        else { console.log('No data available') }
      }).catch(error => { console.log(error) })
  }


  return (
    <>
      <LoginDiv>
        <Button variant='danger' style={{ marginBottom: '0.5rem', marginTop: '0.5rem', marginRight: '0.5rem' }} size='sm' onClick={handleLogout} >Logout from {currentUser.email}</Button>
        <Link to='/update-email'><Button style={{ marginBottom: '0.5rem', marginTop: '0.5rem', marginRight: '0.5rem' }} size='sm'>Update Email</Button></Link>
        <Link to='/update-password'><Button style={{ marginBottom: '0.5rem', marginTop: '0.5rem', marginRight: '0.5rem' }} size='sm'>Update Password</Button></Link>
      </LoginDiv>
      <div>
        <form id='inner-form' />
        <form id='outer-form' onSubmit={HandleEditFormSubmit}>
          <Table size='sm'>
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
              <tr>
                <td>
                  <InputGroup size='sm'>
                    <FormControl
                      form='inner-form'
                      type="text"
                      name="fullName"
                      required="required"
                      placeholder="Enter a name..."
                      onChange={handleAddFormChange} />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup size='sm'>
                    <FormControl
                      form='inner-form'
                      type="text"
                      name="address"
                      required="required"
                      placeholder="Enter an address..."
                      onChange={handleAddFormChange} />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup size='sm'>
                    <FormControl
                      form='inner-form'
                      type="text"
                      name="phoneNumber"
                      required="required"
                      placeholder="Enter a phone number..."
                      onChange={handleAddFormChange} />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup size='sm'>
                    <FormControl
                      form='inner-form'
                      type="email"
                      name="email"
                      required="required"
                      placeholder="Enter an email..."
                      onChange={handleAddFormChange} />
                  </InputGroup>
                </td>
                <td>
                  <Button form='inner-form' type="reset" size='sm' variant='primary' onClick={handleAddFormSubmit}>Add</Button>
                </td>
              </tr>
              {contacts.map((contact) =>
                <Fragment key={contact.id}>
                  {
                    (contact.id === editContactId) ?
                      <EditableRow addFormData={addFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} /> :
                      <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                  }
                </Fragment>
              )}
            </tbody>
          </Table>
        </form>
      </div>
    </>
  )
}

export default Dashboard