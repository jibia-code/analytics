import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Tables extends Component {
    renderDataRow(row) {
        const { variable, count } = row;
        return <tr>
            <td>{variable}</td>
            <td>{count}</td>
        </tr>
    }

    render() {
        console.log(this.props.data)
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Variable</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(this.renderDataRow)}
                </tbody>
            </Table>
        )
    }
}



export default Tables;