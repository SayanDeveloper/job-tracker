import React from 'react'
// import { Button, Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";

const CustomModal = ({showModal, setShowModal, children, type}) => {
    return (
        <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {type === "recommended" && "Job Details"}
                {type === "application" && "Application Details"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setShowModal(false)}>
                    {type==="recommended" && "Apply"}
                    {type==="application" && "Close"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal
