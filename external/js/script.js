const box = document.querySelector(".namer");
const box2 = document.querySelector(".container");
const final = document.querySelector(".accepted");
const continueBtn = document.querySelector(".contin_btn");
const yesBtn = document.querySelector(".yes_btn");
const noBtn = document.querySelector(".no_btn");
const notify = document.querySelector(".notify");

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

async function sendWebhook(name, value) {
  let webhookUrl = "/api/send-webhook";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, value }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(
      "Unable to make a request to the server side files, error -> ",
      error
    );
  }
}

function sleep(ms) {
  return new 
}

continueBtn.addEventListener("click", async (event) => {

});

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

yesBtn.addEventListener("click", async () => {
  const name = getCookie("name");
  if (name) {
    box2.classList.remove("show");
    box2.classList.add("hide");
    final.classList.remove("hide");
    final.classList.add("show");
    deleteCookie("name");
    await sendWebhook(name, "yes");
  }
});

noBtn.addEventListener("click", async () => {
  notify.classList.remove("hide");
  notify.classList.add("show");
  await sleep(5000);
  notify.classList.remove("show");
  notify.classList.add("hide");
});
