const dotenv = require("dotenv");
const express = require("express");
// const { auth } = require("express-openid-connect");
// const { requiresAuth } = require("express-openid-connect");

dotenv.config({ path: ".env" });

const app = express();
const PORT = process.env.PORT || 3000;

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET,
//   baseURL: process.env.BASE_URL,
//   clientID: process.env.CLIENT_ID,
//   issuerBaseURL: "https://dev-c238uonpydqaeojc.us.auth0.com",
// };

// app.use(auth(config));

require("./db/connectDB");
app.use(express.json());

app.use(require("./routes/mood"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
// });

// app.get("/profile", requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

app.listen(3000, () => console.log(`Server running on port ${PORT}`));
