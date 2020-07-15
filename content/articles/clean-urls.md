---
title: Clean URLS
# 201101180000
---
I’d like to continue providing some simple tips on utilizing an .htaccess file to create some better URLs. Let’s be honest… no one wants to remember domain.com/display.php?room=kitchen&brand=cuisinart&name=ice-cream-maker. The variables are nearly impossible to retain when you’re quickly browsing a site. With that said, you should take a few minutes and setup a RewriteRule to clean up that nasty URL.

You need to have the Rewrite Engine turned on for this to work:

# Turn On
RewriteEngine On
Now, let’s start by cleaning up just one of those variables. Take just domain.com/display.php?room=kitchen, we can easily clean that URL to read as domain.com/kitchen. Isn’t that much better?

Here’s the one liner to make that URL work:

# Pretty URL (ex. /room)
RewriteRule ^([A-Za-z0-9-]+)/?$ display.php?room=$1 [NC,L]
This simple line is using a regular expression to match a URL to a specific file. Above we look for alphanumeric characters, as well as hyphens. Here are some other common patterns:

.* # Any Character
[A-Za-z-]+ # Letters and Hyphens
[0-9]+ # Numbers
Now, you’re probably wondering how to clean up a multiple-variable URL like at the beginning of this article. It’s truly easy as counting 1, 2, 3… All you have to do is keep increasing your $N in your rule, like so:

# Pretty URL (ex. /room/brand/name)
RewriteRule ^([A-Za-z0-9-]+)/([A-Za-z0-9-]+)/([A-Za-z0-9-]+)/?$ display.php?room=$1&brand=$2&name=$3 [NC,L]
All your doing is creating a new pattern for each variable, then increasing your $N in the file name. After running this line in our .htaccess file, we end up with domain.com/kitchen/cuisinart/ice-cream-maker, a much improved URL.

Flags are also a vital part to rewriting URLs. Think of them as a rule to the rule. In the preceding examples, I’ve used NC,L as my only flags, meaning my rule is not case sensitive and if the pattern matches, stop processing. There are other rules that you can check out when experimenting with better URLs.

Utilizing the [Apache mod_rewrite module](http://httpd.apache.org/docs/2.0/misc/rewriteguide.html), you can create a much better URL scheme. Play around with what structures make the most sense to your site’s browsing experience.
