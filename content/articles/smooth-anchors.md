---
title: Smooth Anchors
createdAt: 02/23/2011
---
Long web pages usually have an anchor that takes you back to the top of the page. In most cases, the browser will skip right to the top when a user clicks that link. But using [jQuery](http://jquery.com/), you can easily make your “Top of Page” anchors more pleasant.

First, you need your anchored link:

```html
Going Up? <a href="#top" id="back-to-top">Top</a>
```

Now, add in a simple jQuery function to make the jump a bit smoother:

```js
$(document).ready(function(){
	$('#back-to-top').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:0},'slow');
	});
});
```

_Note: Be sure to include a copy of jQuery before calling this function._

Breaking down this simple code, we assign a function to the click event for #back-to-top.

In that function we prevent the default action, and use jQuery’s [animate](http://api.jquery.com/animate/) to scroll to the top of html and body.
