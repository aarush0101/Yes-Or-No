const fetch = require('node-fetch');
const process = require('process');


module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const { name, option } = req.body;
  const webhookUrl = process.env.WEBHOOK_URL;

  const payload = {
    username: "Webhook Bot",
    content: `Name: ${name}\nOption: ${option}`
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
    }

    res.status(200).send('Success');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send(`Error: ${error.message}`);
  }
};
