const crypto = require("crypto");
const requestBodyparser = require("../utils/bodyParser");
const writeTofile = require("../utils/writeTofile");

module.exports = async (req, res) => {
  if (req.url === "/api/animes") {
    try {
      let body = await requestBodyparser(req);
      body.id = crypto.randomUUID();
      req.animes.push(body);
      writeTofile(req.animes);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end();
      console.log("Request Body: ", body);
    } catch (err) {
      console.log(err);
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Validation Failed",
          message: "Request body is not valid",
        })
      );
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};
