const http = require("http");
const fs = require("fs");

http.createServer(function (request, response) {

    // получаем путь после слеша
    let filePath = request.url.substr(1);
    if (filePath == "") filePath = "index.html";
    if (!filePath.includes(".")){
        filePath += ".js";
    }
    fs.readFile(filePath, function (error, data) {

        if (error) {

            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else {
            if (filePath.endsWith(".js")) response.setHeader("Content-Type", "text/javascript");
            response.end(data);
        }
    });
}).listen(8080, function () {
    console.log("Server started at 8080");
});