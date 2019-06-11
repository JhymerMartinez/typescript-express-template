import express from "express";
import exphbs from "express-handlebars";

const app = express();
const port = 8080;

app.engine(".hbs", exphbs({extname: ".hbs"}));
app.set("view engine", ".hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

// tslint:disable-next-line
const livereload = require("livereload");
const reload = livereload.createServer();
reload.watch("public");
