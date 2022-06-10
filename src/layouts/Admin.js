/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  const sideBarData = [
    {
      id: 1,
      name: "Registration",
      items: ["Patient", "Prescription"],
    },
    {
      id: 2,
      name: "Search",
      items: [
        "Patient",
        "Appointment",
        "Outreach Code",
        "Prescription",
        "Queue",
      ],
    },
    {
      id: 3,
      name: "View",
      items: [
        "Dashboard",
        "Doctor Allocation",
        "Doctor Leave",
        "Patient Queue",
      ],
    },
    {
      id: 4,
      name: "D2D Activity",
      items: ["D2D Activity", "D2D Activity Tracking"],
    },
    {
      id: 5,
      name: "Leave Management",
      items: [
        "Leave Details",
        "Leave Application",
        "Add Official Leaves",
        "Leave Types Userwise",
        "Manage User Leaves",
        "Manage Team Leaves",
      ],
    },
    {
      id: 5,
      name: "Healthcard",
      items: [
        "Healthcard Search",
        "Healthcard Add",
        "Healthcard Allotment",
        "Healthcard Manage",
      ],
    },
    {
      id: 6,
      name: "Camp",
      items: [],
    },
  ];

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/logo.png").default,
          imgAlt: "logo",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/admin/index" />
        </Switch>
        <Container fluid></Container>
      </div>
    </>
  );
};

export default Admin;
