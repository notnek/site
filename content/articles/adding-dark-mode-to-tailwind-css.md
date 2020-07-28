---
title: Adding dark mode to Tailwind CSS
description: Follow this simple guide to add dark mode to your Tailwind CSS configuration.
createdAt: 07/15/2020
---
[Tailwind CSS](https://tailwindcss.com) is a great new utility-first framework that is quickly growing in popularity. I’ve become a huge fan of it since I can focus on writing CSS without switching contexts or worrying about [naming classes](https://www.martinfowler.com/bliki/TwoHardThings.html). It comes with a ton of functionality out-of-the-box including responsive  support via modifiers like `md` and `lg`. As dark- and light-modes are becoming more popular, there’s a push for supporting both on your site. This is easy to accomplish with the `prefers-color-scheme: dark` media query. This is very easy to add to Tailwind CSS and be able to utilize like their other responsive modifiers. Here’s how:

Open up your `tailwind.config.js` . If you don’t have a config file yet, you can create one following [Tailwind CSS’s configuration guide](https://tailwindcss.com/docs/configuration/).

We don’t want to lose the predefined media queries, so let’s `extend` a `screens` property to add our dark mode media query:

```js[tailwind.config.js]
module.exports = {
  theme: {
    extend: {
      screens: {
        dark: {
          raw: '(prefers-color-scheme: dark)',
        },
        // => @media (prefers-color-scheme: dark) { ... }
      },
    },
  },
};
```

Then you can add `dark:` prefix to any of your rules that support the `responsive` variant and those rules will take effect when dark mode is enabled!

```html
<div class=“text-gray-900 dark:text-gray-100”>
  <!-- ... -->
</div>
```

Now get out there and support dark mode!
