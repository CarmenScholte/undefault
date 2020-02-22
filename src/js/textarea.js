function restyleTextareas() {
  console.log("Restyle textareas");
  var textareaList = document.getElementsByTagName("textarea");
  var listLenght = textareaList.length;
  for (var i = 0; i < listLenght; i++) {
    var element = textareaList[i];
    var parent = element.parentNode;

    // make a wrapper
    var textareaWrapperNode = document.createElement("div");
    textareaWrapperNode.className = "textarea-wrapper";

    // // add wrapper to parent
    var newElement = element.cloneNode();
    textareaWrapperNode.appendChild(newElement);
    parent.appendChild(textareaWrapperNode);
  }

  // remove non-wrapped textareas
  var listLength = textareaList.length;
  for (var j = listLength - 1; j >= 0; j--) {
    var parent = textareaList[j].parentNode;
    if (parent.className !== "textarea-wrapper") {
      parent.removeChild(textareaList[j]);
    }
  }
}

document.addEventListener("DOMContentLoaded", restyleTextareas);
