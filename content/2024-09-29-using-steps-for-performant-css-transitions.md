+++
title = "Using steps() for performant CSS transitions"
date = 2024-09-29
draft = false

[taxonomies]
tags = ["JavaScript", "CSS", "Web Development"]
+++

I've used a lot of [CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) over the years. Shifting between values in a smooth fashion is pretty easy with a simple one-liner.

```css
transition: background-color 2s;
```

But what if you have a lot of transitions? What if you have too many transitions? Your browser tries to run them as fast as your monitor's refresh rate allows (60 times per second, or more). This can be pretty taxing.

Recently I ran into this problem transitioning many elements of a large SVG with a bunch of complex shapes. With all the elements transitioning all at once, the page scrolling started to stutter quite noticeably.

Here's how I solved it. Instead of a transition, I used [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations), with `steps()` to effectively "bring down the frame rate" and stop the browser from doing too much work.

```css
@keyframes color-change {
  100% {
    fill: rgb(12, 169, 210);
  }
}

.do-transition {
  animation-name: color-change;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: steps(10);
}
```

Or you can use the shorthand.

```css
.do-transition {
  animation: color-change 5s infinite steps(10);
}
```

Just add the `do-transition` class to the element you want to animate. Adjust the `animation-duration` and the `steps()` count to get a balance between smoothness and performance.

```js
const polygon = svg.querySelector("polygon");
polygon.classList.add("do-transition");
```

Here's a little demo with a simple SVG. I've kept the `steps()` low to make the effect more noticeable.

<svg id="svg-interactive-21e12855-1b41-48d1-97c3-24a4f5f751c4" xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240' patternUnits="userSpaceOnUse">
  <defs>
    <pattern id="smallGrid" width="120" height="120" patternUnits="userSpaceOnUse">
      <rect fill='#ddffaa' width='120' height='120'/>
      <polygon fill='#AE9' fill-opacity='1' points='120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120'/>
    </pattern>
  </defs>
  <rect width="240" height="240" fill="url(#smallGrid)" />
</svg>

<script>
  const svg = document.getElementById('svg-interactive-21e12855-1b41-48d1-97c3-24a4f5f751c4');

  const polygon = svg.querySelector('polygon');
  polygon.classList.add('do-transition');
  
  const rect = svg.querySelector('rect');
  rect.classList.add('do-transition');
</script>

<style>
  @keyframes color-change {
    100% { fill: rgb(12, 169, 210); }
  }

  .do-transition {
    animation-name: color-change;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(10);
  }
</style>

That's the basic idea anyway. I hope it helps if you run into a similar problem.

(Bonus tip: Use `animation-delay` to stagger the animations if you have a lot of elements transitioning at once so they don't all paint on the screen at once on each `step()`)

Happy coding! 🚀
