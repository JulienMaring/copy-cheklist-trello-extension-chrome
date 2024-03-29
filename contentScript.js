function copyToClipboard(text) {
	navigator.clipboard.writeText(text);
  }

window.setInterval(function(){
	Array.from(document.getElementsByClassName('checklist')).forEach(function(checklist) {
		Array.from(checklist.getElementsByClassName('window-module-title-options')).forEach(function(item){
			var buttonAdded = item.getElementsByTagName('button')[0];
			if (!buttonAdded) {
				var button = document.createElement("button");
				button.innerHTML = "Copy";
				item.appendChild(button);

				button.addEventListener ("click", function(event) {
					event.stopPropagation();
					copyToClipboard(Array.from(checklist.getElementsByClassName('checklist-item')).map(function(checklistItem) {
						newItem = checklistItem.innerText;
					  	return newItem;
					}).join("\n"));
				});
			}
		});
	});
}, 5000);

