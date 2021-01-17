import React, { useState } from "react";
import "./create-journal.css";
import {addEntry, getEntries} from '../actions/account'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function CreateJournal() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const save = () => {
    addEntry('hi@gmail.com', title, text)
    close()
  }

  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateText = (e) => {
    setText(e.target.value)
  }

  const close = () => setShow(false);
  const open = () => setShow(true);


  return (
    <>
      <Button className="button-spacing" variant="info" onClick={open}>
        Create a new journal entry!
      </Button>
      <Modal
        show={show}
        onHide={close}
        backdrop="static"
        keyboard={false}
        centered={true}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>New Journal Entry!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <FormControl
              onChange={updateTitle}
              placeholder="Journal Entry Title"
              aria-label="Journal entry title input field"
            />
          </InputGroup>
          <br />
          <InputGroup>
            <FormControl
              onChange={updateText}
              as="textarea"
              rows={20}
              placeholder="Start your journal entry here!"
              aria-label="Journal entry input field"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Cancel
          </Button>
          <Button variant="info" onClick={save}>Save!</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateJournal;
