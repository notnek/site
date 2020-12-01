---
title: View Later
createdAt: 2011/01/22
---
Lately, I’ve needed an easy way to save a website that I may need/want to view later. Sure, I could use my built in bookmarks, or utitlize services like [Instapaper](http://instapaper.com/) or [Delicious](http://www.delicious.com/), or even the tried and true email to myself. However, there are multiple reasons why I really don’t want any of that. I don’t want to clutter up my browser, nor do I need all the functionality of those services and let them house my data, and I especially get tired of sending myself emails with just one URL in it.

My needs are simple: 1) Save a URL, 2) Keep that information on my own server. In order to accomplish this, it was obvious I needed to roll my own solution. So I spent this weekend building out a simple URL saving service. It runs on a LAMP variation and is just a handful of files. The main functionality rests on a simple JavaScript bookmarklet. Once installed, it’s just a simple click to save a URL for later viewing. I plan to add a few more features, such as an archive and favorites, later.

I’ve been running it on PHP 5.2.13 and MySQL 5.0.91 but I doubt you will have problems on any other LAMP flavor.

Download the latest version of [View Later](https://github.com/notnek/view-later/archive/master.zip) [1.0.1] and check out `-docs/README.txt` for installation help.
