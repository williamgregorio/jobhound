const body = document.querySelector("body");

function createHeader() {
  const header = document.createElement("header");
  body.append(header);
  return header;
}

const links = [
  { uri: "/login", name: "Login" },
  { uri: "/register", name: "Register" },
];
function createHeaderMenu(links) {
  const ol = document.createElement("ol");
  links.forEach((link) => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = link.uri;
    anchor.textContent = link.name;
    li.append(anchor);
    ol.append(li);
  });
  console.log(ol);
  return ol;
}
function renderHeader() {
  createHeader().append(createHeaderMenu(links));
}

function createMain() {
  const main = document.createElement("main");
  body.append(main);
  return main;
}

function renderMain() {
  createMain();
}

function createRegisterForm() {
  const form = document.createElement("form");
  const username = document.createElement("input");
  username.setAttribute("type", "text");
  const password = document.createElement("input");
  password.setAttribute("type", "password");
  const submitButton = document.createElement("button");
  submitButton.textContent = "Register";

  form.append(username, password);
  return form;
}

function renderRegisterForm() {
  createRegisterForm();
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
  renderMain();
  renderFooter();
}

renderElements();
