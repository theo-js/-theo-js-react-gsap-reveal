type InViewCallback = (elements: HTMLElement[]) => void;

type Config = {
  repeat?: boolean;
  callbacks: {
    onEnter: InViewCallback;
    onLeave?: InViewCallback;
  };
};

// Map to track all observed elements
const elements = new Map<Element, Config>();

let observer: IntersectionObserver | null = null;

/** Return Intersection observer singleton. Creates it if necessary. */
function getObserver(): IntersectionObserver | null {
  if (observer) return observer;
  if (typeof window === "undefined") return null; // SSR-safe

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        const config = elements.get(target);
        if (!config) return;

        // Call the callback with the target element(s)
        if (config.callbacks.onEnter && isIntersecting)
          config.callbacks.onEnter([target as HTMLElement]);

        if (config.callbacks.onLeave && !isIntersecting)
          config.callbacks.onLeave([target as HTMLElement]);

        // Stop observing if `repeat` is false
        if (!config.repeat && isIntersecting) {
          observer?.unobserve(target);
          elements.delete(target);
        }
      });
    },
    { threshold: 0.2 },
  );

  return observer;
}

/** Register an element to be observed */
export function register(element: Element, config: Config) {
  elements.set(element, config);
  const obs = getObserver();
  if (obs) obs.observe(element);
}

/** Unregister an element from observation */
export function unregister(element: Element) {
  elements.delete(element);
  observer?.unobserve(element);
}
