import React from "react";
import { Table } from "reactstrap";

export default class Parametre extends React.Component {
  render() {
    let parametres = [
      { Type: "AxC", Seuil: "30%", Volume: "3/jrs" },
      { Type: "GEO", Seuil: "", Volume: "1/semaine" }
    ];
    let listparametre = parametres.map(parametre => (
      <tr>
        <td>{parametre.Type}</td>
        <td>{parametre.Seuil}</td>
        <td>{parametre.Volume}</td>
      </tr>
    ));
    return (
      <div>
        <Table>
          <tr>
            <th>Type</th>
            <th>Seuil</th>
            <th>Volume</th>
          </tr>
          {listparametre}
        </Table>
      </div>
    );
  }
}
