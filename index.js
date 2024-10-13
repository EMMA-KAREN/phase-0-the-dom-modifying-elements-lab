// Write your code here!
// Remove the <main> element with ID "main"
const mainElement = document.getElementById("main");
mainElement.remove(); // This will remove the main element from the DOM

// Create a new <h1> element and assign it to the variable newHeader
const newHeader = document.createElement("h1");

// Set the ID of the new <h1> element to "victory"
newHeader.id = "victory";

// Set the text content of the <h1> to "YOUR-NAME is the champion"
newHeader.textContent = "YourName is the champion"; // Replace 'YourName' with your actual name

// Append the new <h1> to the document body (or any other appropriate parent)
document.body.appendChild(newHeader);
