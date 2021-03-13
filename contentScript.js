function copyToClipboard(text) {
	console.log("copyToClipboard called");
	console.log(text);
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }

window.setInterval(function(){
	Array.from(document.getElementsByClassName('checklist')).forEach(function(checklist) {
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

