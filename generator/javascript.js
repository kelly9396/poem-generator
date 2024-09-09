function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Gentle winds, Flowers bend, Petals dance, Nature's trance",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);
