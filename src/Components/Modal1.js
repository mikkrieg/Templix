import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './../Styles/Layout.css';


function verticallyCenteredModal(props) {
  return(
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Specifications:</h4>
        <ul className="modal-list">
          <li className="spec-li"> <span className="modal-span">Styled with:</span> {props.spec1} & {props.spec2}</li>
          <li className="spec-li"> <span className="modal-span">Download size:</span> {props.spec3}</li>
          <li className="spec-li"> <span className="modal-span">Main technologies:</span> {props.spec4} & {props.spec5}</li>
          <li className="spec-li"> <span className="modal-span">CSS files:</span> {props.spec6}</li>
          <li className="spec-li"> <span className="modal-span">Content files: </span> {props.spec7}</li>
          <li className="spec-li"> <span className="modal-span">Image files: </span> {props.spec8}</li>
        </ul>
        <Modal.Title id="contained-modal-title-vcenter">
          Instructions:
        </Modal.Title>
        <ol>
          <li>Select the download button in the bottom left hand corner</li>
          <li>To use this splash template you will need to install:
            <ul>
              <li>NPM or another package manager</li>
              <li>create-react-app</li>
              <li>React-Bootstrap</li>
              <li>Bootstrap</li>
            </ul>
          </li>
          <li>Once downloaded add files to an existing project or start a new one from scratch</li>
          <li>Don't forget to read the comments in the js file and css file to remove lines and styles that are no longer needed</li>
        </ol>
        <ul>
          <li>If you don't want to use create-react-app make sure to install CSS modules (this package is built in to create-react-app)</li>
        </ul>
      </Modal.Body>
      <Modal.Footer className="modal-foot">
        <Button className="dl-button">Download</Button>
        <Button className="close-button" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default verticallyCenteredModal;