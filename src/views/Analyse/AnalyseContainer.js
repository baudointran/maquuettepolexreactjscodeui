import React from "react";
import TableauReport from "react-tableau-report";
//import AVSAContainer from "./AVSAContainer";
import TabAnalyse from "./TabAnalyse";

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

export default class AnalyseContainer extends React.Component {
  render() {
    return (
      <div>
        {/*        <AVSAContainer title="AvsA" />
        <AVSAContainer title="AvsC" />
        <AVSAContainer title="Croisement AvsA x AvsC " />
        <AVSAContainer title="Progression fulgurante " />
        <AVSAContainer title="Réussite après changement de département " />
        <AVSAContainer title="Différence kilométrique Auto-école <-> Centre " />
*/}
        <TabAnalyse />

        <a href="https://public.tableau.com/fr-fr/s/gallery">
          Voir detail dans tableau
        </a>
      </div>
    );
  }
}
