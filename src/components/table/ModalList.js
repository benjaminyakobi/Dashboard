import React from 'react'
import { Modal } from 'react-bootstrap'

export const ModalList = ({ showModal, setShowModal }) => {
    return (
        <Modal show={showModal} animation={false} onHide={() => setShowModal(false)}>
            <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
        </Modal>
    )
}
