var displayTag = document.getElementById("display");
var btn = document.getElementById("tap");
console.log(displayTag);

function clickIcon(link) {
  displayTag.value = link;
  btn.innerHTML = "copy";
  btn.backgroundColor =""
}

function copy() {
  if (displayTag.value == "") {
  } else {
    displayTag.select();
    try {
      document.execCommand("copy");
      btn.innerHTML = "Copied";
      btn.style.backgroundColor = "blue";
    } catch (err) {
      console.error("Unable to copy:", err);
    }
  }
}
