// ------------------------------
// Back-Forward Cache Page Reload
// ------------------------------
// about: 	reload page on back button reload
// source: 	http://stackoverflow.com/questions/8788802/prevent-safari-loading-from-cache-when-back-button-is-clicked/13123626#13123626
//
function reload_back_forward_cache(){
	// assign event to windows onpageshow 
	window.onpageshow = function(event) {
		// when the page is loaded from back-forward cache the
		// persisted property of the onpageshow is true
		if (event.persisted) { 
			// reload webpage
			window.location.reload() 
		}
	};
}
//
//
// ------------------------------
// Get Element Position in Parent
// ------------------------------
// about: 	get index (integer) of child position within the parent element
function getIndex(node) {
	// capture children of element's parent
	var children = node.parentNode.childNodes;
	// iterate through the children of the element's parent
	for (i = 0; i < children.length; i++) {
		// check if the node in question matches the element in the array
		if (node == children[i]){
			// exit the loop
			break;
		}
	}
	// return the positional index (integer)
	return i;
}
//
//
