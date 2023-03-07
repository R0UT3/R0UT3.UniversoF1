const langSelect = document.getElementById("language-select");
const oldLang = localStorage.getItem("lang");
if (oldLang) {
  replaceTexts(oldLang);
  const opcionSeleccionada = langSelect.querySelector(
    `option[value="${oldLang}"]`
  );
  if (opcionSeleccionada) {
    opcionSeleccionada.selected = true;
  }
}
langSelect.addEventListener("change", function () {
  const newLang = langSelect.value;
  localStorage.setItem("lang", newLang);
  replaceTexts(newLang);
});

function replaceTexts(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("data-lang", lang);
  fetch("./R0UT3.UniversoF1/textos.json")
    .then((response) => response.json())
    .then((json) => {
      if (window.location.pathname === "./R0UT3.UniversoF1/index.html") {
        document.getElementById("ini").textContent = json[lang].ini;
        document.getElementById("pil").textContent = json[lang].pil;
        document.getElementById("rec").textContent = json[lang].rec;
        document.getElementById("form").textContent = json[lang].form;
        document.getElementById("content").innerHTML = json[lang].content;
        document.getElementById("enlace").innerHTML = json[lang].enlace;
        document.getElementById("titIndex").textContent = json[lang].titIndex;
      } else if (window.location.pathname === "./R0UT3.UniversoF1/Pilotos.html") {
        document.getElementById("ini").textContent = json[lang].ini;
        document.getElementById("pil").textContent = json[lang].pil;
        document.getElementById("rec").textContent = json[lang].rec;
        document.getElementById("form").textContent = json[lang].form;
        document.getElementById("titPil").textContent = json[lang].titPil;
      } else if (window.location.pathname === "./R0UT3.UniversoF1/Circuitos.html") {
        document.getElementById("ini").textContent = json[lang].ini;
        document.getElementById("pil").textContent = json[lang].pil;
        document.getElementById("rec").textContent = json[lang].rec;
        document.getElementById("form").textContent = json[lang].form;
        document.getElementById("titRec").textContent = json[lang].titRec;
        document.getElementById("tHead").innerHTML = json[lang].tHead;
      } else if (window.location.pathname === "./R0UT3.UniversoF1/Formulario.html") {
        document.getElementById("ini").textContent = json[lang].ini; 
        document.getElementById("pil").textContent = json[lang].pil;
        document.getElementById("rec").textContent = json[lang].rec;
        document.getElementById("form").textContent = json[lang].form;
        document.getElementById("forms2").innerHTML = json[lang].forms2;
        document.getElementById("regis").value = json[lang].regis;
      }
      else if (window.location.pathname === "./R0UT3.UniversoF1/Gracias.html") {
        document.getElementById("ini").textContent = json[lang].ini;
        document.getElementById("pil").textContent = json[lang].pil;
        document.getElementById("rec").textContent = json[lang].rec;
        document.getElementById("form").textContent = json[lang].form;
        document.getElementById("thx").textContent = json[lang].thx;
      }
    })
    .catch((error) => {
      console.log("Error");
    });
}
