import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const options = {
    legend: {
        display: false
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    unit: "second"
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    suggestedMax: 100,
                    precision: 0

                }
            }
        ]
    }
}

class MemoryGraph extends Component {
    state = {
        history: [],
        data: {
            labels: [],
            datasets: [
                {
                    label: 'MemGraph (Last hour)',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(153,204,204,0.4)',
                    borderColor: 'rgba(153,204,204,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(153,204,204,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(153,204,204,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: []
                }
            ]
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.time !== prevProps.time) {
            const newData = [...this.state.data.datasets[0].data, this.props.stat]
            
            this.setState({
                data: {
                    ...this.state.data,
                    labels: [...this.state.data.labels, new Date()],
                    datasets: [
                        {
                            ...this.state.data.datasets[0],
                            data: newData.slice(-1200)
                        }
                    ]
                }
            })
        }
    }

    render() {
        return (
            <Card style={{ margin: "2em 0" }}>
                <Card.Body>
                    <Card.Title>Memory</Card.Title>
                    <Line data={this.state.data} options={options} />
                </Card.Body>
            </Card>
        )
    }
}

export default MemoryGraph;