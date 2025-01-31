function updateRate() {
  // update rate value
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

function compute() {
  // get needed variables
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  // calculattions
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  } else {
    // update result span
    document.getElementById("result").innerHTML =
      "If you deposit <mark>" +
      principal +
      "</mark>, </br> at an interest rate of <mark>" +
      rate +
      "%</mark>. </br> You will receive an amount of <mark>" +
      interest +
      "</mark>,</br> in the year <mark>" +
      year +
      "</mark></p>";
  }
}
