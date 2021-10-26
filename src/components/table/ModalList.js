import React from "react";
import { Tabs, Tab, Modal } from "react-bootstrap";

export const ModalList = ({ showModal, setShowModal, products }) => {
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
        <Tabs transition={false}
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
            <div>Contact</div>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};
