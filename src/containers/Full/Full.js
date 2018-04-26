import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';

import Login from "../../views/Login/Login";
import AlerteDetailContainer from "../../views/Alerte/AlerteDetailContainer";
import DossierDetailContainer from "../../views/Dossier/DossierDetailContainer";
import DossiersCurrent from "../../views/Dossier/DossiersCurrent";

import DemandeInfo from "../../views/Action/DemandeInfo";
import DeclencheControle from "../../views/Action/DeclencheControle";
import DepotPlainte from "../../views/Action/DepotPlainte";
import SansSuite from "../../views/Action/SansSuite";
import Suspendre from "../../views/Action/Suspendre";
import FermetureRetrait from "../../views/Action/FermetureRetrait";

import Parametre from "../../views/Administration/Parametre";
import AnalyseContainer from "../../views/Analyse/AnalyseContainer";

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                
                <Route
                path="/AlerteDetailContainer"
                component={AlerteDetailContainer}
              />
              <Route
                path="/DossierDetailContainer"
                component={DossierDetailContainer}
              />
              <Route
                path="/DossiersCurrent"
                component={DossiersCurrent}
              />
              <Route exact path="/DemandeInfo" component={DemandeInfo} />
              <Route
                path="/DeclencheControle"
                component={DeclencheControle}
              />
              <Route path="/DepotPlainte" component={DepotPlainte} />
              <Route path="/SansSuite" component={SansSuite} />
              <Route path="/Suspendre" component={Suspendre} />
              <Route

                path="/FermetureRetrait"
                component={FermetureRetrait}
              />
              <Route path="/Parametre" component={Parametre} />
              <Route
                path="/AnalyseContainer"
                component={AnalyseContainer}
              />

              <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
