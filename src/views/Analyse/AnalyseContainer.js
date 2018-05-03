import React from "react";
import TableauReport from "react-tableau-report";
//import AVSAContainer from "./AVSAContainer";
import TabAnalyse from "./TabAnalyse";
import {Card, CardBody} from 'reactstrap';

import tableau from "tableau-api";

export default class AnalyseContainer extends React.Component {
  // initTableau() {
  //       const vizUrl =
  //           "http://viz.datalab.mi/views/PolEx/SurreussiteAvsA";
 
  //       const options = {
  //           hideTabs: true,
  //           width: "700px",
  //           height: "800px",
  //           onFirstInteractive: () => {
  //               const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Table");
  //               const options = {
  //                   ignoreAliases: false,
  //                   ignoreSelection: false,
  //                   includeAllColumns: false
  //               };
  //               sheet.getUnderlyingDataAsync(options).then((t) => {
  //                   const tableauData = t.getData();
  //                   let data = [];
  //                   const pointCount = tableauData.length;
  //                   for(let a = 0; a < pointCount; a++ ) {
  //                       data = data.concat({
  //                           x: tableauData[a][0].value,
  //                           y: Math.round(tableauData[a][3].value,2)
  //                       })
  //                   };
  //               })
  //           }
  //       };
  //       this.container =  document.getElementById("testTableau");
  //       let viz = new window.tableau.Viz(this.container, vizUrl, options)
  //     }

  //     componentDidMount(){
  //       this.initTableau();
  //     }

  render() {
//    this.initTableau();
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

        {/* <a href="https://public.tableau.com/fr-fr/s/gallery">
          Voir detail dans tableau
        </a> */}
        {/* <Card>
          <CardBody>
        <div id="testTableau"></div>
        </CardBody>
        </Card> */}
      </div>
    );
  }
}
