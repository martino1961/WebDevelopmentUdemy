// BMI = (weight in kg) / ((height in m) * (height in m))

function bmiCalculator(weight, height) {
    return Math.round((weight / Math.pow(height, 2)));
}

console.log("My BMI: " + bmiCalculator(91, 1.93));