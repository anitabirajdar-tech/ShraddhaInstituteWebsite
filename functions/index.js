const functions = require("firebase-functions");
const fetch = require("node-fetch");

// 🔹 Load Zoho credentials from Firebase config
const clientId = functions.config().zoho.client_id;
const clientSecret = functions.config().zoho.client_secret;
const refreshToken = functions.config().zoho.refresh_token;

// ✅ Function to get new access_token
async function getAccessToken() {
  const response = await fetch("https://accounts.zoho.com/oauth/v2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
    }),
  });

  const data = await response.json();
  if (!data.access_token) {
    throw new Error("Failed to refresh token: " + JSON.stringify(data));
  }
  return data.access_token;
}

// ✅ Cloud Function to add lead
exports.addLeadToZoho = functions.https.onRequest(async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // 1. Get new access token
    const accessToken = await getAccessToken();

    // 2. Prepare lead data
    const leadData = {
      TTP_Leads_Name: name,
      Email: email,
      Mobile_Number: phone,
      Follow_Up_1_Note: message,
      Lead_Source: "Website",
    };

    // 3. Send to Zoho CRM
    const response = await fetch("https://www.zohoapis.com/crm/v2/TTP_Leads", {
      method: "POST",
      headers: {
        "Authorization": `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [leadData] }),
    });

    const result = await response.json();
    console.log("Zoho Response:", result);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});
