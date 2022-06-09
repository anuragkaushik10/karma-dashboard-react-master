import React from "react";
import {
  Container,
  Row,
  Col,
  CardHeader,
  Card,
  CardBody,
  Label,
} from "reactstrap";
import "../../assets/css/argon-dashboard-react.css";

import * as Icons from "@fortawesome/free-solid-svg-icons";
import ItemCard from "./ItemCard";

export default function DarkCard({ desc, id, label }) {
  const iconList = Object.keys(Icons)

    .filter((key) => key !== "fas" && key !== "prefix")

    .map((icon) => Icons[icon]);
  return (
    <Col md="6" lg="4">
      <Card className="bg-gradient-default shadow mb-3">
        <CardHeader className="bg-transparent text-center mb--4 main-label">
          <Label>{label}</Label>
        </CardHeader>
        <CardBody>
          <Row className="align-items-center">
            {desc.map((d) => (
              <ItemCard icon={d.icon} label={d.label} />
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
}
