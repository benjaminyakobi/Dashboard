import React from "react";
import { Tabs, Tab, Modal } from "react-bootstrap";

export const ModalList = ({ showModal, setShowModal }) => {
  return (
    <Modal
      show={showModal}
      animation={false}
      onHide={() => setShowModal(false)}
    >
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          defaultActiveKey="home"
          id="tabs"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            <div>Home</div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <div>Profile</div>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <div>contact</div>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};
