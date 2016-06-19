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
