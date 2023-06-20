import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddItemForm from '../../component/addItemModal/addItemForm'
import './addItemModal.css'

function AddItemModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="AddItemButton" onClick={handleShow}>
        Add item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Add new product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody"><AddItemForm /></Modal.Body>
      </Modal>
    </>
  );
}

export default AddItemModal;
