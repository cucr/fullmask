/*! Licensed under MIT. (c) cucr Lin https://github.com/cucr/fullmask.js */
(function() {

  if(typeof FullMask !== 'undefined') return;

  var create;

  // Create a mask
  create = function() {
            var fullmask = document.createElement('div');
            fullmask.id = 'fullmask';
            fullmask.style.backgroundColor = '#000';
            fullmask.style.width = document.documentElement.clientWidth + 'px';
            fullmask.style.height = document.documentElement.clientHeight + 'px';
            fullmask.style.position = 'absolute';
            fullmask.style.top = 0 + 'px';
            fullmask.style.opacity = 0.3;
            fullmask.style.filter = 'alpha(opacity=30)';
            fullmask.style.zIndex = 999;
            fullmask.style.display = 'none';
			
			var loadingimg = document.createElement('img');
            loadingimg.id = 'loadingimg';
            loadingimg.style.position = 'absolute';
            loadingimg.style.top = '50%';
            loadingimg.style.left= '50%';
            loadingimg.style.zIndex = 1000;
            loadingimg.style.display = 'none';
			loadingimg.style.textAlign = 'center';
			loadingimg.src = './loading-image.gif';
			fullmask.appendChild(loadingimg);		
            return document.body.appendChild(fullmask);
  }
  
  create();
  FullMask = { };
  // Show mask
  FullMask.show = function() {
    document.getElementById("fullmask").style.display = "block";
	document.getElementById("loadingimg").style.display = "block";
  }

  // Hide mask
  FullMask.hide = function(elements) {
	document.getElementById("fullmask").style.display = "none";
	document.getElementById("loadingimg").style.display = "none";
  }

})();
