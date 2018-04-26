import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  Tooltip
} from "reactstrap";
import "../css/App.css";
//import "font-awesome/css/font-awesome.min.css";
import AlertTooltipItem from "./AlertTooltipItem";

export default class Alertes extends React.Component {
  constructor(props) {
    super(props);

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);

    this.state = {
      tooltipOpen1: false,
      tooltipOpen2: false,
      tooltipOpen3: false
    };
  }

  toggle1() {
    this.setState({
      tooltipOpen1: !this.state.tooltipOpen1
    });
  }
  toggle2() {
    this.setState({
      tooltipOpen2: !this.state.tooltipOpen2
    });
  }
  toggle3() {
    this.setState({
      tooltipOpen3: !this.state.tooltipOpen3
    });
  }

  render() {
    let alerts = [
      { id: 1, Alert: "Alert_0023_17042018", type: "AvsA", Date: "17/04/2018" },
      {
        id: 2,
        Alert: "Alert_0023_17042018",
        type: "Progression fulgurante",
        Date: "17/04/2018"
      }
    ];
    let listAlert = alerts.map(function(alert) {
      let items = {
        createDossier: {
          text: "",
          texttooltip: "Nouveau dossier",
          icon: "fa-file"
        },
        ignorer: {
          text: "",
          texttooltip: "Ignorer",
          icon: "fa-times"
        },
        adddossier: {
          text: "",
          texttooltip: "Lier à un dossier",
          icon: "fa-plus"
        }
      };
      return (
        <ListGroupItem key={alert.id}>
          <Row>
            <Col xs="3">
              <a href="#/AlerteDetailContainer"> {alert.Alert}</a>
            </Col>
            <Col xs="3">{alert.type}</Col>
            <Col xs="3">{alert.Date}</Col>
            <Col xs="3">
              <AlertTooltipItem
                id={"id_creer_dossier" + alert.id}
                item={items.createDossier.text}
                texttooltip={items.createDossier.texttooltip}
                icon={items.createDossier.icon}
                Href="#/DossierDetailContainer"
              />
              <AlertTooltipItem
                id={"id_ignorer_alert" + alert.id}
                item={items.ignorer.text}
                texttooltip={items.ignorer.texttooltip}
                icon={items.ignorer.icon}
              />
              <AlertTooltipItem
                id={"id_add_dossier" + alert.id}
                item={items.adddossier.text}
                texttooltip={items.adddossier.texttooltip}
                icon={items.adddossier.icon}
                Href="#/DossiersCurrent"
              />
            </Col>
          </Row>
        </ListGroupItem>
      );
    });

    return (
      <div>
        <ListGroup>
          <ListGroupItem>
            <Row>
              <Col xs="3">Alert</Col>
              <Col xs="3">Type</Col>
              <Col xs="3">Date</Col>
              <Col xs="3">Action</Col>
            </Row>
          </ListGroupItem>
          {listAlert}
        </ListGroup>
      </div>
    );
  }
}
