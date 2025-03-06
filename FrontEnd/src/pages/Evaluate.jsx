import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Evaluate.css";

const Evaluate = () => {
  const navigate = useNavigate();
  const [evaluationData, setEvaluationData] = useState(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const handleEvaluate = async () => {
    setIsEvaluating(true);

    const formData = new FormData();
    const pitchDeck = document.querySelector("#formFile").files[0];
    const teamResumes = document.querySelector("#formFileMultiple").files;

    if (pitchDeck) {
          formData.append("pitch_deck", pitchDeck);
      }

      if (teamResumes.length > 0) {
          for (let file of teamResumes) {
              formData.append("team_resumes", file);
          }
      } else {
          console.warn("No team resumes selected.");
      }

      try {
          const response = await fetch("http://127.0.0.1:8000/api/evaluate-startup/", {
              method: "POST",
              body: formData,
          });

          if (response.ok) {
              const data = await response.json();
              console.log("Success:", data);
              setShowReportModal(true);
              setEvaluationData(data);
          } else {
              console.error("Error:", response.statusText);
          }
      } catch (error) {
          console.error("Error:", error.message);
          console.error("Stack:", error.stack);
      } finally {
          setIsEvaluating(false);
      }
  };

  // Inside your Evaluate component
  const handleReportResponse = (choice, response) => {
    setShowReportModal(false);
    
    console.log("Debug: Response received in handleReportResponse:", response);

    if (choice === "yes") {
        if (!response || !response.evaluation) {
            console.error("Error: response is undefined or missing evaluation");
            return;
        }

        navigate("/report", {
            state: {
                evaluation: response.evaluation,
                tokens_used: response.tokens_used || 0,
            },
        });
    }
  };

  return (
    <>
      <Container className="text-center mt-5">
        <h1 className="Eval-heading">Evaluate Your Business</h1>
      </Container>
      <Container className="text-center mt-5">
        <Form.Group controlId="formFile" className="mb-3 custom-file-upload">
          <Form.Label className="form-heading">Select Your Pitch Deck</Form.Label>
          <Form.Control className="uploadspace" type="file" />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3 custom-file-upload">
          <Form.Label className="form-heading">Select Your Team Resumes</Form.Label>
          <Form.Control className="uploadspace" type="file" multiple />
        </Form.Group>
      </Container>

      {/* Evaluate Button */}
      <div className="text-center mt-4">
        {/* <Button variant="outline-secondary" onClick={Evaluate} disabled={isEvaluating}> */}
        <Button variant="outline-secondary" onClick={handleEvaluate} disabled={isEvaluating}>
          {isEvaluating ? <Spinner animation="border" size="sm" /> : "Evaluate"}
        </Button>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-heading">Get Report</h3>
            <p className="modal-text">Would you like to get the report?</p>
            <div className="modal-buttons">
              <button onClick={() => handleReportResponse("no", evaluationData)} className="modal-button modal-button-no">
                No
              </button>
              <button onClick={() => handleReportResponse("yes", evaluationData)} className="modal-button modal-button-yes">
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Evaluate;
