//



// 1. Create the button


// 2. Append somewhere
/*console.log(document);
var chromeContainer = document.getElementById('chrome-container');
console.log(chromeContainer);
var windowOverlay = chromeContainer.getElementsByClassName('window-overlay')[0];
console.log(windowOverlay);
var window = windowOverlay.getElementsByClassName('window')[0];
console.log(window);
var windowWrapper = window.getElementsByClassName('window-wrapper js-tab-parent')[0];
console.log(windowWrapper);
var cardDetail = windowWrapper.getElementsByClassName('card-detail-window u-clearfix')[0];
console.log(cardDetail);*/

function copyToClipboard(text) {
	console.log("copyToClipboard called");
	console.log(text);
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }
var intervalId = window.setInterval(function(){
	Array.from(document.getElementsByClassName('checklist')).forEach(function(checklist) {
		var h3Title = checklist.getElementsByClassName('current hide-on-edit')[0];
		Array.from(checklist.getElementsByClassName('window-module-title-options')).forEach(function(item){
			var buttonAdded = item.getElementsByTagName('button')[0];
			if (!buttonAdded) {
				var button = document.createElement("button");
				button.innerHTML = "Copy Checklist";
				item.appendChild(button);

				button.addEventListener ("click", function() {
					  copyToClipboard(Array.from(checklist.getElementsByClassName('checklist-item')).map(function(checklistItem) {

				  		newItem = checklistItem.innerText;
					  
					  	return newItem;
					}).join("\n"));
				});
			}
		});
	});
}, 5000);

/*
copy($(".checklist-item:not(.checklist-item-checked)").map(function() {
  var e = $(this),
      item = e.find(".checklist-item-details-text").text()
  
  if (e.hasClass("checklist-item-state-complete")) {
    item = item + " (DONE)"
  }
  
  return item
}).get().join("\n"))*/
