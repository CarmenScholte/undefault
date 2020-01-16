restyleTextareas = function () {
  console.log("restyle");
  var textareaList = document.getElementsByTagName("textarea");

  console.log(textareaList);
  for (var i = 0; i < textareaList.length; i++) {
    var element = textareaList[i];
    var parent = element.parentNode;

    // make a wrapper
    var textareaWrapperNode = document.createElement("div");
    textareaWrapperNode.className = "textarea-wrapper";

    // add wrapper to parent
    textareaWrapperNode.appendChild(element);
    parent.appendChild(textareaWrapperNode);
  }

}

//run multiple times to support safari
document.addEventListener("DOMContentLoaded", restyleTextareas);
// window.onload = function () {
//   restyleTextareas();
// }
