import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

export default class DossierDetail extends React.Component {
  render() {

    let infoDossier = [
      { label: "Alert", value: "Alert-0023-17042018" },
      { label: "Ecole", value: "Ecole-ABC" },
      { label: "Centre", value: "0023" },
      { label: "Type", value: "Success Douteux" },
      { label: "Date", value: "17/04/2018" },
      { label: "Departement", value: "93" },
      { label: "Délégué", value: "...." }
    ];

    let listInfo = infoDossier.map(info => (
      <Row>
        <Col xs="4">{info.label} :</Col>
        <Col xs="auto"> {info.value}</Col>
      </Row>
    )
    );
    return(
      <div>
        <Container>
          {listInfo}
        </Container>

        
        <a href="https://public.tableau.com/fr-fr/s/gallery">
          Voir detail dans tableau
        </a>
      </div>
    );
  }
}