import React from "react";
import {
  Form,
  Label,
  FormGroup,
  Input,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class ActionDossier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnDropright: false
    };
  }

  render() {
    let actions = [
      {
        Label: "Demande Info",
        href: "#/DemandeInfo"
      },
      {
        Label: "Controle",
        href: "#/DeclencheControle"
      },
      {
        Label: "Dépot plainte",
        href: "#/DepotPlainte"
      }
      , { Label: "Clôture", href: "#/DossierDetail/1/Cloture"}
    ];
    let listAction = actions.map(action => (
      <Button href={action.href}>{action.Label}</Button>
    ));
    return (
      <div>
        <Form>
          <FormGroup className="dossier_status_action">
            <Label for="statusSelect">Status : </Label>

            {/*            <Input type="select" name="select" id="statusSelect">
              <option>Demande Info</option>
              <option>Déclenche Controle</option>
              <option>Saisine</option>
              <option>Sans Suite</option>
            </Input>
            */}
            {listAction}

            {/* <ButtonDropdown
              direction="right"
              isOpen={this.state.btnDropright}
              toggle={() => {
                this.setState({ btnDropright: !this.state.btnDropright });
              }}
            >
              <DropdownToggle caret>Clôture</DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#/SansSuite">Sans suit</DropdownItem>
                <DropdownItem href="#/Suspendre">Suspendre centre </DropdownItem>
                <DropdownItem href="#/FermetureRetrait">
                  fermeture centre{" "}
                </DropdownItem>
                <DropdownItem href="#/Suspendre">
                  Suspendre agrement
                </DropdownItem>
                <DropdownItem href="#/FermetureRetrait">
                  Retrait agrement
                </DropdownItem>
                <DropdownItem href="#/SansSuite">
                  Mesure disciplaire{" "}
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>*/}
            
          </FormGroup> 
        </Form>
      </div>
    );
  }
}
