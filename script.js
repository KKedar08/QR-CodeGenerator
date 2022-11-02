var qrcode = new QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("Empty");
function generateQr() {
  qrcode.makeCode(document.querySelector("input").value);
}