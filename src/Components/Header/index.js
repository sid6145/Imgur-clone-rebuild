import React, {useState} from "react";
import { Navbar, Nav, Container, Modal, Button, closeButton } from "react-bootstrap"
import { storage, db } from "../../firebase-config"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Header() {
  const [image, setImage] = useState(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnchange = (e) => {
    setImage(e.target.files[0])
  }

  const handleUpload = () => {
    handleClose()
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url)
              db.collection("images").add({
                url: url,
              });
          });
      }
    )
  }

  console.log(image)

  return (
    <>
      //Navbar

      <Navbar fixed="top" collapseOnSelect expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src="/images/imgur-logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <button onClick={handleShow} className="upload-btn">
                <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg" />{" "}
                New Post
              </button>
            </Nav>
            <Nav className="ms-auto">
              <button className="signin">Sign in</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    //Image Upload Modal
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select image to upload</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="file" onChange={handleOnchange}/></Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={handleUpload}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
