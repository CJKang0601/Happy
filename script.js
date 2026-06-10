const intro = document.querySelector("#intro");
const loading = document.querySelector("#loading");
const result = document.querySelector("#result");
const drawButton = document.querySelector("#drawButton");
const resetButton = document.querySelector("#resetButton");

const show = (element) => {
  element.hidden = false;
};

const hide = (element) => {
  element.hidden = true;
};

drawButton.addEventListener("click", () => {
  hide(intro);
  show(loading);
  loading.classList.remove("curtain-open");

  window.setTimeout(() => {
    loading.classList.add("curtain-open");
  }, 120);

  window.setTimeout(() => {
    hide(loading);
    show(result);
  }, 2200);
});

resetButton.addEventListener("click", () => {
  hide(result);
  loading.classList.remove("curtain-open");
  show(intro);
  drawButton.focus();
});
