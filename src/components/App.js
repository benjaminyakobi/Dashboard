// import "../App.css"
import React from 'react'
// import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import Dashboard from './Dashboard'
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateEmail from "./UpdateEmail"

const App = () => {
  return (
    <AuthProvider>
      {/* <Container style={{ width: 'auto' }}> */}
        <div>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <Route path='/signup' component={Signup} />
                <Route exact path='/' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
                <Route path='/update-email' component={UpdateEmail} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      {/* </Container> */}
    </AuthProvider>
  )
}

export default App