const body = document.querySelector("body");

function createHeader() {
  const header = document.createElement("header");
  body.append(header);
  return header;
}

function renderHeader() {
  createHeader();
}

function createMain() {
  const main = document.createElement("main");
  body.append(main);
  return main;
}

function renderMain() {
  createMain();
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
