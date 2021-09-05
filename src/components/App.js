import "../App.css"
import { nanoid } from 'nanoid'
import React, { useState, useEffect } from 'react'
import { db } from "../initFirebase"
import { ref, push, set, onValue } from "firebase/database"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import Dashboard from './Dashboard'
import PrivateRoute from "./PrivateRoute"

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
    <AuthProvider>
      <Container className='signup-container'>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <Route path='/signup' component={Signup} />
                <Route exact path='/' component={Login} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  )
}

export default App