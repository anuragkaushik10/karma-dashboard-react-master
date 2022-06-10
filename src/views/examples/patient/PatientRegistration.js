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
  return (
    <Container className="form-center" fluid>
      <Row>
        <Col md="8" className="order-xl-2 mt-7 mb-xl-0 pt-0 form-center">
          <Card className="card-profile shadow ">
            <CardHeader className="text-center border-0 pt-md-4 pb-0 pb-md-4 form-title">
              Patient Registration
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Patient information
                </h6>
                <div>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          Patient Name
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-username"
                          placeholder="Patient Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Patient's/Spouse Name
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-email"
                          type="email"
                          placeholder="Patient's/Spouse Name"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label mr-4"
                          htmlFor="input-first-name"
                        >
                          Date of Birth
                        </label>
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
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label mr-5"
                          htmlFor="input-first-name"
                        >
                          Gender
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
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label mr-4"
                          htmlFor="input-first-name"
                        >
                          Married
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
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label mr-4"
                          htmlFor="input-first-name"
                        >
                          BPL
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
                  <Row>
                    <Col>
                      <FormGroup>
                        <label className="form-control-label mr-4">
                          Occupation
                        </label>
                        <span>
                          <select>
                            <options></options>
                            <options></options>
                            <options></options>
                          </select>
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label mr-4"
                          htmlFor="input-first-name"
                        >
                          PR Type
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
                            <input
                              type="radio"
                              value="Adult"
                              name="Adult"
                              checked={age === "Adult"}
                            />{" "}
                            Others
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
                            None
                          </span>
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label className="form-control-label mr-4">
                          Village Name/Address
                        </label>
                        <span>
                          <select>
                            <options></options>
                            <options></options>
                            <options></options>
                          </select>
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label className="form-control-label mr-4">
                          Outreach Code
                        </label>
                        <span>
                          <select>
                            <options></options>
                            <options></options>
                            <options></options>
                          </select>
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label className="form-control-label mr-4">
                          Mobile No.
                        </label>
                        <input type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label className="form-control-label mr-4">
                          Aadhar Card No.
                        </label>
                        <input type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label mr-4"
                          htmlFor="input-first-name"
                        >
                          Enroll in Prerna programme
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
                  <Row>
                    <Col>
                      <FormGroup>
                        <label className="form-control-label mr-4">
                          Parent Comments
                        </label>
                      </FormGroup>
                      <span>
                        <textarea style={{ width: "100%" }}></textarea>
                      </span>
                    </Col>
                  </Row>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
