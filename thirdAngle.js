// Find the third angle of a triangle
function findThirdAngle(angle1, angle2) {
    const thirdAngle = 180 - (angle1 + angle2);
    return thirdAngle;
}

// Test the function
const a = 80;
const b = 65;
console.log(findThirdAngle(a, b)); // Output: 35