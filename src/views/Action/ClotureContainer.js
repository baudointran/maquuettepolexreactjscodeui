import React from "react";
import { Form, Button, Card,CardHeader, CardBody, CardFooter } from "reactstrap";

import ClotureAction from "./ClotureAction";
import ClotureHistorique from "./ClotureHistoriqueContainer";

export default class ClotureContainer extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            clotures:[],
            newcloture:{}
        }
        this.addClotureAction = this.addClotureAction.bind(this);
    }

    addClotureAction(newstate){
        let clotures = this.state.clotures;
        //this.setState(newstate);
        let cloture={
            actionCloture:"",
            dateCloture:"",
            dureeCloture:"",
            commentCloture:"",
            documents:[]
        }
        if(newstate.actionCloture != undefined){
            cloture.actionCloture = newstate.actionCloture;
        }
        if(newstate.dateCloture!= undefined){
            cloture.dateCloture= newstate.dateCloture;
        }
        if(newstate.dureeCloture!= undefined){
            cloture.dureeCloture= newstate.dureeCloture;
        }
        if(newstate.commentCloture!= undefined){
            cloture.commentCloture= newstate.commentCloture;
        }
        clotures.push(cloture);
        this.setState( {clotures: clotures });
    }

    render(){


        return (
            <Card>
                <CardHeader>
              
                </CardHeader>
                <CardBody>
                    <Card>
                        <ClotureAction onAdd={this.addClotureAction} ></ClotureAction>
                    </Card>
                <ClotureHistorique clotures={this.state.clotures}></ClotureHistorique>
                </CardBody>
                <CardFooter>
                <Form >
                    <Button>Clôturer</Button>    
                </Form>
                </CardFooter>
            </Card>
        );
    }

}