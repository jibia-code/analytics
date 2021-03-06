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
                    unit: "minute"
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    suggestedMax: 5,
                    precision: 0

                }
            }
        ]
    }
}

class PageVisitsGraph extends Component {
    state = {
        history: [],
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Page Visits (Last hour)',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
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
                    <Card.Title>Page Visits (Last Hour)</Card.Title>
                    <Line data={this.state.data} options={options} />
                </Card.Body>
            </Card>
        )
    }
}

export default PageVisitsGraph;