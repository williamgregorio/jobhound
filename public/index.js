document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");

  function createHeader() {
    const header = document.createElement("header");
    body.append(header);
    return header;
  }

  const links = [
    { uri: "#home", name: "Home" },
    { uri: "#login", name: "Login" },
    { uri: "#register", name: "Register" },
    { uri: "#dashboard", name: "Dashboard" },
  ];

  function getDynamicLinks() {
    const baseLinks = [{ uri: "#home", name: "Home" }];
    const authenticatedUserLinks = [
      ...baseLinks,
      { uri: "#dashboard", name: "Dashboard" },
      { uri: "#logout", name: "Logout" },
    ];
    const guestUserLinks = [
      ...baseLinks,
      { uri: "#login", name: "Login" },
      { uri: "#register", name: "Register" },
    ];
    return isUserAuthenticated() ? authenticatedUserLinks : guestUserLinks;
  }

  function navigate() {
    const main = document.querySelector("main") || createMain();
    main.innerHTML = "";

    if (window.location.hash === "#dashboard" && !isUserAuthenticated()) {
      window.location.hash = "#login";
      return;
    }
    if (window.location.hash === "#logout") {
      logout();
      return;
    }

    switch (window.location.hash) {
      case "#login":
        main.append(createLoginForm());
        break;
      case "#register":
        main.append(createRegisterForm());
        break;
      case "#dashboard":
        main.append(createDashboard());
        break;
      default:
        main.innerHTML = "<h1>Home</h1>";
    }
  }

  function isUserAuthenticated() {
    return !!localStorage.getItem("userAuthenticated");
  }
  function logout() {
    localStorage.removeItem("userAuthenticated");
    window.location.hash = "#home";
    window.location.reload();
  }
  function createHeaderMenu(links) {
    const ul = document.createElement("ul");
    links.forEach((link) => {
      const li = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = link.uri;
      anchor.textContent = link.name;
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        if (link.uri === "#logout") {
          logout();
        } else {
          window.location.hash = link.uri;
        }
      });
      li.append(anchor);
      ul.append(li);
    });
    return ul;
  }

  function renderHeader() {
    const existingHeader = body.querySelector("header");
    if (existingHeader) {
      body.removeChild(existingHeader);
    }
    const dynamicLinks = getDynamicLinks();
    createHeader().append(createHeaderMenu(dynamicLinks));
  }

  function createMain() {
    const main = document.createElement("main");
    body.append(main);
    return main;
  }

  function createLoginForm() {
    const form = document.createElement("form");
    const username = document.createElement("input");
    username.setAttribute("type", "text");
    username.setAttribute("name", "username");
    username.placeholder = "Username";
    const password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.placeholder = "Password";
    const submitButton = document.createElement("button");
    submitButton.textContent = "Login";
    form.append(username, password, submitButton);

    form.onsubmit = handleLoginSubmit;
    return form;
  }

  function createRegisterForm() {
    const form = document.createElement("form");
    const username = document.createElement("input");
    username.setAttribute("type", "text");
    username.setAttribute("name", "username");
    username.placeholder = "Username";
    const password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.placeholder = "Password";
    const submitButton = document.createElement("button");
    submitButton.textContent = "Register";
    form.append(username, password, submitButton);

    form.onsubmit = handleRegisterSubmit;
    return form;
  }

  async function handleLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseBody = await response.json();
        console.log(responseBody);
        localStorage.setItem("userAuthenticated", true);
        window.location.hash = "#dashboard";
        window.location.reload();
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Network error: ", error);
    }
  }

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Registered successfully");
        window.location.hash = "#login";
      } else {
        console.error("Registration failed: ", await response.text());
      }
    } catch (error) {
      console.error("Network Error: ", error);
    }
  }

  function createDashboard() {
    const section = document.createElement("section");
    section.textContent = "Dashboard";
    return section;
  }

  function createFooter() {
    const footer = document.createElement("footer");
    body.append(footer);
    return footer;
  }

  function renderFooter() {
    createFooter();
  }

  function renderElements() {
    renderHeader();
    createMain();
    renderFooter();
  }

  renderElements();
  window.addEventListener("hashchange", navigate);
  navigate();
});
