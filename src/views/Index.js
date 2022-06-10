import { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import Chart from "chart.js";
// react plugin used to create charts
import { chartOptions, parseOptions } from "variables/charts.js";

import Header from "components/Headers/Header.js";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row } from "reactstrap";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import DarkCard from "./examples/DarkCard";
const iconList = Object.keys(Icons)

  .filter((key) => key !== "fas" && key !== "prefix")

  .map((icon) => Icons[icon]);

library.add(...iconList);
const Index = (props) => {
  const data = [
    {
      id: 1,
      data: [
        {
          id: 1,
          url: "xyz",
          label: "Patient Registration",
          icon: "fa-solid fa-hospital-user",
        },
        {
          id: 3,
          url: "xyz",
          label: "Search Patient",
          icon: "fa-solid fa-magnifying-glass-plus",
        },
      ],
      label: "Patient",
    },
    {
      id: 2,
      data: [
        {
          id: 2,
          url: "xyz",
          label: "Create Prescription",
          icon: "fa-solid fa-prescription",
        },
        {
          id: 2,
          url: "xyz",
          label: "Review Patients",
          icon: "fa-solid fa-address-card",
        },
        {
          id: 3,
          url: "xyz",
          label: "Repeat Patient",
          icon: "fa-solid fa-repeat",
        },
        {
          id: 2,
          url: "xyz",
          label: "Doctor Details",
          icon: "fa-solid fa-circle-info",
        },
        {
          id: 2,
          url: "xyz",
          label: "Search Prescription",
          icon: "fa-solid fa-magnifying-glass",
        },
        {
          id: 2,
          url: "xyz",
          label: "Search Queue",
          icon: "fa-solid fa-users",
        },
        {
          id: 2,
          url: "xyz",
          label: "Out Reach",
          icon: "fa-solid fa-route",
        },
        {
          id: 2,
          url: "",
          label: "Doctor Allocation",
          icon: "fa-solid fa-user-doctor",
        },
      ],
      label: "Consultation",
    },
    {
      id: 5,
      data: [
        {
          id: 1,
          url: "xyz",
          label: "Place Centre Order",
          icon: "fa-solid fa-truck-medical",
        },
        {
          id: 3,
          url: "xyz",
          label: "Confirm Order",
          icon: "fa-solid fa-clipboard-check",
        },
        {
          id: 2,
          url: "xyz",
          label: "Search Order",
          icon: "fa-solid fa-dolly",
        },
        {
          id: 2,
          url: "xyz",
          label: "Reconciliation",
          icon: "fa-solid fa-book",
        },
        {
          id: 2,
          url: "xyz",
          label: "Medicine Details",
          icon: "fa-solid fa-asterisk",
        },
        {
          id: 2,
          url: "xyz",
          label: "Medicine Consumption",
          icon: "fa-solid fa-pills",
        },
        {
          id: 2,
          url: "xyz",
          label: "Pricing",
          icon: "fa-solid fa-indian-rupee-sign",
        },
        {
          id: 2,
          url: "xyz",
          label: "Pricing Details",
          icon: "fa-solid fa-money-bill-1",
        },
      ],
      label: "Inventory",
    },
    {
      id: 4,
      data: [
        {
          id: 1,
          url: "xyz",
          label: "Assign Roles",
          icon: "fa-solid fa-user-group",
        },
        {
          id: 3,
          url: "xyz",
          label: "Settings",
          icon: "fa-solid fa-gear",
        },
      ],
      label: "Admin",
    },
  ];

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <>
      <Header />
      {/* {data.map((d) => (
        <DarkCard key={d.id} desc={d.data}></DarkCard>
      ))} */}
      <Container className="main-card" fluid>
        <Row>
          {data.map((d) => (
            <DarkCard desc={d.data} id={d.id} label={d.label}></DarkCard>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Index;
