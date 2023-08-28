const monthlySalaryInput = document.getElementById("monthlySalary");
const yearlySalaryInput = document.getElementById("yearlySalary");
const quarterlySalaryInput = document.getElementById("quarterlySalary");
const biMonthlySalaryInput = document.getElementById("biMonthlySalary");

const monthlyOutput = document.getElementById("monthlyOutput");
const yearlyOutput = document.getElementById("yearlyOutput");
const quarterlyOutput = document.getElementById("quarterlyOutput");
const biMonthlyOutput = document.getElementById("biMonthlyOutput");

function calculateHourlyRate(salary, hoursPerPeriod) {
  return salary / hoursPerPeriod;
}

monthlySalaryInput.addEventListener("input", function () {
  const monthlySalary = parseFloat(monthlySalaryInput.value);
  const hourlyRate = calculateHourlyRate(monthlySalary, 160);
  monthlyOutput.textContent = `Monthly Hourly Rate: $${hourlyRate.toFixed(2)}`;
});

yearlySalaryInput.addEventListener("input", function () {
  const yearlySalary = parseFloat(yearlySalaryInput.value);
  const hourlyRate = calculateHourlyRate(yearlySalary, 1920); // Assuming 12 months in a year
  yearlyOutput.textContent = `Yearly Hourly Rate: $${hourlyRate.toFixed(2)}`;
});

quarterlySalaryInput.addEventListener("input", function () {
  const quarterlySalary = parseFloat(quarterlySalaryInput.value);
  const hourlyRate = calculateHourlyRate(quarterlySalary, 480); // Assuming 3 months in a quarter
  quarterlyOutput.textContent = `Quarterly Hourly Rate: $${hourlyRate.toFixed(2)}`;
});

biMonthlySalaryInput.addEventListener("input", function () {
  const biMonthlySalary = parseFloat(biMonthlySalaryInput.value);
  const hourlyRate = calculateHourlyRate(biMonthlySalary, 320); // Assuming 2 months in a bi-monthly period
  biMonthlyOutput.textContent = `Bi-Monthly Hourly Rate: $${hourlyRate.toFixed(2)}`;
});
