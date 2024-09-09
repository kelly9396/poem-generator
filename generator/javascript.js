function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructions = document.querySelector("#instructions");
  let apiKey = "of08ta1f90c49d4b081b6aa347d98489";
  let prompt = `Generate any poem that the ${instructions.value}`;
  let context =
    "You are an expert in writing short and sweet poems. Generate a 5 line poem in basic HTML and separate each line with a <br />. Don't display the title and html. Sign the poem with Kelly Visagie❤️ in <em>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showPoem);
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);
