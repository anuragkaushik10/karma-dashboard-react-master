import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Header,
} from "reactstrap";

import logo from "../../assets/img/brand/logo.png";
import "../../assets/css/argon-dashboard-react.css";
const Register = () => {
  return (
    <>
      <Col lg="5" md="8">
        <h2 className="login-header">Welcome to Karma Primary Healthcare</h2>
        <Card className="bg-secondary shadow border-0 pt--8 login-class pl-0 pr-0">
          <CardBody className="px-lg-4 py-lg-4 pl-4 pr-4">
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <img src={logo} width="40%" alt="logo" />
            </div>
            <div className="text-center text-muted mb-4">
              <small>Please enter your username and password</small>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Username"
                    type="email"
                    autoComplete="new-email"
                    className="input-box"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center ">
                <Button className="mt-2 w-100" color="primary" type="button">
                  <p
                    style={{
                      marginLeft: "5px",
                      height: "12px",
                      padding: "2px",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i className="ni ni-lock-circle-open mt-0 mb-0 mr-1" />{" "}
                      Login
                    </span>
                  </p>
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
