document.getElementById("convertButton").addEventListener("click", function () {
  const monthlySalary = parseFloat(document.getElementById("initialSalary").value);
  const workHoursPerMonth = 160; // Assuming 40-hour workweek and 4 weeks in a month

  const hourlyRate = monthlySalary / workHoursPerMonth;

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Hourly Rate: $${hourlyRate.toFixed(2)}`;
});
