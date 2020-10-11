import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

export default function ModalView() {
  let history = useHistory();
  let { id } = useParams();

  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState([]);
  const [error, setError] = useState(null);

  const BASE_URL = `https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions/${id}.json`;

  useEffect(() => {
    axios
      .get(BASE_URL, {
        params: { markdown: true },
      })
      .then((res) => {
        setJob(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  });

  let handleClose = () => {
    history.goBack();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading && <h4>Loading...</h4>}
          {job.title}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
