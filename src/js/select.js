function onSelectClicked(event) {
  var className = event.target.nextSibling.className;
  if (className.indexOf("closed") == -1) {
    event.target.nextSibling.className = "options options--closed";
    event.target.className = event.target.className.replace(" select--opened", "");
  } else {
    event.target.nextSibling.className = "options";
    event.target.className = event.target.className + " select--opened";
  }
}

function onOptionClicked(event) {
  var selectNode = event.target.parentNode.parentNode.childNodes[0];
  selectNode.textContent = event.target.textContent;
  selectNode.dispatchEvent(new Event("click"));
  selectNode.className = selectNode.className.replace(" select--option-disabled", "");
  selectNode.focus();
}

function onDocumentClick(event) {
  var selectList = document.getElementsByClassName("select");
  for (var i = 0; i < selectList.length; i++) {
    var element = selectList[i];
    if (element != event.target) {
      element.className = element.className.replace(" select--opened", "");
      element.nextSibling.className = "options options--closed";
    } 
  }
}

function restyleSelects() {
  console.log('Restyle selects');
  var selectList = document.getElementsByTagName("select");
  for (var i = 0; i < selectList.length; i++) {
    var element = selectList[i];
    var parent = element.parentNode;
    var options = element.getElementsByTagName("option");

    // make a wrapper
    var selectWrapperNode = document.createElement("div");
    selectWrapperNode.className = "select-wrapper";

    // make a select
    var selectNode = document.createElement("div");
    selectNode.className = "select";

    // check if disabled
    if (element.disabled) {
      selectNode.className = selectNode.className + " select--disabled";
    // else add click listener if select has options
    } else if (options.length != 0) {
      selectNode.addEventListener("click", onSelectClicked);
      selectNode.tabIndex = 0;
    }

    // add select and wrapper to parent
    selectWrapperNode.appendChild(selectNode);
    parent.appendChild(selectWrapperNode);

    // make options wrapper
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

      // make option
      var optionNode = document.createElement("div");
      var textnode = document.createTextNode(option.text);
      optionNode.appendChild(textnode);
      optionNode.className = "option";

      if (option.disabled) {
        // add disabled styling 
        optionNode.className = "option option--disabled";
      } else {
        // or add click listener 
        optionNode.addEventListener("click", onOptionClicked);
      }

      // add option to wrapper
      optionWrapperNode.appendChild(optionNode)
    }

    // add options to parent wrapper
    selectWrapperNode.appendChild(optionWrapperNode);
  }

  // remove native selects
  selectList = document.getElementsByTagName("select");
  for (var k = selectList.length; k > 0; k--) {
    var element = selectList[k - 1];
    var parent = element.parentElement;
    parent.removeChild(element);
  }

  document.addEventListener("click", onDocumentClick);
}


// document.addEventListener("DOMContentLoaded", restyleSelect);
// window.onload = function () {
//   restyleSelect();
// };

export { restyleSelects };