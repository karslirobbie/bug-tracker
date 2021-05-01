import ReactApexChart from 'react-apexcharts'
import React from 'react'


export default function RadialBar ({ series }) {
  const options =
  {
    colors: ['#4ADE80'],
    title: {
      text: 'Completed tickets this sprint',
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '15px',
        color: '#9CA3AF'
      },
    },

    plotOptions: {
      radialBar: {
        startAngle: -0,
        endAngle: 359,
        hollow: {
          margin: 0,
          size: '80%',
          background: '#111827',
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#1F2937',
          strokeWidth: '90%',
          margin: 0,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#4ADE80',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    stroke: {
      lineCap: 'round',
      width: 1
    },
    labels: ['Percent'],
  }


  return (
    <ReactApexChart options={options} series={series} type="radialBar" height={350} />
  );
}
