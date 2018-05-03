import React from "react";
import { Card, CardBody, CardHeader, CardGroup, CardLink} from "reactstrap";

const columns = [
        {id:1, title:""},
        {id:2, title:"Action"},
        {id:3, title:"Date"},
        {id:4, title:"Duree"},
        {id:5, title:"Commentaire"},
        {id:6, title: "Documents"}
    ]

// const cloturesActions =[
//     {
//         action:"Sans Suite",
//         date:"03/05/2018",
//         duree:"",
//         commentaire:"test de creation",
//         documents: [ {name:"file1", path:"" },{name:"file2", path:"" }  ]
//     },
//     {
//         action:"fermeture centre",
//         date:"03/05/2018",
//         duree:"1",
//         commentaire:"test de creation",
//         documents: [ {name:"file3", path:"" },{name:"file4", path:"" }  ]
//     }

// ]

export default class ClotureHistoriqueContainer extends React.Component {
    constructor(props){
        super(props);

    }
    
    render(){
        let cloturesActions = this.props.clotures;

        let listItems = cloturesActions.map(function(action ){
             let date = (<span>Date : {action.dateCloture}</span>);
            let duree ="";
             if(action.duree !==""){
                duree = (<span> Duree: {action.dureeCloture}</span>);
            }

             let documents = action.documents.map(document => (
                 <CardLink href={document.path}>{document.name} </CardLink>
             ));
            return (
                
                <Card>                    
                    <CardHeader>Action: {action.actionCloture} </CardHeader>
                     <CardBody>
                    <p>{date}</p><p> {duree}</p>
                    <p>
                    Commentaire: {action.commentCloture}
                    </p>
                    {documents}
                    </CardBody>                     

                </Card>
                
            );
        });

        return (
            <div>
                <CardGroup>
                    {listItems}
                </CardGroup>
            </div>
        );
    }

}