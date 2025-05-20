+++
title = "GPU Accelerated Transitions with Layers"
date = 2025-05-20
draft = true

[taxonomies]
tags = ["GPU", "Graphics", "Layers", "Transitions"]
+++

Previously [I wrote about](/using-steps-for-performant-css-transitions/) leveraging `steps()` in CSS animations to enhance SVG transitions performance by essentially "lowering the framerate" of the transition. This worked well, but ultimately it wasn't enough. In order to get silky smooth fading between two complex SVGs, here's what you need to do.
