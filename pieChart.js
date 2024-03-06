// Sample data
var data = {
    'HouseHolding': 2000,
    'Transport': 200,
    'Entertainment': 750,
    'Shoping': 550,
    'Food': 200
};

// Calculate the total income
var totalIncome = 2500; // Set your total income here

// Chart Data
var pieData = {
  labels: Object.keys(data),
  datasets: [{
    data: Object.values(data),
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)'
    ],
    borderWidth: 1
  }]
};

// Get the context of the canvas element we want to select
var pieCtx = document.getElementById('pieChart').getContext('2d');

// Create Pie Chart
var pieChart = new Chart(pieCtx, {
  type: 'pie',
  data: pieData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          suggestedMax: totalIncome // Set maximum suggested value for y-axis
        }
      }]
    }
  }
});
