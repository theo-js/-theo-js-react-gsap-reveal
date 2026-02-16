# react-gsap-reveal

A **lightweight React wrapper for GSAP animations** with IntersectionObserver support.  
Easily animate elements (or their children) when they enter or leave the viewport, with full GSAP flexibility.

---

## Features

- Animate elements **on enter and leave viewport** with GSAP
- Supports **staggered animations** on multiple children
- Lightweight and dependency-free except for GSAP
- Flexible: **polymorphic wrapper** with customizable HTML tag (`as` prop)
- Efficient: a single global IntersectionObserver handles all reveal elements, minimizing overhead.
- Optional **one-time or repeatable animations**
- Fully typed with TypeScript

---

## Installation

```bash
npm install gsap react-gsap-reveal
# or
yarn add gsap react-gsap-reveal
```
