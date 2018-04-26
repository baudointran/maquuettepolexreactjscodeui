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

import DossierDetail from "./DossierDetail";
import AlerteDossier from "./AlerteDossier";
import HistoriqueDossier from "./HistoriqueDossier";
import ActionDossier from "./ActionDossier";

export default class DossierDetailContainer extends React.Component {

  render(){
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Dossier: 23</CardTitle>
          </CardHeader>
          <CardBody>
            <DossierDetail/>
            <br/>
            <Card>
              <CardHeader>
                <CardTitle>Alertes associées</CardTitle>
              </CardHeader>
              <CardBody>
                <AlerteDossier/>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historique</CardTitle>
              </CardHeader>
              <CardBody>
                <HistoriqueDossier/>
              </CardBody>
            </Card>
          </CardBody>
          <CardFooter>
            <CardTitle>Action</CardTitle>
            <ActionDossier/>
          </CardFooter>
        </Card>
       
      </div>
    );
  }

}