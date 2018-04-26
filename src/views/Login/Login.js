import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.css";

export default class Login extends React.Component {
  render() {
    return (
      <Form id="form-login">
        <FormGroup className="row">
          <Label className="col-md-3" for="exampleEmail">
            Login :
          </Label>
          <Input
            className="col-md-3"
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup className="row">
          <Label className="col-md-3 " for="examplePassword">
            Password :{" "}
          </Label>
          <Input
            className="col-md-3 "
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>

        <Button className="float-right">Valider</Button>
      </Form>
    );
  }
}
