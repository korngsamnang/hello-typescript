## Using TypeScript with DOM
TypeScript is a statically types superset of JavaScript, and it can be used to write code for the browser's DOM (Document Object Model). 

Here's a simple example of using TypeScript with the DOM:

1. Create `index.html`:
    Create a file named `index.html` with the following content:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TypeScript DOM Example</title>
    </head>
    <body>
      <h1 id="message">Hello, TypeScript with DOM!</h1>
    
      <script src="app.js"></script>
    </body>
    </html>
    ```
2. Create `app.ts`:
    Create a file named `app.ts` with the following code:
    ```ts
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
    ```
   
3. Initialize TypeScript config:
    Run the following command to initialize a TypeScript config file:
    ```bash
    tsc --init
    ```
    This will create a `tsconfig.json` file in the current directory contains default setting for the TypeScript compiler.

4. Compile TypeScript to JavaScript:
    Run the following command to compile the TypeScript code to JavaScript:
    ```bash
    tsc app.ts
    ```
    This will create a `app.js` file in the current directory that contains the compiled JavaScript code.

5. Open `index.html` in a browser:
    Open the `index.html` file in a web browser to see the result.

