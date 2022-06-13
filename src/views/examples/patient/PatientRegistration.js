import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

export default function PatientRegistration() {
  const [age, setAge] = useState("Age");

  const asterisk = {
    color: "red",
  };
  return (
    <Container className="form-center" fluid>
      <Row>
        <Col md="12" className="order-xl-2 mt-7 mb-xl-0 pt-0 form-center">
          <Card className="card-profile shadow card-style mb-4">
            <CardHeader className="text-center border-0 pt-md-4 pb-0 pb-md-4 form-title">
              Patient Registration
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Patient information
                </h6>
                <div>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label className="form-control-label mr-4">
                          <span style={asterisk}>*</span> Occupation
                        </label>
                      </Col>
                      <Col xs="12" sm="6" md="8">
                        <span>
                          <select>
                            <options></options>
                            <options></options>
                            <options></options>
                          </select>
                        </span>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label
                          className="form-control-label mr-4"
                          htmlFor="input-first-name"
                        >
                          <span style={asterisk}>*</span> Patient Name
                        </label>
                      </Col>
                      <Col xs="12" sm="6" md="8">
                        <input type="text"></input>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label
                          className="form-control-label mr-4"
                          htmlFor="input-first-name"
                        >
                          <span style={asterisk}>*</span> Parent's\Spouse Name:
                        </label>
                      </Col>
                      <Col xs="12" sm="6">
                        <input type="text"></input>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label
                          className="form-control-label mr-4"
                          htmlFor="input-first-name"
                        >
                          <span style={asterisk}>*</span> Date of Birth
                        </label>
                      </Col>
                      <Col xs="12" sm="6" md="8">
                        <span mr-4>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Age");
                            }}
                          >
                            <input
                              type="radio"
                              value="Age"
                              name="Age"
                              checked={age === "Age"}
                            />{" "}
                            Date of Birth
                          </span>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Adult");
                            }}
                          >
                            <input
                              type="radio"
                              value="Adult"
                              name="Adult"
                              checked={age === "Adult"}
                            />{" "}
                            Age(For patients above 5 years)
                          </span>
                        </span>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label
                          className="form-control-label mr-5"
                          htmlFor="input-first-name"
                        >
                          <span style={asterisk}>*</span> Gender
                        </label>
                      </Col>
                      <Col sm="6" xs="12" md="8">
                        <span>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Age");
                            }}
                          >
                            <input
                              type="radio"
                              value="Age"
                              name="Age"
                              checked={age === "Age"}
                            />{" "}
                            Male
                          </span>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Adult");
                            }}
                          >
                            <input
                              type="radio"
                              value="Adult"
                              name="Adult"
                              checked={age === "Adult"}
                            />{" "}
                            Female
                          </span>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Adult");
                            }}
                          >
                            <input
                              type="radio"
                              value="Adult"
                              name="Adult"
                              checked={age === "Adult"}
                            />{" "}
                            Others
                          </span>
                        </span>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label
                          className="form-control-label mr-4"
                          htmlFor="input-first-name"
                        >
                          <span style={asterisk}>* </span> Married
                        </label>
                      </Col>
                      <Col xs="12" sm="6">
                        <span>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Age");
                            }}
                          >
                            <input
                              type="radio"
                              value="Age"
                              name="Age"
                              checked={age === "Age"}
                            />{" "}
                            Yes
                          </span>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Adult");
                            }}
                          >
                            <input
                              type="radio"
                              value="Adult"
                              name="Adult"
                              checked={age === "Adult"}
                            />{" "}
                            No
                          </span>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Adult");
                            }}
                          >
                            <input
                              type="radio"
                              value="Adult"
                              name="Adult"
                              checked={age === "Adult"}
                            />{" "}
                            Others
                          </span>
                        </span>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label
                          className="form-control-label mr-4"
                          htmlFor="input-first-name"
                        >
                          <span style={asterisk}>*</span> BPL
                        </label>
                      </Col>
                      <Col xs="12" sm="6">
                        <span>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Age");
                            }}
                          >
                            <input
                              type="radio"
                              value="Age"
                              name="Age"
                              checked={age === "Age"}
                            />{" "}
                            Yes
                          </span>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Adult");
                            }}
                          >
                            <input
                              type="radio"
                              value="Adult"
                              name="Adult"
                              checked={age === "Adult"}
                            />{" "}
                            No
                          </span>
                        </span>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label className="form-control-label mr-4">
                          <span style={asterisk}>*</span> Occupation
                        </label>
                      </Col>
                      <Col xs="12" sm="6">
                        <span>
                          <select>
                            <options></options>
                            <options></options>
                            <options></options>
                          </select>
                        </span>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          <span style={asterisk}>*</span> PR Type
                        </label>
                      </Col>
                      <Col xs="12" sm="6" md="8">
                        <span
                          className="mr-4"
                          onClick={() => {
                            setAge("Age");
                          }}
                        >
                          <input
                            type="radio"
                            value="Age"
                            name="Age"
                            checked={age === "Age"}
                          />{" "}
                          Foid
                        </span>
                        <span
                          className="mr-4"
                          onClick={() => {
                            setAge("Adult");
                          }}
                        >
                          <input
                            type="radio"
                            value="Adult"
                            name="Adult"
                            checked={age === "Adult"}
                          />{" "}
                          Aanganwadi
                        </span>
                        <span
                          className="mr-4"
                          onClick={() => {
                            setAge("Adult");
                          }}
                        >
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Adult");
                            }}
                          >
                            <input
                              type="radio"
                              value="Adult"
                              name="Adult"
                              checked={age === "Adult"}
                            />{" "}
                            None
                          </span>
                        </span>{" "}
                        <input
                          type="radio"
                          value="Adult"
                          name="Adult"
                          checked={age === "Adult"}
                        />{" "}
                        Others
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label className="form-control-label">
                          <span style={asterisk}>*</span> Village Name/Address
                        </label>
                      </Col>
                      <Col xs="12" sm="4">
                        <select>
                          <options></options>
                          <options></options>
                          <options></options>
                        </select>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label className="form-control-label">
                          <span style={asterisk}>*</span> Outreach Code
                        </label>
                      </Col>
                      <Col xs="12" sm="4">
                        <select>
                          <options></options>
                          <options></options>
                          <options></options>
                        </select>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label className="form-control-label">
                          <span style={asterisk}>*</span> Mobile No.
                        </label>
                      </Col>
                      <Col xs="12" sm="4">
                        <input type="number" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label className="form-control-label">
                          <span style={asterisk}>*</span> Aadhar Card No.
                        </label>
                      </Col>
                      <Col xs="12" sm="4">
                        <div>
                          <input type="number" />
                        </div>
                      </Col>
                    </Row>
                  </FormGroup>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label mr-4"
                          htmlFor="input-first-name"
                        >
                          <span style={asterisk}>*</span> Enroll in Prerna
                          programme
                        </label>
                        <span>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Age");
                            }}
                          >
                            <input
                              type="radio"
                              value="Age"
                              name="Age"
                              checked={age === "Age"}
                            />{" "}
                            Yes
                          </span>
                          <span
                            className="mr-4"
                            onClick={() => {
                              setAge("Adult");
                            }}
                          >
                            <input
                              type="radio"
                              value="Adult"
                              name="Adult"
                              checked={age === "Adult"}
                            />{" "}
                            No
                          </span>
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Row>
                      <Col md="4" xs="12" sm="4">
                        <label className="form-control-label mr-4">
                          <span style={asterisk}>*</span> Parent Comments
                        </label>
                      </Col>
                      <Col>
                        <span>
                          <textarea style={{ width: "100%" }}></textarea>
                        </span>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row className="">
                      <Col md="12" xs="12" sm="12" className="mb-3 text-center">
                        <Button
                          onClick={(e) => e.preventDefault()}
                          color="danger"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={(e) => e.preventDefault()}
                          color="primary"
                        >
                          Reset
                        </Button>
                        <Button
                          onClick={(e) => e.preventDefault()}
                          color="info"
                        >
                          Save
                        </Button>
                      </Col>
                      <Row className="text-center">
                        <Col md="12" className="mb-4" xs="12">
                          <Button
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                            color="primary"
                          >
                            Add Prescription
                          </Button>
                          <Button
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                            color="primary"
                          >
                            Schedule Appointment
                          </Button>
                          <Button
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                            color="primary"
                          >
                            Add Case History
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                            color="primary"
                          >
                            Add D2D Home Visit
                          </Button>
                          <Button
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                            color="primary"
                          >
                            Add OTC
                          </Button>
                          <Button
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                            color="danger"
                          >
                            Add Camp
                          </Button>
                        </Col>
                      </Row>
                    </Row>
                  </FormGroup>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
