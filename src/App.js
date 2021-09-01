import React from 'react'
import "./App.css"

const App = () => {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Adress</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Benjamin</td>
            <td>Ashdod</td>
            <td>972-972-9722</td>
            <td>Benjamin@benj.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App