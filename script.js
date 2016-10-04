ref => {
  var xhr = new XMLHttpRequest();
  xhr.onload = e => Function(`return ${xhr.response}`).call(this)(ref);
  xhr.open("GET", "img.js");
  xhr.send();
};
