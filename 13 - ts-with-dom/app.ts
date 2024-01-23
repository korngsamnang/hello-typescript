// app.ts

// Use strict mode
"use strict";

// Get the element with the id "message"
const messageElement: HTMLElement | null = document.getElementById("message");

// Check if the element exists
if (messageElement) {
    // Update the text content
    messageElement.textContent = "Hello, TypeScript with DOM!";

    // Add a click event listener
    messageElement.addEventListener("click", () => {
        alert("You clicked the message!");
    });
} else {
    console.error("Element with id 'message' not found.");
}
