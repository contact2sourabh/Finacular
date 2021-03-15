import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../index.css'
const Barchart = () => {

    return (
        <div className="Bargraph">
            <Bar
                data={{

                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    datasets: [
                        {

                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                            label: 'Annual Projection',
                            backgroundColor: [
                                'rgba(25,10,163, 0.8)',
                                'rgba(25,10,163, 0.8)',
                                'rgba(25,10,163, 0.8)',
                                'rgba(25,10,163, 0.8)',
                                'rgba(25,10,163, 0.8)',
                                'rgba(25,10,163, 0.8)',
                                'rgba(25,10,163, 0.8)',
                                'rgba(25,10,163, 0.8)',
                                'rgba(25,10,163, 0.8)',
                                'rgba(25,10,163, 0.8)',
                                'rgba(25,10,163, 0.8)',
                            ],
                            barThickness: 30,

                        }
                    ]

                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    layout: {
                        padding: {
                            left: 20,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    }

                }}
            />
        </div>
    )
}
export default Barchart;