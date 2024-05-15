import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

import Heading from "../Heading/Heading";
import styles from "./Diagram.module.scss";

Chart.register(...registerables);

const Diagram = ({ participants = [] }) => {
  const data = {
    labels: ["Participants"],
    datasets: [
      {
        label: "Participants",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [participants.length, 100, 10],
      },
    ],
  };

  const options = {
    legend: {
      display: true,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.diagramWrapper}>
      <Heading
        text="Number of registrations on the day of the event"
        type="subtitle"
      />
      <Bar data={data} options={options} />
    </div>
  );
};

export default Diagram;
