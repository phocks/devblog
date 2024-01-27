#!/usr/bin/env bash
wasm-pack build --target web
cp pkg/wasm.js pkg/wasm_bg.wasm ../static/pkg/
