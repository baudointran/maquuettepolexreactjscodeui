import React from "react";
import {
  ListGroup, ListGroupItem,
  Row, Col,
  Button
} from "reactstrap";
import "../css/App.css";

export default class Dossiers extends React.Component {
  render() {
    let dossiers = [
      { id:1, Dossier: "Dossier_23", Date: "17/04/2018" },
      { id:2, Dossier: "Dossier_24", Date: "17/04/2018" }
    ];
    let listDossier = dossiers.map(function(dossier){
      let href = "#/DossierDetail/"+ dossier.id;
      return (
      <ListGroupItem key={dossier.id}>
        <Row>
          <Col xs="4"><a href={href}>{dossier.Dossier}</a></Col>
          <Col xs="4">{dossier.Date}</Col>
        {/*  <Col xs="4">
            <Button className="creerDossier">
              <span className="fas fa-file"></span>
            </Button>
            <Button className="ignorerAlert">
              <span className="fas fa-times"></span>
            </Button>
            <Button className="AjoutDossier">
              <span className="fas fa-plus"></span>
            </Button>
          </Col>
          */}
        </Row>
      </ListGroupItem>
    );});
    return (
      <div>
        <ListGroup>
          <ListGroupItem>
            <Row>
              <Col xs="4">Dossier</Col>
              <Col xs="4">Date</Col>
             {/* <Col xs="4">Action</Col>*/}
            </Row>
          </ListGroupItem>
          {listDossier}
        </ListGroup>
      </div>
    );
  }
}
