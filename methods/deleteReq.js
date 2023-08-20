const writeTofile = require("../utils/writeTofile");
module.exports = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  console.log(baseUrl);
  let id = req.url.split("/")[3];
  const regexV4 = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  );

  //   if (!regexV4.test(id)) {
  //     res.writeHead(404, { "Content-Type": "application/json" });
  //     res.end(
  //       JSON.stringify({
  //         title: "Validation Failed",
  //         message: "UUID is not valid",
  //       })
  //     );
  //   }
  if (baseUrl === "/api/animes/") {
    const index = req.animes.findIndex((anime) => {
      return anime.id === id;
    });
    if (index === -1) {
      res.statusCode = 404;
      res.write(
        JSON.stringify({ title: "Not Found", message: "Anime not found" })
      );
      res.end();
    } else {
      req.animes.splice(index, 1);
      writeTofile(req.animes);
      res.writeHead(204, { "Content-Type": "application/json" });
      res.end(JSON.stringify(req.animes));
    }
  }
};
