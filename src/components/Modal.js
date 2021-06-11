import React from "react";
import { Modal} from "react-bootstrap"

const  ModalAlert = (props) =>  {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>          
        </Modal.Header>
        <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter">
            Tickets have been booking
          </Modal.Title>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalAlert;