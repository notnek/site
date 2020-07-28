---
title: Tools of the Trade
createdAt: 10/24/2012
---
I’ve recently reevaluated the tools and services I use to accomplish the different tasks I’m faced with on a daily basis. I thought it might be helpful to some if I listed everything I use, in both apps, configurations and web services. Let’s get started.

## Apps
As part of my reevaluation, a few of my daily apps have changed or become more heavily used:

- [Sublime Text 2](http://sublimetext.com/2) – The newest addition, I am amazed as the configuration and add-ons available. It took me a while to get on board with the initial setup, but I’m loving this app and it really is speeding up my work rate. _$59_
- [Terminal](http://en.wikipedia.org/wiki/Terminal_(OS_X)) – I’m spending more and more of my time in the command line because it’s simply faster moving around my files and folders and actively versioning my assets. _Free_
- [Photoshop CS6](http://www.adobe.com/products/photoshop.html) – Who doesn’t, right? _$699_
- [Google Chrome](http://google.com/chrome) – The Web Inspector is constantly improving and in my opinion is [streets ahead](http://www.youtube.com/watch?v=rf1GSjo4zSY) of Safari or Firefox. _Free_
- [Transmit](http://panic.com/transmit) – When I need to access a server via FTP, this is my choice. Always been the best. _$34_
- [CodeKit](http://incident57.com/codekit) – A nice app that does all sorts of things: compiling, image optimizing and browser reloads to name a few. _$25_

**Cost: $817** (though CS6 cost me less since I work in higher education)

### Configurations
As I’m sure everyone does, I’m very particular on how my apps are setup, not only for better work production, but a more enjoyable experience while working.

#### Sublime Text 2
- [Package Control](http://wbond.net/sublime_packages/package_control)
- [Soda Theme – Dark](https://github.com/buymeasoda/soda-theme)
- [Tomorrow Color Scheme – Eighties](https://github.com/chriskempson/tomorrow-theme)
- [Tag](https://github.com/SublimeText/Tag)
- [A New Icon](https://github.com/dmatarazzo/Sublime-Text-2-Icon)
- [Terminal](http://wbond.net/sublime_packages/terminal)
- My Settings – Admittely I haven’t customized it much since I’m still exploring all of the features:

```json
{
	"color_scheme": "Packages/Tomorrow Color Schemes/Tomorrow-Night-Eighties.tmTheme",
	"theme": "Soda Dark.sublime-theme",
	"draw_indent_guides": false,
	"open_files_in_new_window": false
}
```

#### Terminal
- [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh)
- [Tomorrow Theme](https://github.com/chriskempson/tomorrow-theme)
- [Homebrew](http://mxcl.github.com/homebrew)
- [Git](http://git-scm.com)
- [RVM](https://rvm.io)
- My Zsh Theme:

```bash
function git_prompt_info() {
  ref=$(git symbolic-ref HEAD 2> /dev/null) || return
  echo "$(parse_git_dirty)$ZSH_THEME_GIT_PROMPT_PREFIX$(current_branch)$ZSH_THEME_GIT_PROMPT_SUFFIX"
}

PROMPT='$fg[magenta]⌘ $fg[blue]${PWD/#$HOME/~} $(git_prompt_info)'

ZSH_THEME_GIT_PROMPT_PREFIX="[git:"
ZSH_THEME_GIT_PROMPT_SUFFIX="] $reset_color"
ZSH_THEME_GIT_PROMPT_DIRTY="$fg[red]+"
ZSH_THEME_GIT_PROMPT_CLEAN="$fg[green]"
```

## Web Services
I use a handful of web services in my daily workflow, some free and some paid:

- [WebFaction](http://webfaction.com/?affiliate=kenton) – My hosting provider of choice. My clients and my own personal projects usually don’t garner large amounts of traffic so a shared hosting environment isn’t a big deal. WebFaction allows you to host any type of site, platform or application under one account, which is really nice. As example, in one site you could run a Rails app, WordPress and a third Django app all under domain, with very simple configuration. _Starts at $9.50/m_
- [Typekit](http://typekit.com) – If necessary and the desired font is available, I use Typekit to serve my fonts. This site is currently serving [a few fonts](https://typekit.com/colophons/shr3foc). _Starts free with limitations_
- [Dropbox](http://db.tt/jxnyrKO) – I’m not sure I know anyone that doesn’t use Dropbox, but it’s vital for my daily work with clients all over the map. _Starts free_
- [Bitbucket](http://bitbucket.org) – Yes, I know the cool kids use GitHub, and while I’m on there as well, Bitbucket hosts all of my private Git repos without cost and some public as well. _Free for 5 users_
- [BrowserStack](http://browserstack.com) – Gone are the days of multiple VMs on Parallels, Sign in and test in any browser you want. _Starts at $19/m_
- [Ballpark](http://getballparkapp.com) – I’m not a huge fan of the business side of life, but Ballpark makes it easy to track time, invoice clients and get paid. They just relaunched a completely new version not long ago and have even integrated [Stripe](http://stripe.com) for online payments. _Starts free_

**Cost per month: $39.16**

So these are the apps and services I used on a daily basis to create websites. I like to reevaulate from time to time because a tool or service is only good if it’s making you work in a way where you produce better work. I’m excited to dive deeper into Sublime Text 2 and really tune it to be the workhorse that I’ve heard about.
