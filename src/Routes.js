import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";

const fs = require("fs"),
  path = require("path");
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}
const paths = [];
walkDir("./examples", function(path) {
  paths.push(path);
});
console.log(paths);
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      {paths}
    </Switch>
  </main>
);

export default Routes;
