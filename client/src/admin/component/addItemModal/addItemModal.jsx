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
      <Button className="AddItemButton" variant="primary"  onClick={handleShow}>
        Add item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new product form</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddItemForm /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItemModal;
