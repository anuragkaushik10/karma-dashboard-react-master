import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { NavItem, NavLink } from "reactstrap";
export default function NavItems({ data }) {
  console.log(data);
  // data.map((id) => );
  return (
    <NavItem>
      {/* <NavLink>
        {data.sideBarData.label}
        to={prop.layout + prop.path}
        tag={NavLinkRRD}
        onClick={closeCollapse}
        activeClassName="active" ><i className={prop.icon} />
        {data.sideBarData.label}
      </NavLink> */}
      {data.map((prop) => (
        <NavLink>{prop.label}</NavLink>
      ))}
    </NavItem>
  );
}
