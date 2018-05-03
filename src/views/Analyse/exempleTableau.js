import React from "react";
import TableauReport from "react-tableau-report";

const options = {
  height: "400px",
  width: "100%",
  hideTabs: "true",
  hideToolbar: "true",

};

// const parameters = {
//   Param1: "Value",
//   Param2: "Other Value"
// };
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

    //let url = "https://public.tableau.com/views/PremiumsandTaxCreditsUndertheAffordableCareActACAvsSenateBetterCareReconciliationActBCRA/Dashboard1";

    let url = this.props.url; 
    let filtersTmp=this.props.filters;
    if(url == undefined){
        url = "https://public.tableau.com/views/PremiumsandTaxCreditsUndertheAffordableCareActACAvsSenateBetterCareReconciliationActBCRA/Dashboard1";
      filtersTmp =filters; 
    }
    let params = this.props.params;

    return (
      <TableauReport
        url={url} 
        options={options}
        parameters={params}
        filters={filtersTmp}
      />
    );
  }
}
