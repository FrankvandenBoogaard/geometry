function area(w, h) {
  return w * h;
}

function triangleArea(w, h) {
  return (w * h) / 2;
}

function area(w) {
  return w ** 2;
}

function circleArea(r) {
  return Math.PI * Math.pow(r, 2);
}

function circumference(w, h) {
  return 2 * w + 2 * h;
}

function diagonal(w, h) {
  return Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
}

module.exports = {
  area,
  circumference,
  diagonal,
  circleArea,
  circumference,
  triangleArea,
};
