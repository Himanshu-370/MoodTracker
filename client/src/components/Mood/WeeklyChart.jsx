import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const MoodStats = () => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/all"); // Replace with your API endpoint

      console.log("Response:", response.data);

      const { moods } = response.data;
      setMoods(moods);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const prepareChartData = () => {
    const moodData = {
      "🙁": {
        label: "Rough day",
        color: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
      "😐": {
        label: "Not good",
        color: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
      },
      "🙂": {
        label: "Not bad",
        color: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgba(255, 205, 86, 1)",
      },
      "😄": {
        label: "Good",
        color: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
      "🤗": {
        label: "Great!",
        color: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
    };

    const groupedMoods = {};
    moods.forEach((mood) => {
      const moodDate = new Date(mood.date).toLocaleDateString();
      if (!groupedMoods[moodDate]) {
        groupedMoods[moodDate] = {};
      }
      if (!groupedMoods[moodDate][mood.mood]) {
        groupedMoods[moodDate][mood.mood] = 0;
      }
      groupedMoods[moodDate][mood.mood]++;
    });

    const sortedDates = Object.keys(groupedMoods).sort(
      (a, b) => new Date(a) - new Date(b)
    );
    const lastFiveDates = sortedDates.slice(-5);

    const labels = lastFiveDates;
    const datasets = Object.entries(moodData).map(
      ([moodIcon, { label, color, borderColor }]) => {
        const moodCounts = labels.map(
          (date) => groupedMoods[date][moodIcon] || 0
        );
        return {
          label,
          data: moodCounts,
          backgroundColor: color,
          borderColor,
          borderWidth: 1,
        };
      }
    );

    const data = {
      labels,
      datasets,
    };

    return data;
  };

  return (
    <div>
      <h2>Mood Statistics</h2>
      {moods.length > 0 ? (
        <Bar
          data={prepareChartData()}
          options={{
            plugins: {
              title: {
                display: false,
              },
              legend: {
                display: true,
                labels: {
                  usePointStyle: true,
                },
              },
            },
            scales: {
              x: {
                maxTicksLimit: 5,
              },
            },
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoodStats;
