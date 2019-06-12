import express from "express";
import exphbs from "express-handlebars";
import path from "path";
import models, { connectDb } from "./models";

const app = express();
const port = process.env.PORT || 8080;

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

connectDb((err: any) => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.error(`There is an error connecting to DB: ${err}`);
  } else {
    // tslint:disable-next-line:no-console
    console.log("DB connection successfully");
    app.listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log(`server started at http://localhost:${port}`);
    });
  }
});

if (process.env.NODE_ENV === "development") {
  // tslint:disable-next-line
  const livereload = require("livereload");
  const reload = livereload.createServer({
    exts: [ "hbs", "css" ]
  });
  reload.watch(["public", "views"]);
}
