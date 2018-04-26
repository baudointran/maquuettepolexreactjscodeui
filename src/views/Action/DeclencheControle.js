import React from "react";
import { Form, Label, FormGroup, Input, Button, Row, Col } from "reactstrap";
import "../css/App.css";
import FileUpload from "../Utils/FileUpload";

export default class DeclencheControle extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Row>
            <Col>
              <FormGroup id="id_date">
                <Label for="exampleDatetime">Date : </Label>
                <Input
                  type="datetime"
                  name="datetime"
                  id="exampleDatetime"
                  placeholder="datetime placeholder"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check id="id_check">
                <Label check>
                  <Input type="checkbox" name="ForceOrdre" />{" "}
                  <span>Présence de Force de l'ordre</span>
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup id="id_comment">
                <Label for="exampleText">Commentaire</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
                {/*<FileUpload />*/}
              <FormGroup id="id_inpur_files">
                <Label for="examplefiles">Ficher à ajouter</Label>
                <Input type="file" name="text" id="examplefiles" />
              </FormGroup>
            </Col>
          </Row>
          <Button className="float-right">Valider</Button>
        </Form>
      </div>
    );
  }
}
