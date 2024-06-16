// Query all the elements
const box = document.querySelector(".namer");
const box2 = document.querySelector(".container");
const final = document.querySelector(".accepted");
const continueBtn = document.querySelector(".contin_btn");
const yesBtn = document.querySelector(".yes_btn");
const noBtn = document.querySelector(".no_btn");
const notify = document.querySelector(".notify");
const notify2 = document.querySelector(".notify2");

// Handle initial client-side operations
window.onload = () => {
  box.classList.remove("hide");
  box.classList.add("show");
};

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Get the value of a cookie by name
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

// Function to introduce a delay
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Send webhook data to server-side file
async function sendWebhook(name, value) {
  let webhookUrl = "/api/send";

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
    console.error("Error sending webhook:", error);
  }
}

// Delete the cookie
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Event listeners for buttons in the entire page
continueBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const submittedName = document.querySelector(".name_in").value.trim();
  if (submittedName) {
    setCookie("name", submittedName, 1);
    box.classList.remove("show");
    box.classList.add("hide");
    box2.classList.remove("hide");
    box2.classList.add("show");
  } else {
    notify2.classList.remove("hide");
    notify2.classList.add("show");
    await sleep(5000);
    notify2.classList.remove("show");
    notify2.classList.add("hide");
  }
});

yesBtn.addEventListener("click", async () => {
  const name = getCookie("name");
  if (name) {
    box2.classList.remove("show");
    box2.classList.add("hide");
    final.classList.remove("hide");
    final.classList.add("show");
    deleteCookie("name");
    await sendWebhook(name, "yes");
  } else {
    notify2.classList.remove("hide");
    notify2.classList.add("show");
    await sleep(5000);
    notify2.classList.remove("show");
    notify2.classList.add("hide");
  }
});

noBtn.addEventListener("click", async () => {
  notify.classList.remove("hide");
  notify.classList.add("show");
  await sleep(5000);
  notify.classList.remove("show");
  notify.classList.add("hide");
});
