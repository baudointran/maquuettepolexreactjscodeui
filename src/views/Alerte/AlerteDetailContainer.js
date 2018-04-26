import React from "react";
import {
  CardHeader,
  Card, 
  CardBody,
  CardTitle,
  CardFooter,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import AlerteDetailTableau from "./AlerteDetailTableau";
import "../css/App.css";
//import "font-awesome/css/font-awesome.min.css";

export default class AlerteDetailContainer extends React.Component {
  render() {
    let infoAlert = [
      { label: "Ecole", value: "Ecole-ABC" },
      { label: "Centre", value: "0023" },
      { label: "Type", value: "Success Douteux" },
      { label: "Date", value: "17/04/2018" },
      { label: "Departement", value: "93" }
    ];

    let listInfo = infoAlert.map(info => (
      <Row>
        <Col xs="4">{info.label} :</Col>
        <Col xs="auto"> {info.value}</Col>
      </Row>
    ));
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Alerte: Alert_0023_17042018</CardTitle>
          </CardHeader>
          <CardBody>
            <Container>{listInfo}</Container>
            <Container>
              <AlerteDetailTableau />
            </Container>
          </CardBody>
          <CardFooter>
            <Button className="float-left">
              <span className="fa fa-times" /> Sans objet
            </Button>
            <Button
              className="float-left marging-left-10"
              href="#/DossiersCurrent"
            >
              <span className="fa fa-plus" /> Ajouter à un dossier existant
            </Button>
            <Button className="float-right" href="#/DossierDetailContainer">
              <span className="fa fa-file" /> Suivre un nouveau dossier
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
