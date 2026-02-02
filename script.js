const btnNo = document.getElementById("no");
const box = document.getElementById("box");

function moverBoton() {
  const boxRect = box.getBoundingClientRect();
  const btnRect = btnNo.getBoundingClientRect();

  const maxX = boxRect.width - btnRect.width;
  const maxY = boxRect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btnNo.style.left = x + "px";
  btnNo.style.top = y + "px";
}

// EFECTO MAQUINA DE ESCRIBIR
const texto = "¿Quieres ser mi San Valentín? No acepto no por respuesta...";
const h1 = document.getElementById("question");
let i = 0;

function escribir() {
    if (i < texto.length) {
        h1.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 100);
    }
}

escribir();

// PC (mouse)
btnNo.addEventListener("mouseenter", moverBoton);

// MÓVIL (tap)
btnNo.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  moverBoton();
});
