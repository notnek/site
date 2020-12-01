---
title: setVersion() – Automate Your Caching Process
createdAt: 2011/04/24
---
Caching your assets is a great and easy way to speed up your site’s load times. However, it can be time consuming to rename files and messy to keep several versions of files on your server. A lot of sites have used query strings, `styles.css?v=1`, to accomplish this cache. I believe it’s better to use a full, versioned filename like styles.1.css, so that the user’s browsers pulls a distinct file. It’s a fairly simple process and I’ll show you how to automate the numbering.

First we need to turn on expiration for the files you want to have a long-lasting cache. This goes in your .htaccess file:

```bash[.htaccess]
<FilesMatch "\.(css|js|jpg|gif|png)$">
	ExpiresActive On
	ExpiresDefault "access plus 10 years"
</FilesMatch>
```

In the above snippet, we are searching for stylesheets, scripts and images and setting their expiration date to 10 years from now.

Now, we need to setup a RewriteRule to handle the new file names. This also goes in the .htaccess file:

```bash[.htaccess]
RewriteEngine On
RewriteRule ^(.*)\.[0-9]+\.(css|js|jpg|gif|png)$ $1.$2 [L]
```

Please note that you must turn the `RewriteEngine` on. In this snippet, the server searches for the same asset extensions as above and applies a rule to them: read file `styles.12345.css` as `styles.css`. Using this rule, you only have to keep one version of each file on your server, `styles.css`.

So you could stick with what we’ve done so far and be set. Each time you wanted to update the cache, you’d change the number where you’re linking the asset. But, if you’re like me, that’s going to get really old, fairly quickly. Let’s bring in some server-side scripting to automate this process for you. Here’s a PHP function to rename the file on the fly:

```php
function setVersion($url){
	$path       = pathinfo($url);
	$version    = '.'.filemtime($_SERVER['DOCUMENT_ROOT'].$url).'.';
	$cache_file = str_replace('.', $version, $path['basename']);
	print $path['dirname'].'/'.$cache_file;
}
```

This function is pretty straight forward. First, `pathinfo()` returns an array containing various parts of the file. Then creates a string containing the last modified time of the asset file using `filemtime()`. Next up is replacing the dot in the original file with our timestamp string. Lastly, we print out the new filename.

Once you include that function on your page, it’s really simple to use, replace `/-/css/default.css`
with `<?php setVersion('/-/css/default.css'); ?>` and you’ll get: `/-/css/default.1298645866.css`.

Together, with your .htaccess rule and PHP function, you’ve fully automated the caching process. Next time you save or upload an asset, the timestamp will be automatically updated.
