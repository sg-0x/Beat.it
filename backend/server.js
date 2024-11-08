import express from "express";
import path from "path";

const app = express();
const port = 3000;

const publicPath = path.join(process.cwd(), "frontend/public/");
const pagePath = path.join(process.cwd(), "frontend/src/pages");

app.use(express.static(publicPath));
app.use(express.static(pagePath));
app.use(express.static(path.join(process.cwd(), "database")));
app.use(express.static(path.join(process.cwd(), "frontend/src/")));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: publicPath });
});

app.get("/signin", (req, res) => {
    res.sendFile("SignUpPage.html", { root: pagePath });
});

app.get("/login", (req, res) => {
    res.sendFile("LoginPage.html", { root: pagePath });
});

app.get("/home", (req, res) => {
    res.sendFile("HomePage.html", { root: pagePath });
});

app.get("/profile", (req, res) => {
    res.sendFile("ProfilePage.html", { root: pagePath });
});

app.listen(port, () => {
    console.log("Connected!!!");
    console.log("Server hosting at http://localhost:3000");
});
