onSelectClicked = function (event) {
  var className = event.target.nextSibling.className;
  if (className.indexOf("closed") == -1) {
    event.target.nextSibling.className = "options options--closed";
    event.target.className = event.target.className.replace(" select--opened", "");
  } else {
    event.target.nextSibling.className = "options";
    event.target.className = event.target.className + " select--opened";
  }
}

onSelectOption = function (event) {
  var selectNode = event.target.parentNode.parentNode.childNodes[0];
  selectNode.textContent = event.target.textContent;
  selectNode.dispatchEvent(new Event("click"));
  selectNode.className = selectNode.className.replace(" select--option-disabled", "");
}

onDocumentClick = function(event) {
  var target = event.target.className;
  if (target.indexOf("select") == -1 && target.indexOf("option") == -1) {
    var selectList = document.getElementsByClassName("select");
    for (var i = 0; i < selectList.length; i++) {
      var element = selectList[i];
      element.className =  element.className.replace(" select--opened", "");
      element.nextSibling.className = "options options--closed";
    }
  }
}

restyleSelects = function () {
  var selectList = document.getElementsByTagName("select");
  for (var i = 0; i < selectList.length; i++) {
    var element = selectList[i];

    // add selectDiv to parent
    var parent = element.parentNode;
    var selectWrapperNode = document.createElement("div");
    selectWrapperNode.className = "select-wrapper";

    var selectNode = document.createElement("div");
    selectNode.className = "select";
    selectNode.addEventListener("click", onSelectClicked);

    selectWrapperNode.appendChild(selectNode);
    parent.appendChild(selectWrapperNode);

    // add options to div
    var options = element.getElementsByTagName("option");
    var optionWrapperNode = document.createElement("div");
    optionWrapperNode.className = "options options--closed"
    for (var j = 0; j < options.length; j++) {
      // set first option as select text
      var option = options[j];
      if (j == 0) {
        selectNode.appendChild(document.createTextNode(option.text));
        if (option.disabled) {
          selectNode.className = "select select--option-disabled"
        }
      }

      var optionNode = document.createElement("div");
      var textnode = document.createTextNode(option.text);
      optionNode.appendChild(textnode);
      optionNode.className = "option";

      if (option.disabled) {
        // add disabled styling 
        optionNode.className = "option option--disabled";
      } else {
        // add click listener 
        optionNode.addEventListener("click", onSelectOption);
      }

      optionWrapperNode.appendChild(optionNode)
    }
    selectWrapperNode.appendChild(optionWrapperNode);
  }

  selectList = document.getElementsByTagName("select");
  for (var k = selectList.length; k > 0; k--) {
    var element = selectList[k-1];
    var parent = element.parentElement;
    parent.removeChild(element);
  }
}

document.addEventListener("click", onDocumentClick);

// run multiple times to support safari
//document.addEventListener("DOMContentLoaded", restyleSelects);

//restyleSelects();

// window.onload = function () {
//   console.log('on load');
//   restyleSelects();
// }

;