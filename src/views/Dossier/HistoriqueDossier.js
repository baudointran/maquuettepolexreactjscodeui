import React from "react";
import { Table } from "reactstrap";
import "../css/App.css";

export default class HistoriqueDossier extends React.Component {

  render(){
    let historiques = [
      { Type: "CREATION", Date: "17/04/2018", Comment:"Creation de la maqette" },
      { Type: "STATUS", Value: "En cours", Date: "17/04/2018", Comment: "" },
      { Type: "STATUS", Value: "Demande Info", Date: "17/04/2018", Comment:"envoi demande d'information" },
//      { Type: "MESSAGE", Value:"Envoyer ",  Date: "17/04/2018", Comment:"Message reçu de ...." },
      { Type: "ALERT", Value: "Ajout d'alert", Date: "17/04/2018", Comment: "" },
      { Type: "STATUS", Value: "DECLENCHE CONTROLE", Date: "17/04/2018", Comment:"" },
    ];

    let listHistoriqueTable = historiques.map(historique => (
      <tr>
        <td >{historique.Value}</td>
        <td >{historique.Date}</td>
        <td >{historique.Comment}</td>        
      </tr>
    ));

    return (
        <div>
        <Table striped className="historique_dossier col-12">
            <thead>  
             <tr>            
                <th>
Action
                </th>
                <th>
                Date
                </th>
                <th>
                  Commentaire
                </th>
              </tr>
            </thead>
            <tbody>
              {listHistoriqueTable}
            </tbody>
        </Table>
        </div>
    );
  }
}