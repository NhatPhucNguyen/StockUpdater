import React, { ReactNode } from "react";
import { Button, Modal as ModalContainer } from "react-bootstrap";
type Props = {
    show: boolean;
    handleClose: () => void;
    children?:ReactNode
};
const Modal = ({show,handleClose,children}:Props) => {
    return (
        <ModalContainer show={show} onHide={handleClose}>
            <ModalContainer.Header closeButton>
                <ModalContainer.Title>Modal heading</ModalContainer.Title>
            </ModalContainer.Header>
            <ModalContainer.Body>
                {children}
            </ModalContainer.Body>
            <ModalContainer.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </ModalContainer.Footer>
        </ModalContainer>
    );
};

export default Modal;
