// here i have imported express frameworks:
import express from "express";

// Here is the request and response types of typescript:
import { request, response } from "express";

// Create an express application:
const app = express();

// port number from the server will run on: 
const port = 3000;

// Here i have routed the calculator operations:
// A good example is: http://localhost:3000/lab2?method=add&x=16&y=4 
app.get("/lab3", (req: request, res: response) => {

    // Here are the query parameters:
    const method = req.query.method as string;
    const x = Number(req.query.x);
    const y = Number(req.query.y);

    // The varaibles are stored in the result of the Math operator
    let result: number;
    let operator: string;

    // This validates that x and y are numbers:
    if (isNaN(x) || isNaN(y)) {
        res.send("Error: x and y must be numbers.");
        return;
    }

    // Here we can determine whcih math operation to perform:
    switch (method) {
        case "add":
            result = x + y;
            operator = "+";
            break;

        case "subtract":
            result = x - y;
            operator = "-";
            break;

        case "multiply":
            result = x * y;
            operator = "*";
            break;
        
        case "divide":
            if (y === 0) {
                res.send("Error: Cannot divide by zero");
                return;
            }
            result = x / y;
            operator = "/";
            break;

        // This handle is invalid because of the method values:
        default:
            res.send("Error: Invalid method");
            return;
    }

    // Here we are going to display the full Math Operation and the result:
    res.send(`${x} ${operator} ${y} = ${result}`);

});

// And here are going to start the server and listen for the request we need:
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});