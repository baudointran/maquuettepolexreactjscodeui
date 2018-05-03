import React from "react";
import {
  Form, Row, Col, FormGroup, Label, Input, Button
} from "reactstrap";

import clotureActions from '../../constants/ClotureActionConst';

import classnames from "classnames";
import SansSuite from './SansSuite';
import Suspendre from './Suspendre';
import FermetureRetrait from './FermetureRetrait';

export default class ClotureAction extends React.Component {
   constructor(props) {
        super(props);
        this.state={};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);  
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }

    handleOnSubmit(event){

      event.preventDefault();
      let newstate = this.state;
      this.props.onAdd(newstate);
      
    }

    render(){

      let listoptions = clotureActions.map(clotureaction => (
        <option id={clotureaction.id} value={clotureaction.value}>{clotureaction.title}</option>
      ));
      return (            
        <div>
          <Form onSubmit={this.handleOnSubmit}>
          <Row>
            <Col>
               <FormGroup>
                <Label for="actionSelect">Action</Label>
                <Input type="select" name="actionCloture" id="actionSelect" onChange={this.handleInputChange}>
                    {listoptions}
                </Input>
        </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup id="id_date">
                <Label for="idinputdate">Date:</Label>
                <Input
                  type="datetime"
                  name="dateCloture"
                  id="idinputdates"
                  placeholder="datetime placeholder"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
             <Col>
              <FormGroup id="id_duree">
                <Label for="idinputduree">Durée:</Label>
                <Input
                  type="number"
                  name="dureeCloture"
                  id="idinputduree"
                  placeholder="0"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
           
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="commentCloture">Commentaire</Label>
                <Input type="textarea" name="commentCloture" id="commentCloture" onChange={this.handleInputChange}/>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
               {/*<FileUpload />*/}
              <FormGroup id="id_inpur_files">
                <Label for="examplefiles">Ficher à ajouter</Label>
                <Input type="file" name="text" id="examplefiles" />
              </FormGroup>
            </Col>
          </Row>

          <Button className="float-right">Valider</Button>
        </Form>
      </div>  
        );
    }

}