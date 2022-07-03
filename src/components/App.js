import React from "react";
import { useState } from "react";
import "../styles/App.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";

const App = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="main-container">
        <h2 className="main-heading">Calender App</h2>
        <div className="table-wrapper">
          <table className="table">
            <tbody>
              <tr className="days-row"></tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add your Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="form" onSubmit={formSubmitHandler}>
            <div className="mb-3"></div>
            <div className="row">
              <div className="mb-3 col"></div>
              <div className="mb-3 col"></div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" id="btn-close" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default App;
