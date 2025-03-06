// Diameter, Circumference, and Area of Circle
function findCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    return `diameter = ${diameter}, circumference = ${circumference.toFixed(4)}, area = ${area.toFixed(4)}`;
}

// Test the function
const radius = 5;
console.log(findCircleProperties(radius)); 
// Output: diameter = 10, circumference = 31.4159, area = 78.5398