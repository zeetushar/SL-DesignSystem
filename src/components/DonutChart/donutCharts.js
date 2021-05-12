import React ,{useEffect} from "react";
import ReactDOM from "react-dom";
import  Doughnut from "react-chartjs-2";
import "./styles.css";

const chartColors = ["#F0878F", "#F08E84", "#F2A186", "#F5B588"];

const data1 = {
  labels: ["a", "b", "c", "d"],
  
  datasets: [
    {
      
      data: [300, 50, 100, 50],
      backgroundColor: chartColors,
       hoverBackgroundColor: chartColors
    }
  ]
};
const donutoptions = {
  cutoutPercentage: 80,
    width: '80px',
    height: "80px",
  legend: {
    display: false,
    position: "right"
  },
  elements: {
    arc: {
      borderWidth: "20"
    }
  }
};



export default function App() {
  let chartInstance = null;
return(
  <div className="App">
  <h2>Doughnut Chart</h2>
  <div>
        <Doughnut data={data1} options={donutoptions} />
        <div id="legend" />
     </div>
     </div>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
  //  return (
  //   <div className="App">
  //     <h2>Doughnut Chart</h2>
  //     <div>
  //       <Doughnut data={data} options={donutoptions} />
  //       <div id="legend" />
  //     </div>
  //   </div>
  //  );

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
