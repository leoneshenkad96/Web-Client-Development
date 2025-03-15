// Print name initial in uppercase
function getInitials(fullName) {
    const names = fullName.split(" ");
    const initials = names.map(name => name.charAt(0)).join("");
    return initials.toUpperCase();
}

// Test the function
const name = "John Doe";
console.log(getInitials(name)); // Output: JD
