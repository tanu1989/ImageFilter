import React from 'react';
import {Modal, Image} from 'react-bootstrap';

const ImageZoomModal = ({url, show, onHide}) => {

    return (
        <Modal className="image__modal" show={show} onHide={onHide}>
            <Modal.Body>
                <Image src={url} responsive/>
            </Modal.Body>
        </Modal>
    )

}

export default ImageZoomModal;