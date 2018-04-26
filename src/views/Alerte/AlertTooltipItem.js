import React from "react";
import { Button, Tooltip } from "reactstrap";

export default class AlertTooltipItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    let text = this.props.item;
    let texttooltip = this.props.texttooltip;
    let faicon = "fa " + this.props.icon;
    return (
      <span>
        <Button
          className="mr-1"
          id={"Tooltip-" + this.props.id}
          href={this.props.Href}
        >
          {text}
          <span className={faicon} />
        </Button>
        <Tooltip
          isOpen={this.state.tooltipOpen}
          target={"Tooltip-" + this.props.id}
          toggle={this.toggle}
        >
          {texttooltip}
        </Tooltip>
      </span>
    );
  }
}
