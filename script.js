const box = document.querySelector(".namer");
const box2 = document.querySelector(".container");
const final = document.querySelector(".accepted");
const continueBtn = document.querySelector(".contin-btn");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
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


async function sendWebhook(name, option) {
  try {
    const response = await fetch("/api/send-webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, option }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.status} - ${errorText}`);
    }
  } catch (error) {
    console.error("Error sending webhook:", error);
  }
}


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.onload = () => {
  box.classList.remove("hide");
  box.classList.add("show");
};

continueBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const nameInput = document.querySelector(".name_in").value;
  if (nameInput) {
    setCookie("name", nameInput, 7);
    box.classList.remove("show");
    box.classList.add("hide");
    box2.classList.remove("hide");
    box2.classList.add("show");
  }
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
