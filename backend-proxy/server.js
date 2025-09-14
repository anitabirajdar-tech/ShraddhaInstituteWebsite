const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Zoho credentials
const CLIENT_ID = "1000.T1YYXS2V0QUL9VPP8C2BFZ16V0VRGA";
const CLIENT_SECRET = "5288ee5d59103fd451b9083e38412d1a5eb8037fd8";
const REDIRECT_URI = "http://localhost:5000/oauth/callback";

// CORS
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

// Token store
let tokenStore = {
  access_token: null,
  refresh_token: null,
  expiry_time: null,
};

// 🔹 OAuth callback
app.get("/oauth/callback", async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send("Authorization code not found");

  try {
    const tokenResponse = await axios.post(
      "https://accounts.zoho.com/oauth/v2/token",
      null,
      {
        params: {
          grant_type: "authorization_code",
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
          code: code,
        },
      }
    );

    tokenStore.access_token = tokenResponse.data.access_token;
    tokenStore.refresh_token = tokenResponse.data.refresh_token;
    tokenStore.expiry_time = Date.now() + (tokenResponse.data.expires_in - 300) * 1000;

    console.log("Tokens stored:", tokenStore);
    res.send("Authorization successful. You can close this window.");
  } catch (err) {
    console.error("Token exchange error:", err.response?.data || err.message);
    res.status(500).send("Failed to get access token");
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
