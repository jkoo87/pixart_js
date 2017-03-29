var inputField = $("#color-field");
var colorButton = $("#set-color");
var brush = $(".brush")

colorButton.on("click", setColor);
colorButton.keypress(setColor);

function setColor() {
  event.preventDefault()
  brush.css("background-color", inputField.val());
};
