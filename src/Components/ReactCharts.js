import React from 'react';
import ReactApexChart from 'react-apexcharts'
export default class ReactChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [20, 25, 25, 20, 0],
            options: {
                colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
                chart: {
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false,

                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '85%'
                        }
                    },
                },
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 100
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
    }



    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={350} height={320} />
            </div>
        )
    }
}