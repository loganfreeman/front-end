convertEmToPx = function(value) {
  var emElement, px;
  emElement = void 0;
  emElement = document.createElement("div");
  emElement.style.width = "1em";
  emElement.style.position = "absolute";
  document.body.appendChild(emElement);
  px = value * emElement.offsetWidth;
  document.body.removeChild(emElement);
  return px;
};
