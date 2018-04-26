import React from "react";
import {
  CardHeader,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter
} from "reactstrap";

import ExempleTableau from "./exempleTableau";

export default class AVSAContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title = this.props.title;
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardBody>
            <ExempleTableau />
          </CardBody>
        </Card>
      </div>
    );
  }
}
