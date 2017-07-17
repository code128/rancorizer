chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// console.log("RANCORIZER. Checking");
		var rancorfound1 = $( "div:contains('rancor')" )
		var rancorfound2 = $( "div:contains('Rancor')" )

		if (rancorfound1.length > 0 || rancorfound2.length > 0) {
			// console.log("RANCORIZER1. ", rancorfound1);
			// console.log("RANCORIZER2. ", rancorfound2)
			//Add Animate CSS
			var css_file  = $('<link />', {
				rel: 'stylesheet',
				href: chrome.runtime.getURL("css/animate.css")
			});
			$('head').append(css_file)

			//Create img
			var img = $('<img />', {
			  id: 'the_rancor',
			  class: 'animated zoomInLeft',
			  src: chrome.runtime.getURL("src/img/rancor.png"),
			  alt: 'rancor'
			});

			//Add rancor
			$('body').append(img)

			 function hideRancor() {
			   img.addClass("zoomOutRight");
			}

			// use setTimeout() to execute
			setTimeout(hideRancor, 2000)
		}
		//
	}
	}, 10);
});