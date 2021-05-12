import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Bar, Pie } from "react-chartjs-2";
import { fade, makeStyles, createMuiTheme } from "@material-ui/core/styles";
const chartColors = [
  "#F2A186",
  "#F2A186",
  "#F2A186",
  "#F2A186",
  "#F2A186"
];


const useStyles = makeStyles((theme) => ({
  outercard:{
  width: "90%",
  height: "90%",
  background: "rgb(255, 255, 255)",
  boxShadow: "rgba(0, 74, 140, 0.14) 0px 2px 6px",
  borderRadius: "12px",
  padding: "34px",
  boxSizing: "border-box",
  display: "inline-block",
  transition: "background 200ms ease-in-out 0s, box-shadow 200ms ease-in-out 0s",
  },
  headline3:{
    marginTop: "-15px",
  textAlign: "left",
  fontSize: "3rem",
  lineHeight: "3.125rem",
  letterSpacing: "normal",
  color: "rgb(66, 66, 66)",
  transition: "color 200ms ease-in-out 0s",
  fontFamily: "Roboto",
 fontWeight: "400"
  },
  headline4:{
    textAlign: "left",
  fontSize: "1rem",
  lineHeight: "3.125rem",
  letterSpacing: "normal",
  color: "rgb(66, 66, 66)",
  transition: "color 200ms ease-in-out 0s",
  fontFamily: "Roboto",
 fontWeight: "400",
 marginTop: "-50px"
  }
}));
var donutoptions = {
  cutoutPercentage: 80,
  
  legend: {
    display: false,
    position: "right"
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'SCI',

        },
       
        
        ticks: {
          max:100,
          min: 0,
          stepSize: 20
        }
      }
    ],
    xAxes: [
      {
      scaleLabel: {
        display: true,
        labelString: 'Functional Class'
      },
      },
    ]
  }

};



const data = {
  borderDash: [10,5],
  maintainAspectRatio: false,
  responsive: false,
  labels: [
    "Local",
    "Marjob/urb collector",
    "Minor Arterial",
    "Principal Arterial",
    "Other Principal Arterial"
  ],

 
  datasets: [
    {
     
      data: [75, 70, 72, 80, 75],
      backgroundColor: chartColors,
      hoverBackgroundColor: "grey"
    }
  ]
};

export default function App() {
  let chartInstance = null;

  // useEffect(() => {
  //   const legend = chartInstance.chartInstance.generateLegend();
  //   console.log(chartInstance, "textinput");
  //   console.log(legend);
  //   document.getElementById("legend").innerHTML = legend;
  // }, [chartInstance]);
  const classes = useStyles();
  return (
    <div className={classes.outercard}>
    <div className="App">
      <h2 className={classes.headline3}>67/100</h2>
      <h4 className={classes.headline4}> SCI Average</h4>
      <div>
        <Bar data={data} options={donutoptions} />
        <div id="legend" />
      </div>
    </div>
    </div>
  );
}

const styles = {
  pieContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  relative: {
    position: "relative"
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
