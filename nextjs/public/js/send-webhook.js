const process = require("process");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  var request = new XMLHttpRequest();
  request.open("POST", process.env.WEBHOOK_URL);

  request.setRequestHeader("Content-type", "application/json");

  const { name, value } = req.body;
  var params = {
    username: "Are you a fool.com",
    avatar_url: "",
    content: `Name: ${name}\nOption: ${value}`,
  };

  request.send(JSON.stringify(params));
}
