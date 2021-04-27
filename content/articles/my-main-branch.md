---
title: My main branch
description: I'm replacing master with main in my git repos.
createdAt: 2020/07/28
---
Over the last few months, the web community has been vying to move away from "master/slave" terminology. I (as well as many others) have started addressing this in my own work been replacing `master` branches with `main`, including [this site](https://github.com/notnek/site). You can also do this easily with the following two commands:

```bash
git branch -m master main
git push -u origin main
```

This will keep all of your history, but under a `main` branch. Tools like [GitHub](https://docs.github.com/en/github/administering-a-repository/changing-the-default-branch) can automatically make `main` your default branch as well.

## Setting main as your initial branch
On July 27, 2020, version [2.28.0 of Git was released](https://lore.kernel.org/git/xmqq5za8hpir.fsf@gitster.c.googlers.com/) with a new configuration option named `init.defaultBranch` that allows you to set your initial branch instead of it being hardset to `master`. You can set this configuration with the following line:

```bash
git config --global init.defaultBranch main
```

Now any time you run `git init`, the repo will be instantiated with a `main` branch.
