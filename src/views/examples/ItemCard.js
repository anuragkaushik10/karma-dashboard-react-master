import React from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function ItemCard({ icon, label }) {
  console.log(label);
  const iconList = Object.keys(Icons)

    .filter((key) => key !== "fas" && key !== "prefix")

    .map((icon) => Icons[icon]);

  return (
    <Col className="text-center col-4 pb-2">
      <FontAwesomeIcon className="icons" icon={icon}></FontAwesomeIcon>
      <br></br>
      <span className="pb-0 small-grid-label">{label}</span>
    </Col>
  );
}
