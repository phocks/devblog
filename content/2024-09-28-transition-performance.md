+++
title = "Using steps() for performant CSS transitions"
date = 2024-09-28
draft = true

[taxonomies]
tags = ["JavaScript", "CSS", "Web Development"]
+++

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
