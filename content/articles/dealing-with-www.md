---
title: Dealing with WWW
publishedAt: 01/07/2011
---
When you're finishing up a new site or revisiting an old one, it's a smart choice to make sure your URL is loaded the same way, with or without the www record.

In some cases, `www.domain.com` serves different content than domain.com. However, for a vast majority of sites users get the same content either way, so it's important to setup your site so that there is a consistent URL that visitors' and search engine crawlers see. It's an easy fix…

You need to have an [.htaccess](http://www.javascriptkit.com/howto/htaccess.shtml) file, and have the mod_rewrite engine turned on:

```bash[.htaccess]
RewriteEngine On
```

Then, it's just two lines to make your site either add www:

```bash[.htaccess]
# Add WWW
RewriteCond %{HTTP_HOST} ^domain.com$ [NC]
RewriteRule ^(.*)$ http://www.domain.com/$1 [R=301,L]
```

Or, to drop it like I've done on my own site:

```bash[.htaccess]
# Remove WWW
RewriteCond %{HTTP_HOST} ^www.domain.com$ [NC]
RewriteRule ^(.*)$ http://domain.com/$1 [R=301,L]
```

That's it! Depending on which version you choose, visitors and crawlers will be automatically redirected to the correct setting of your domain.
