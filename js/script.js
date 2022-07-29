function searchRandomContent() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (json) {
      changeQuestion(json);
    });
}

function toggleBlur() {
  var bluredField = document.getElementById("card-answer");
  bluredField.classList.toggle("blur");
}

function changeQuestion(content) {
  var containerCard = document.getElementById("container-card");
  containerCard.innerHTML = "";

  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `
    <div class="card-header centralize">
      <h1 class="card-title">O que é ${content.title}?</h1>
    </div>
    <div id="card-answer" class="card-body blur">
      <p>${content.description}</p>
    </div>`;
  containerCard.appendChild(cardDiv);
}

window.addEventListener("load", searchRandomContent);
