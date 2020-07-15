---
title: Rolling My Own Ad Platform
# 201202290000
---
Over the last few months, I’ve been working on a complete overhaul of our different websites in [my division](http://louisville.edu/delphi) at [UofL](http://louisville.edu/). Part of the design I landed on in the fall, incorporated an internal ad spot, where we could either advertise programs and offerings, or cross-sell them. I knew that I wanted to make this platform robust, but easy to use since people managing ads aren’t web developers. I landed on a solution that uses PHP/MySQL on an different server and JavaScript to serve ad.

Here’s how I’ve got it setup:

Using jQuery, on document.ready(), I append my script from the remove server and pass the current URL:

$('body').append('<script type="text/javascript" src="http://remoteserver.com/ad.php?js&u=' + location.href + '"></script>');
I could simply add this script to the <head> or just before </body> but due to the way the university’s system is setup, this is the best way. Since I’m using PHP/MySQL to manage the indiviual ads, you’ll notice that the script is actually a PHP file. So what does this script do?

After reading this [article on 24 ways](http://24ways.org/2011/defending-the-perimeter-against-web-widgets) about not hurting a page when an external script was not available, I decided to set my script up the same way. So my script gathers ad based on the URL and some other details and runs a simple function that writes out HTML:

...database lookup and logic...
publishAd('<div class="ad">' + title + media + body + '</div>');
I know you’re asking yourself how is he running a function that doesn’t exist. Typically, this is when you see an undefined error in your console. It just so happens that I have the publishAd function defined in the same file as the append above. Here it is:

function publishAd(content){
	if(content.length > 0){
		$('#ad-block').html(content).show();
		$('#ad-block').fitVids();
		$('#ad-block a').attr('target','_blank');
	}
}
A couple of things going on here: passing the HTML from above and only continuing if something exists; inserting the HTML into a predefined div on the webpage; binding the helpful [fitVids](http://fitvidsjs.com/) plugin to make videos responsive; and adding a target attribute to have all links in the ad open a new window.

What I won’t go into detail here is the administration side of this platform. I’ve built a simple webform for my colleagues to create text, image and video ads that they can set to start and end at specific times, only show on certain pages and other types of customization. That form saves their ad data to a database which the above ad.php reads from the print the ad.

This was a neat piece of our redesign that I had a lot of fun experimenting with.