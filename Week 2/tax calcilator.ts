import * as http from "http";
import * as url from "url";

(alias) namespace accounting
(alias) var accounting: accounting.Static
import accounting = require("accounting");

// import the accounting package 
import accounting from "accounting";

const server = http.createServer(
    (request: https:IncomingMessage, response: http.ServerResponse) => {
    // response header
        response.writeHead(200, { "Content-Type": "text/html" });
    // write reponse text 
        response.write("<h1>Tax Calculator</h1>");

        // get data from the URL
        const requesturl = request.url || ""
        const queryString = url.parse(requesturl, true).query;

        // end response
        response.end();
    }
);

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
    console.log("Try running http://localhost:3000/?amount=1000&taxrate=100");
}) 