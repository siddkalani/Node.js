module.exports = (req, res) => {
    const baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    const id = req.url.split("/")[3];
    const regex = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-f]{12}$/i);

    console.log(`Received request for URL: ${req.url}`);
    console.log(`Extracted ID: ${id}`);

    if (req.url === "/api/movies") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    }
    else if (!regex.test(id)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "error", title: "Invalid id" }));
    }
    else if (regex.test(id)) {
        res.setHeader("Content-Type", "application/json");
        const filteredMovie = req.movies.filter((movie) => movie.id === id);
        
        if (filteredMovie.length > 0) {
            res.statusCode = 200;
            res.write(JSON.stringify(filteredMovie));
            res.end();
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "error", title: "Movie not found" }));
        }
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "error", title: "Route not found" }));
    }
};
