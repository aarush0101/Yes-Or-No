import { eventHandler, readBody } from "h3";
import fetch from "node-fetch";

export default eventHandler(async (req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      code: 400,
      msg: "Your request was invalid",
    }));
    return;
  }

  try {
    const body = await readBody(req);
    const { name, value } = body;
    const params = {
      username: "Are you a fool.com",
      avatar_url: "",
      content: "New!",
      embeds: [
        {
          title: "New Click",
          color: 15258703,
          description: `Name: ${name}\nOption: ${value}`,
        },
      ],
    };

    const response = await fetch(process.env.WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      statusCode: 200,
      body: { message: "Webhook sent successfully" },
    };
  } catch (error) {
    console.error("Error sending webhook:", error);
    return {
      statusCode: 500,
      body: { error: "Internal Server Error" },
    };
  }
});
