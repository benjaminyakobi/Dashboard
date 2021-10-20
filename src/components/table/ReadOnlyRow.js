import React from "react";
import { Button } from "react-bootstrap";

function ReadOnlyRow({ contact, handleEditClick, handleDeleteClick }) {
  return (
    <tr>
      <td>Modal</td>
      <td>
        {new Date(contact.dateTime).toLocaleString("he-IL", {
          dateStyle: "short",
          timeStyle: "short",
        })}
      </td>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td style={{ width: "10px" }}>
        <Button
          type="button"
          size="sm"
          variant="success"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </Button>{" "}
      </td>
      <td style={{ width: "10px", paddingRight: "10px" }}>
        <Button
          type="button"
          size="sm"
          variant="danger"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default ReadOnlyRow;
