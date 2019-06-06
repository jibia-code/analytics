import React from "react";
import Tables from '../Tables/Tables'
import { Card } from "react-bootstrap";

const TableCard = (props) => {
    return (
        <Card style={{margin: "2em 0"}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                    <Tables data={props.data} />
            </Card.Body>
        </Card>
    )
}

export default TableCard;