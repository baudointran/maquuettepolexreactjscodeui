import React from "react";
//import "font-awesome/css/font-awesome.min.css";
import { Form, Label, FormGroup, Input, Button } from "reactstrap";

export default class DemandeInfo extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleText">Destinataire</Label>
            <Input name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Message</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <Button className="float-right">
            <span className="fa fa-envelope" />{" Envoyer"}
          </Button>
        </Form>
      </div>
    );
  }
}
