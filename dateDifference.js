// Difference between dates in days
function getDateDifference(date1Str, date2Str) {
    const date1 = new Date(date1Str);
    const date2 = new Date(date2Str);
    const timeDiff = Math.abs(date2 - date1);
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return dayDiff;
}

// Test the function
const date1 = "2024-03-19";
const date2 = "2024-03-21";
console.log(getDateDifference(date1, date2)); // Output: 2