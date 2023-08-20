module.exports = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  console.log(baseUrl);
  let id = req.url.split("/")[3];
  const regexV4 = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  );
  console.log(id);
  if (req.url === "/api/animes") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.animes));
    res.end();
  }
  // else if (!regexV4.test(id)) {
  //   res.writeHead(404, { "Content-Type": "application/json" });
  //   res.end(
  //     JSON.stringify({
  //       title: "Validation Failed",
  //       message: "UUID is not valid",
  //     })
  //   );
  // }
  else if (baseUrl === "/api/animes/") {
    res.setHeader("Content-Type", "application/json");
    let animeFilter = req.animes.filter((anime) => {
      return anime.id === id;
    });
    if (animeFilter.length > 0) {
      res.statusCode = 200;
      res.write(JSON.stringify(animeFilter));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(
        JSON.stringify({ title: "Not Found", message: "Anime not found" })
      );
      res.end();
    }
  }
  // else if (regexV4.test(id)) {
  //   res.setHeader("Content-Type", "application/json");
  //   let animeFilter = req.animes.filter((anime) => {
  //     return anime.id === id;
  //   });
  //   if (animeFilter.length > 0) {
  //     res.statusCode = 200;
  //     res.write(JSON.stringify(animeFilter));
  //     res.end();
  //   } else {
  //     res.statusCode = 404;
  //     res.write(
  //       JSON.stringify({ title: "Not Found", message: "Anime not found" })
  //     );
  //     res.end();
  //   }
  // }
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};
