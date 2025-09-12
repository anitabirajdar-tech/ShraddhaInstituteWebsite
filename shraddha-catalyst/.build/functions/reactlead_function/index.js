const https = require("https");

const sendResponse = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // allow all, or restrict your domain
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });
  res.end(JSON.stringify(data));
};

module.exports = (context, req, res) => {
  if (req.method === "OPTIONS") {
    return sendResponse(res, 200, { message: "Preflight OK" });
  }

  try {
    const { name, email, phone, message } = req.body || {};

    const accessToken = "1000.xxxxx.yyyyy"; // replace with your valid token

    const leadData = JSON.stringify({
      data: [
        {
          Name: name || "Website Lead",
          Email: email,
          Mobile_Number: phone,
          Whatsapp_Number: phone,
          Message: message,
          Lead_Source: "Website Contact Form",
        },
      ],
    });

    const options = {
      hostname: "www.zohoapis.com",
      path: "/crm/v2.1/Workshop_Leads",
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(leadData),
      },
    };

    const apiReq = https.request(options, (apiRes) => {
      let data = "";
      apiRes.on("data", (chunk) => (data += chunk));
      apiRes.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          sendResponse(res, 200, parsed);
        } catch {
          sendResponse(res, 200, { raw: data });
        }
      });
    });

    apiReq.on("error", (err) => {
      sendResponse(res, 500, { error: err.message });
    });

    apiReq.write(leadData);
    apiReq.end();
  } catch (err) {
    sendResponse(res, 500, { error: err.message });
  }
};
