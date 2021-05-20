import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import JSZip from 'jszip';
import saveAs from 'file-saver';
import './../Styles/Layout.css';

function verticallyCenteredModal(props) {
  function packLayout() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'Layout1.js', true);
    xhr.responseType = "arraybuffer";
    xhr.onreadystatechange = function(e) {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          let zip = new JSZip();
          zip.file("Layout1.js", xhr.response);
          zip.generateAsync({type:"blob"})
          .then(function(content){
            saveAs(content, "Layout1.zip");
          });
        }
      }
    }
    xhr.send();
  }
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
              <li>React</li>
              <li>React-Bootstrap</li>
              <li>Bootstrap v4.6.0+</li>
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
        <Button variant="dark" className="dl-button" onClick={() => packLayout()}>Download</Button>
        <Button variant="dark" className="close-button" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default verticallyCenteredModal;

// const zip = new JSZip();
// let docs = zip.folder('Layout1');
// docs.file('./Layout1.js');
// docs.file('./../img/Forest.jpg');
// docs.file('./../img/desktop_forest.jpg');
// docs.file('./../Styles/Layout1.module.css');
// zip.generateAsync({type:"blob"})
//   .then(function(content){
//     saveAs(content, "Layout1.zip");
//   });