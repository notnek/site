---
title: Tools of the Trade
# 201210240000
---
I’ve recently reevaluated the tools and services I use to accomplish the different tasks I’m faced with on a daily basis. I thought it might be helpful to some if I listed everything I use, in both apps, configurations and web services. Let’s get started.

Apps
As part of my reevaluation, a few of my daily apps have changed or become more heavily used:

http://web.archive.org/web/20130714174917/http://sublimetext.com/2
http://web.archive.org/web/20130714174917/http://en.wikipedia.org/wiki/Terminal_(OS_X)
http://web.archive.org/web/20130714174917/http://kenton.me/#st-config
http://web.archive.org/web/20130714174917/http://kenton.me/#t-config
http://web.archive.org/web/20130714174917/http://www.adobe.com/products/photoshop.html
http://web.archive.org/web/20130714174917/http://google.com/chrome
http://web.archive.org/web/20130714174917/http://www.youtube.com/watch?v=rf1GSjo4zSY
http://web.archive.org/web/20130714174917/http://panic.com/transmit
http://web.archive.org/web/20130714174917/http://incident57.com/codekit
- Sublime Text 2 – The newest addition, I am amazed as the configuration and add-ons available. It took me a while to get on board with the initial setup, but I’m loving this app and it really is speeding up my work rate. $59 | Configuration
- Terminal – I’m spending more and more of my time in the command line because it’s simply faster moving around my files and folders and actively versioning my assets. Free | Configuration
- Photoshop CS6 – Who doesn’t, right? $699
- Google Chrome – The Web Inspector is constantly improving and in my opinion is streets ahead of Safari or Firefox. Free
- Transmit – When I need to access a server via FTP, this is my choice. Always been the best. $34
- CodeKit – A nice app that does all sorts of things: compiling, image optimizing and browser reloads to name a few. $25
- Cost: $817 (though CS6 cost me less since I work in higher education)

## Configurations
As I’m sure everyone does, I’m very particular on how my apps are setup, not only for better work production, but a more enjoyable experience while working.

### Sublime Text 2
http://web.archive.org/web/20130714174917/http://wbond.net/sublime_packages/package_control
http://web.archive.org/web/20130714174917/https://github.com/buymeasoda/soda-theme
http://web.archive.org/web/20130714174917/https://github.com/chriskempson/tomorrow-theme
http://web.archive.org/web/20130714174917/https://github.com/SublimeText/Tag
http://web.archive.org/web/20130714174917/https://github.com/dmatarazzo/Sublime-Text-2-Icon
http://web.archive.org/web/20130714174917/http://wbond.net/sublime_packages/terminal
- Package Control
- Soda Theme – Dark
- Tomorrow Color Scheme – Eighties
- Tag
- A New Icon
- Terminal
- My Settings – Admittely I haven’t customized it much since I’m still exploring all of the features:
{
	"color_scheme": "Packages/Tomorrow Color Schemes/Tomorrow-Night-Eighties.tmTheme",
	"theme": "Soda Dark.sublime-theme",
	"draw_indent_guides": false,
	"open_files_in_new_window": false
}
Terminal

http://web.archive.org/web/20130714174917/https://github.com/robbyrussell/oh-my-zsh
http://web.archive.org/web/20130714174917/https://github.com/chriskempson/tomorrow-theme
http://web.archive.org/web/20130714174917/http://mxcl.github.com/homebrew/
http://web.archive.org/web/20130714174917/http://git-scm.com/
http://web.archive.org/web/20130714174917/https://rvm.io/
Oh My Zsh
Tomorrow Theme
Homebrew
Git
RVM
My Zsh Theme:
function git_prompt_info() {
  ref=$(git symbolic-ref HEAD 2> /dev/null) || return
  echo "$(parse_git_dirty)$ZSH_THEME_GIT_PROMPT_PREFIX$(current_branch)$ZSH_THEME_GIT_PROMPT_SUFFIX"
}

PROMPT='$fg[magenta]⌘ $fg[blue]${PWD/#$HOME/~} $(git_prompt_info)'

ZSH_THEME_GIT_PROMPT_PREFIX="[git:"
ZSH_THEME_GIT_PROMPT_SUFFIX="] $reset_color"
ZSH_THEME_GIT_PROMPT_DIRTY="$fg[red]+"
ZSH_THEME_GIT_PROMPT_CLEAN="$fg[green]"
Web Services
I use a handful of web services in my daily workflow, some free and some paid:

http://web.archive.org/web/20130714174917/http://webfaction.com/?affiliate=kenton
http://web.archive.org/web/20130714174917/http://typekit.com/
http://web.archive.org/web/20130714174917/https://typekit.com/colophons/shr3foc (a few fonts)
http://web.archive.org/web/20130714174917/http://db.tt/jxnyrKO
http://web.archive.org/web/20130714174917/http://bitbucket.org/
http://web.archive.org/web/20130714174917/http://browserstack.com/
http://web.archive.org/web/20130714174917/http://getballparkapp.com/
http://web.archive.org/web/20130714174917/http://stripe.com/
WebFaction – My hosting provider of choice. My clients and my own personal projects usually don’t garner large amounts of traffic so a shared hosting environment isn’t a big deal. WebFaction allows you to host any type of site, platform or application under one account, which is really nice. As example, in one site you could run a Rails app, WordPress and a third Django app all under domain, with very simple configuration. Starts at $9.50/m
Typekit – If necessary and the desired font is available, I use Typekit to serve my fonts. This site is currently serving a few fonts. Starts free with limitations
Dropbox – I’m not sure I know anyone that doesn’t use Dropbox, but it’s vital for my daily work with clients all over the map. Starts free
Bitbucket – Yes, I know the cool kids use GitHub, and while I’m on there as well, Bitbucket hosts all of my private Git repos without cost and some public as well. Free for 5 users
BrowserStack – Gone are the days of multiple VMs on Parallels, Sign in and test in any browser you want. Starts at $19/m
Ballpark – I’m not a huge fan of the business side of life, but Ballpark makes it easy to track time, invoice clients and get paid. They just relaunched a completely new version not long ago and have even integrated Stripe for online payments. Starts free
Cost per month: $39.16
So these are the apps and services I used on a daily basis to create websites. I like to reevaulate from time to time because a tool or service is only good if it’s making you work in a way where you produce better work. I’m excited to dive deeper into Sublime Text 2 and really tune it to be the workhorse that I’ve heard about.