+++
title = "Using steps() for performant CSS transitions"
date = 2024-09-28
draft = true

[taxonomies]
tags = ["JavaScript", "CSS", "Web Development"]
+++

I've use a lot of CSS transitions over the years. Shifting between values smoothly is pretty easy with a simple one-liner.

```css
transition: background-color 2s;
```

But what if you have a LOT of transitions that you want to run simultaneously? Even though CSS transitions are often offloaded to the GPU, they can still cause your browser to lag if you have too many of them running at once.

Each transition tries to run as smoothly as possible up to your monitor's refresh rate.

Recently I ran into this problem transitioning elements of a large SVG. With all the elements transitioning all at once, you could really feel the scrolling starting to stutter.

Here's how I solved it. Instead of a transition, I used a CSS animation, with `steps()` to effectively "bring down the frame rate" and stop the browser from doing too much work.

```css
@keyframes color-change {
  100% { fill: rgb(12, 169, 210); }
}

.do-transition {
  animation-name: color-change;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: steps(10);
}
```
Here's a little demo.

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
