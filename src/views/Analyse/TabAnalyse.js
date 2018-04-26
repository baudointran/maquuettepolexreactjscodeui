import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import AVSAContainer from "./AVSAContainer";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    let analyses = [
      { id: "1", title: "AvsA" },
      { id: "2", title: "AvsC" },
      { id: "3", title: "Croisement AvsA x AvsC" },
      { id: "4", title: "Progression fulgurante" },
      { id: "5", title: "Réussite après changement de département" },
      { id: "6", title: "Différence kilométrique Auto-école <-> Centre" }
    ];

    let listNav = analyses.map(analyse => (
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.activeTab === analyse.id
          })}
          onClick={() => {
            this.toggle(analyse.id);
          }}
        >
          {analyse.title}
        </NavLink>
      </NavItem>
    ));

    let listTab = analyses.map(analyse => (
      <TabPane tabId={analyse.id}>
        <Row>
          <Col sm="12">
            <AVSAContainer title={analyse.title} />
          </Col>
        </Row>
      </TabPane>
    ));
    return (
      <div>
        <Nav tabs>{listNav}</Nav>
        <TabContent activeTab={this.state.activeTab}>{listTab}</TabContent>
      </div>
    );
  }
}
