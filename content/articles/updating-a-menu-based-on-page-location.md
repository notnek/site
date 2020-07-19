---
title: Updating a Menu Based on Page Location
publishedAt: 07/27/2011
---
There are plenty of sites that have sectioned pages which use an anchored link menu system to jump to each section. If you look back at [my smooth anchor post](/articles/smooth-anchors), you can easily adapt that to make the jump behave a little bit nicer. But how about updating the menu so the user is reminded what section they’re on as they scroll down the page? It’s just a few lines of JavaScript+jQuery and you’ll be updating your menu on-the-fly. Let’s get started.

_Note: Be sure to include a copy of jQuery or this won’t work._

First, let’s setup our menu’s HTML:

```html
<ul id="menu">
	<li><a href="#part-1" class="active">Part 1</a></li>
	<li><a href="#part-2">Part 2</a></li>
	<li><a href="#part-3">Part 3</a></li>
	<li><a href="#part-4">Part 4</a></li>
	<li><a href="#part-5">Part 5</a></li>
</ul>
```

Here’s the function that checks the user’s current position from the top of the window. Then updates some classes in our menu. Based on different pixel counts, we’ll remove the `.active` class and add it to the appropriate list item.

```js
function scroll_update(){

	// Get the current window position
	var position = $(window).scrollTop();

	// Remove the active state
	$('#menu li a.active').removeClass('active');

	// Set li to active based on position
	if(position <= 500){
		$('#menu li:eq(0) a').addClass('active');
	} else if(position <= 1000){
		$('#menu li:eq(1) a').addClass('active');
	} else if(position <= 1500){
		$('#menu li:eq(2) a').addClass('active');
	} else if(position <= 2000){
		$('#menu li:eq(3) a').addClass('active');
	} else{
		$('#menu li:eq(4) a').addClass('active');
	}
}
```

Now, we just need to tie this function to the window’s scroll event:

```js
$(window).scroll(scroll_update);
```

That’s it. Now when the user scrolls, your menu will be updated to reflect the current position. We can take this a little further for the sake of preventing the browser from firing our code on every vertical pixel.

Using [Ben Alman’s](http://benalman.com/) [Throttle plugin](http://benalman.com/projects/jquery-throttle-debounce-plugin/), we can limit the amount of times our code is fired. Since we’re only checking for change every 500 pixels, we can safely use this approach. First, include the Throttle plugin, then you’ll just need to update the scroll event:

```js
$(window).scroll($.throttle(500,scroll_update));
```

And that’s it. Now our event is only called every 500 milliseconds. This should help performance of your page, even if it may seem insignificant.
