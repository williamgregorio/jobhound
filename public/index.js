document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");

  function createLogo() {
    const logoSVG = `
<svg width="48" height="79" viewBox="0 0 58 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5.91125" y="31.8549" width="10.6183" height="47.1452" rx="5.30914" fill="#2978A0"/>
<g filter="url(#filter0_d_3_38)">
<rect x="35.3098" y="67.3969" width="10.6183" height="44.2283" rx="5.30914" transform="rotate(150 35.3098 67.3969)" fill="#2978A0"/>
</g>
<g filter="url(#filter1_d_3_38)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M47.9503 10.6651C50.5872 14.6115 51.9946 19.2511 51.9946 23.9973H42.6502C42.5931 16.0121 36.1022 9.55643 28.1035 9.55643C20.0694 9.55643 13.5564 16.0694 13.5564 24.1035C13.5564 32.1022 20.0121 38.5931 27.9973 38.6501V47.9946C23.2511 47.9946 18.6115 46.5872 14.6651 43.9504C10.7188 41.3135 7.643 37.5656 5.8267 33.1807C4.0104 28.7958 3.53517 23.9707 4.46111 19.3157C5.38705 14.6607 7.67258 10.3847 11.0287 7.02866C14.3847 3.67258 18.6607 1.38705 23.3157 0.461112C27.9707 -0.464829 32.7958 0.0103976 37.1807 1.8267C41.5656 3.643 45.3135 6.71879 47.9503 10.6651Z" fill="#0D2149"/>
</g>
<g filter="url(#filter2_d_3_38)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.74313 37.5419C7.10628 33.5955 5.69886 28.9559 5.69886 24.2097L13.5568 24.2097C13.6139 32.195 20.1048 38.6506 28.1035 38.6506C36.1376 38.6506 42.6505 32.1377 42.6505 24.1036C42.6505 16.6077 36.981 10.436 29.6962 9.64273L29.6962 0.212372C34.4424 0.212372 39.082 1.61979 43.0284 4.25665C46.9747 6.89351 50.0505 10.6414 51.8668 15.0263C53.6831 19.4112 54.1583 24.2363 53.2324 28.8913C52.3064 33.5463 50.0209 37.8223 46.6648 41.1783C43.3087 44.5344 39.0328 46.8199 34.3778 47.7459C29.7228 48.6718 24.8977 48.1966 20.5128 46.3803C16.1279 44.564 12.38 41.4882 9.74313 37.5419Z" fill="#2978A0"/>
</g>
<defs>
<filter id="filter0_d_3_38" x="1.94238" y="31.0365" width="35.425" height="47.7272" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_38"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_38" result="shape"/>
</filter>
<filter id="filter1_d_3_38" x="0" y="0" width="55.9946" height="55.9946" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_38"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_38" result="shape"/>
</filter>
<filter id="filter2_d_3_38" x="1.69885" y="0.212372" width="55.9946" height="55.9946" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_38"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_38" result="shape"/>
</filter>
</defs>
</svg>
`;
    const logoContainer = document.createElement("div");
    logoContainer.innerHTML = logoSVG;
    return logoContainer.firstElementChild;
  }
  function createHeader() {
    const header = document.createElement("header");
    const logo = createLogo();
    console.log(logo);
    header.append(logo);
    body.append(header);
    return header;
  }

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
        main.innerHTML = `${frontPage()}`;
    }
  }

  async function createResume() {
    try {
      const response = await fetch("/create-resume", {
        method: "POST",
        headers: {
          "Content-Type": "appliction/json",
        },
      });
      if (response.ok) {
        const { resumeKey } = await response.json();
        window.location.hash = `#edit-resume/${resumeKey}`;
      } else {
        console.error("Failed to create resume");
      }
    } catch (error) {
      console.error("Network error: ", error);
    }
  }
  function createImage(path, alt) {
    const img = document.createElement("img");
    img.src = path;
    img.alt = alt;
    return img.outerHTML;
  }
  function frontPageHero() {
    const hero = document.createElement("div");
    hero.setAttribute("id", "hero");
    const heroLeftContent = document.createElement("div");
    const headingOne = document.createElement("h1");
    headingOne.textContent = "Land an interview faster";
    const heroDescription = document.createElement("p");
    heroDescription.textContent =
      "Seek jobs efficiently while creating unique tailored resumes for each job you seek";
    heroLeftContent.append(headingOne);
    heroLeftContent.setAttribute("id", "heroLeft");

    const heroImagePath = "./assets/image_hook_landing.png";
    const heroImage = createImage(heroImagePath, "business_conference");
    heroLeftContent.append(headingOne, heroDescription);
    const heroRightContent = document.createElement("div");
    heroRightContent.innerHTML = heroImage;
    heroRightContent.setAttribute("id", "heroRight");
    hero.append(heroLeftContent, heroRightContent);
    console.log(hero);
    return hero;
  }
  function frontPage() {
    return frontPageHero().outerHTML;
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
        localStorage.setItem("userAuthenticated", true);
        window.location.hash = "#dashboard";
        window.location.reload();
      } else {
        console.error("Registration failed: ", await response.text());
      }
    } catch (error) {
      console.error("Network Error: ", error);
    }
  }

  function createDashboard() {
    const section = document.createElement("section");
    const dashboardHeader = createDashboardHeader();
    console.log(dashboardHeader);
    section.append(dashboardHeader);
    return section;
  }
  function createDashboardHeader() {
    const header = document.createElement("div");
    header.setAttribute("class", "dashboard-header");
    return header;
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
