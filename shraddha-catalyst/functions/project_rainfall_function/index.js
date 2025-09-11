const https = require("https");

module.exports = (context, req, res) => {
  try {
    // ✅ Read JSON body (works for Advanced I/O)
    const { name, email, phone, message } = req.body || {};

    console.log("Received form data:", req.body);

    // ⚡ Replace later with refresh-token flow
    const accessToken = "1000.xxxxx.yyyyy";

    // Prepare Lead data
    const leadData = JSON.stringify({
      data: [
        {
          Name: name || "Website Lead",              // Zoho field: Name
          Email: email,                              // Zoho field: Email
          Mobile_Number: phone,                      // Zoho field: Mobile_Number
          Whatsapp_Number: phone,                    // Zoho field: Whatsapp_Number
          Message: message,                          // Zoho field: Message
          Lead_Source: "Website Contact Form",       // Zoho field: Lead_Source
        },
      ],
    });

    // Zoho CRM API request options
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
        console.log("Zoho CRM response:", data);

        try {
          const parsed = JSON.parse(data);
          res.send(parsed); // ✅ Send parsed JSON back
        } catch (e) {
          res.send({ raw: data });
        }
      });
    });

    apiReq.on("error", (err) => {
      console.error("Error in API call:", err);
      res.status(500).send({ success: false, error: err.message });
    });

    apiReq.write(leadData);
    apiReq.end();
  } catch (err) {
    console.error("Function error:", err);
    res.status(500).send({ success: false, error: err.message });
  }
};
