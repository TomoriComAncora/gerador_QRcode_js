const container = document.querySelector(".container");
const btnQrCode = document.querySelector("#qr button");
const inputQrCode = document.querySelector("#qr input");
const imgQrCode = document.querySelector("#qr-code img");

// funções
const gerarQrCode = () => {
  const inputQrCodeValue = inputQrCode.value;
  if (!inputQrCodeValue) return;

  btnQrCode.innerText = "Gerando código...";
  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputQrCodeValue}`;

  imgQrCode.addEventListener("load", () => {
    container.classList.add("ativo");
    btnQrCode.innerText = "Código criado!";
  });
};

// eventos
btnQrCode.addEventListener("click", () => {
  gerarQrCode();
});

inputQrCode.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    gerarQrCode();
  }
});

// limpar qr code
inputQrCode.addEventListener("keyup", () => {
  if (!inputQrCode.value) {
    container.classList.remove("ativo");
    btnQrCode.innerText = "Gerar QR code";
  }
});
