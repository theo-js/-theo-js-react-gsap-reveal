# @theo-js/react-gsap-reveal

> A lightweight, type-safe React library for scroll-triggered GSAP animations — built for modern React (App Router, RSC, SSR-safe).

---

## Demo

[Demo project](https://theo-js.github.io/-theo-js-react-gsap-reveal)

---

## ✨ Features

- ✅ Scroll-based reveal animations powered by `IntersectionObserver`
- ✅ Built-in animation presets
- ✅ Custom animation support via `createRevealSystem`
- ✅ Fully type-safe animation names (default + custom inferred)
- ✅ Optional defaults provider (animation, repeat, GSAP options)
- ✅ Stagger support
- ✅ Repeat on re-entry
- ✅ Polymorphic `as` prop for semantic markup
- ✅ SSR-safe (Next.js compatible)
- ✅ Singleton `IntersectionObserver` for optimal performance

---

# 📦 Installation

```bash
npm install @theo-js/react-gsap-reveal gsap
```

or

```bash
pnpm add @theo-js/react-gsap-reveal gsap
```

---

# 🚀 Quick Start

## 1️⃣ (Optional) Configure the IntersectionObserver

By default, the library creates a **singleton `IntersectionObserver`** with sensible defaults.

You only need to use `RevealObserverSetup` if you want to override the default observer options.

```tsx
import { RevealObserverSetup } from "@theo-js/react-gsap-reveal";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <RevealObserverSetup threshold={1} rootMargin="0px" />
        {children}
      </body>
    </html>
  );
}
```

### ⚠️ Important

- The observer is a **singleton**, created once on first use.
- Changing props of `RevealObserverSetup` after it has mounted **has no effect**.
- Mounting `RevealObserverSetup` after a `<Reveal />` has already been rendered **has no effect**.
- The observer configuration must be defined **before the first Reveal mounts**.

This design ensures maximum performance and avoids multiple observers running simultaneously.

If you don’t need custom observer options, you can safely omit this component.

---

## 2️⃣ Use the default Reveal component

```tsx
"use client";

import { createRevealSystem } from "@theo-js/react-gsap-reveal";

export const { Reveal } = createRevealSystem();

export default function Example() {
  return (
    <Reveal>
      <div>Hello world</div>
    </Reveal>
  );
}
```

---

# 🎬 Built-in Animations

By default, the library includes:

- `fadeUp`
- `fadeIn`
- `slideLeft`
- `slideRight`
- `scaleIn`

Usage:

```tsx
<Reveal animation="slideLeft">
  <div>Slide from left</div>
</Reveal>
```

All animation names are fully type-safe.

---

# ⚙️ Props API

## `<Reveal />`

| Prop         | Type                                            | Default    | Description                                                   |
| ------------ | ----------------------------------------------- | ---------- | ------------------------------------------------------------- |
| `animation`  | `AnimationName`                                 | `"fadeUp"` | Animation preset to use                                       |
| `repeat`     | `boolean`                                       | `false`    | Re-run animation when re-entering viewport                    |
| `options`    | `GSAPTweenVars`                                 | —          | GSAP animation options (duration, delay, ease, stagger, etc.) |
| `as`         | `ElementType`                                   | `"span"`   | Wrapper element                                               |
| `childAs`    | `ElementType`                                   | `"span"`   | Child wrapper element                                         |
| `childProps` | `ComponentProps` or `(index) => ComponentProps` | —          | Props applied to each child                                   |

---

# 🎞 Stagger Example

```tsx
<Reveal options={{ stagger: 0.3 }} as="ul" childAs="li">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Reveal>
```

---

# 🔁 Repeat Animation

```tsx
<Reveal repeat>
  <div>Repeat me</div>
</Reveal>
```

The reveal will be retriggered everytime it enters the viewport.

### ⚠️ Important

When using repeat with custom animations, make sure to reset the revealed element by implementing the `onLeave` property in your animation definition.

---

# 🧩 Custom Animations (Factory API)

To add custom animations, use `createRevealSystem`.

```tsx
"use client";

import { createRevealSystem } from "@theo-js/react-gsap-reveal";
import gsap from "gsap";

export const { Reveal: CustomReveal, RevealDefaultsProvider } =
  createRevealSystem({
    customAnimations: {
      rotateIn: {
        fromStyles: {
          opacity: 0,
          transform: "rotate(-90deg) scale(0.8)",
        },
        onEnter: ({ elements, options }) => {
          gsap.to(elements, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            ...options,
          });
        },
        onLeave: ({ elements, options }) => {
          gsap.to(elements, {
            opacity: 0,
            scale: 0.8,
            rotation: -90,
            ...options,
          });
        },
      },
    },
  });
```

Now fully typed:

```tsx
<CustomReveal animation="rotateIn" />
```

TypeScript automatically includes:

```
"fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn" | "rotateIn"
```

No `.d.ts` augmentation required.

---

# 🎛 Global Defaults (Optional Provider)

You can define default animation settings via `RevealDefaultsProvider`.

```tsx
<RevealDefaultsProvider animation="rotateIn" options={{ duration: 2 }}>
  <CustomReveal>
    <div>Uses rotateIn (2s)</div>
  </CustomReveal>

  <CustomReveal options={{ duration: 6 }}>
    <div>Overrides to 6s</div>
  </CustomReveal>
</RevealDefaultsProvider>
```

### Priority order

1. Instance props
2. Defaults provider
3. Library defaults

---

# 🧠 How It Works

- A single `IntersectionObserver` instance tracks all reveal elements.
- This avoids unnecessary observers and improves performance.
- Initial styles (`fromStyles`) are applied before entering the viewport.
- `onEnter` triggers the GSAP animation.
- Optional `onLeave` runs when exiting.
- Repeat logic is handled internally.

---

# 🧪 Next.js Support

Fully compatible with:

- App Router
- Server Components
- Client Components
- SSR

Only animation components run client-side.

`RevealObserverSetup` is optional and only required if you need custom observer configuration.

---

# 🧩 Architecture

The library is built around:

- `createRevealSystem()` → animation system factory
- `Reveal` → scroll-triggered animation component
- `RevealDefaultsProvider` → optional runtime defaults
- `RevealObserverSetup` → optional singleton observer configuration
- `InView` → polymorphic component that detects when its children enter or leave the viewport

This ensures:

- No unnecessary observers
- Fully isolated animation systems
- Predictable behavior
- Clean TypeScript inference
- Minimal abstraction over GSAP

---

# 🎯 Philosophy

This library focuses on:

- Simplicity
- Type safety
- Modern React patterns
- Performance via a singleton observer
- Predictable scroll-based animations

It does **not** aim to replace GSAP ScrollTrigger — it provides a lighter alternative when full timeline orchestration is not required.

---

# 📄 License

ISC
