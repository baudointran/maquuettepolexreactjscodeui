import React from "react";
import { Form, Label, FormGroup, Input, Button, Row, Col } from "reactstrap";

export default class SansSuite extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleText">Commentaire</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </Col>
          </Row>
          <Button className="float-right">Valider</Button>
        </Form>
      </div>
    );
  }
}
