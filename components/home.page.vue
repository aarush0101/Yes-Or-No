<!-- components/home.page.vue -->
<template>
  <div class="namer hide">
    <div class="menu">
      <img src="/images/svg.png" alt="" class="svg" />
      <h1 class="header_mond">Yes-No</h1>
    </div>
    <div class="name hide">
      <form class="main_form">
        <span>
          <h3 class="header_main">Enter your name:</h3>
        </span>
        <label class="name_bx">
          <input name="submitted-name" autoComplete="name" class="name_in" />
        </label>
        <button class="contin_btn">Continue</button>
      </form>
    </div>
  </div>
  <div class="notify hide">
    <div class="notibox">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: red"
        class="svg"
      >
        <path
          d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"
        ></path>
      </svg>
      <h4>Press Yes.</h4>
    </div>
  </div>
  <div class="notify2 hide">
    <div class="notibox">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: red"
        class="svg"
      >
        <path
          d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"
        ></path>
      </svg>
      <h4>Please enter a name</h4>
    </div>
  </div>
  <div class="container hide">
    <div class="menu">
      <img src="/images/svg.png" alt="" class="svg" />
      <h1 class="header_mond">Yes-No</h1>
    </div>
    <h1>Are you a fool?</h1>
    <div class="form">
      <button class="yes_btn" type="button">Yes</button>
      <button class="no_btn" type="button">No</button>
    </div>
  </div>
  <div class="accepted hide">
    <div class="menu">
      <img src="/images/svg.png" alt="" class="svg" />
      <h1 class="header_mond">Yes-No</h1>
    </div>
    <h1>HA HA, I knew it</h1>
    <footer>Your response has been sent to the original author.</footer>
  </div>
  <footer>
    <div class="footer">
      <p>
        Made by
        <a href="https://github.com/aarush0101" class="fop"> Aarush Master </a>
      </p>
    </div>
  </footer>
</template>
