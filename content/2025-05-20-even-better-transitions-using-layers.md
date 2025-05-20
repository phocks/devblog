+++
title = "Offloading SVG transitions to the GPU using layers"
date = 2025-05-20
draft = true

[taxonomies]
tags = ["GPU", "Graphics", "Layers", "Transitions"]
+++

Previously [I wrote about](/using-steps-for-performant-css-transitions/) leveraging `steps()` in CSS animations to enhance SVG transitions performance by essentially "lowering the framerate" of the transition. This worked well, but ultimately it wasn't enough. In order to get the silky smooth fading between two complex SVGs, I needed to make sure work was being offloaded to the GPU.

In modern browsers (although some `filter` properties are now supported) basically only `opacity` and `transform` are GPU accelerated. So we can transition between multiple layers by using `opacity`.

Here's the basic idea. First we have two SVGs.

```html
<div class="svg-fader-container">
  <!-- Bottom SVG Layer -->
  <svg
    class="svg-layer bottom"
    width="300"
    height="300"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="circle-pattern-bottom"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="10" cy="10" r="8" fill="mediumseagreen" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#circle-pattern-bottom)" />
  </svg>

  <!-- Top SVG Layer -->
  <svg
    class="svg-layer top"
    width="300"
    height="300"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="circle-pattern-top"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="10" cy="10" r="8" fill="darkorange" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#circle-pattern-top)" />
  </svg>
</div>
```

Then we apply the CSS to layer the SVGs on top of each other and animate the top layer's opacity.

```css
.svg-fader-container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid #eee;
}

.svg-layer {
  position: absolute;
  top: 0;
  left: 0;
}

.svg-layer.bottom {
  z-index: 1;
}

.svg-layer.top {
  z-index: 2;
  animation: fade-top-svg 4s infinite alternate ease-in-out;
}

@keyframes fade-top-svg {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```

And there you have it! A GPU accelerated transition between two SVGs. Here's [a live version](https://svelte.dev/playground/453283d49c1343179dd343ec45f83743?version=5.31.1).

You could even use [`steps()`](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/steps) to reduce the frequency of opacity changes. Or else tie the opacity to scroll position or mouse position to create a more interactive experience.

For additional reading check out this excellent article from Smashing Magazine called [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)

Anyway that's it. Have fun!

*ps. if your SVGs are really huge and complex (like mine were), you can even dynamically render them to a canvas element first at the correct DPI, but that's a subject for another time.*
