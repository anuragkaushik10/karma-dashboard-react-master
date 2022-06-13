import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import DarkCard from "./DarkCard";
export default function Prescription() {
  return (
    <Container className="form-center" fluid>
      <Row>
        <Col md="12" className="order-xl-2 mt-7 mb-xl-0 pt-0 form-center">
          <Card className="card-profile shadow card-style mb-4">
            <CardHeader className="text-center border-0 pt-md-4 pb-0 pb-md-4 form-title">
              Patient Registration
            </CardHeader>
            <CardBody>
              <CardGroup>
                <Row>
                  <Col>
                    <label for="first" className="onBorderLabel">
                      First
                    </label>
                  </Col>
                  <Col>
                    <input type="text" className="onBorderInput" />
                  </Col>
                </Row>
              </CardGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
