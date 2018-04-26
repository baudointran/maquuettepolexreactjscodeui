import React from "react";
import {
  CardHeader,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import Dossiers from "./Dossiers";

export default class DossiersCurrent extends React.Component {

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Dossier en cours</CardTitle>
        </CardHeader>
        <CardBody >
          <Dossiers />
        </CardBody>
      </Card>
    );
  }
}
