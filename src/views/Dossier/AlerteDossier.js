import React from "react";
import { ListGroup, ListGroupItem, Row, Col, Button } from "reactstrap";

export default class AlerteDossier extends React.Component {
  render() {
    let alerts = [
      { Alert: "Alert_0023_17042018", Date: "17/04/2018" },
      { Alert: "Alert_0023_17042018", Date: "17/04/2018" }
    ];
    let listAlert = alerts.map(alert => (
      <ListGroupItem>
        <Row>
          <Col xs="6"><a href="#/AlerteDetailContainer"> {alert.Alert}</a></Col>
          <Col xs="auto">{alert.Date}</Col>
        </Row>
      </ListGroupItem>
    ));
    return (
      <div>
        <ListGroup>
          <ListGroupItem>
            <Row>
              <Col xs="6">Alert</Col>
              <Col xs="auto">Date</Col>
            </Row>
          </ListGroupItem>
          {listAlert}
        </ListGroup>
      </div>
    );
  }
}
