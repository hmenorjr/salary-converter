document.getElementById("convertButton").addEventListener("click", function () {
  const initialSalary = parseFloat(document.getElementById("initialSalary").value);
  const specifiedYear = parseInt(document.getElementById("specifiedYear").value);
  const currentYear = new Date().getFullYear();
  const inflationRate = 0.03; // Adjust this as needed

  const yearsPassed = currentYear - specifiedYear;
  const adjustedSalary = initialSalary * Math.pow(1 + inflationRate, yearsPassed);

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Equivalent Salary in ${currentYear}: $${adjustedSalary.toFixed(2)}`;
});
