import React from "react";
import TableauReport from "react-tableau-report";

const options = {
  height: "400px",
  width: "100%",
  hideTabs: "false",
  hideToolbar: "true"
};

const parameters = {
  Param1: "Value",
  Param2: "Other Value"
};
const filters = {
  Age: "27 years old",
  State: "Alaska"
};

const iframestyle = {
  width: "100%",
  height: "400px"
};

export default class ExempleTableau extends React.Component {
  render() {
    return (
      <TableauReport
        url="https://public.tableau.com/views/PremiumsandTaxCreditsUndertheAffordableCareActACAvsSenateBetterCareReconciliationActBCRA/Dashboard1"
        options={options}
        filters={filters}
      />
    );
  }
}
