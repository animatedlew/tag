(self => {
  let ref = self.getAttribute("ref"); // for closure
  let xhr = new XMLHttpRequest();
  xhr.onload = e => Function(`return ${xhr.response}`).call(self)(ref);
  xhr.open("GET", "script.js");
  xhr.send();
  self.setAttribute("ref", ""); // hide script tag from dups
})(document.querySelector("[ref=tag]")); // in lieu of currentScript or closest
