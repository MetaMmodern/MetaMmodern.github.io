const GColor = function (r, g, b) {
  r = typeof r === "undefined" ? 0 : r;
  g = typeof g === "undefined" ? 0 : g;
  b = typeof b === "undefined" ? 0 : b;
  return { r: r, g: g, b: b };
};
const createColorRange = function (c1, c2) {
  const colorList = [];
  for (let i = 0; i < 255; i++) {
    const tmpColor = new GColor();
    tmpColor.r = Math.floor(c1.r + (i * (c2.r - c1.r)) / 255);
    tmpColor.g = Math.floor(c1.g + (i * (c2.g - c1.g)) / 255);
    tmpColor.b = Math.floor(c1.b + (i * (c2.b - c1.b)) / 255);
    colorList.push(tmpColor);
  }
  return colorList;
};

/* ==================
   Testing Code Below
   ================== */

// const one = new GColor(77, 238, 234);
// const two = new GColor(3, 94, 232);
// const three = new GColor(246, 1, 157);
// const four = new GColor(212, 0, 120);
// const five = new GColor(151, 0, 204);
// const six = new GColor(151, 0, 204);
// const seven = new GColor(151, 0, 204);
const one = new GColor(255, 0, 0);
const two = new GColor(255, 127, 0);
const three = new GColor(255, 255, 0);
const four = new GColor(0, 255, 0);
const five = new GColor(0, 0, 255);
const six = new GColor(46, 43, 95);
const seven = new GColor(139, 0, 255);
const range1 = createColorRange(one, two);
const range2 = createColorRange(two, three);
const range3 = createColorRange(three, four);
const range4 = createColorRange(four, five);
const range5 = createColorRange(five, six);
const range6 = createColorRange(six, seven);
const range7 = createColorRange(seven, one);
const bigRange = range1
  .concat(range2)
  .concat(range3)
  .concat(range4)
  .concat(range5)
  .concat(range6)
  .concat(range7);
let myarr = [];
const theme = document.getElementById("current-theme");
let counter = 0;
setInterval(() => {
  if (counter >= bigRange.length) {
    counter = 0;
    return;
  }
  let currentColor = bigRange[counter];
  theme.setAttribute(
    "content",
    `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
  );
  counter += 8;
}, 41);
