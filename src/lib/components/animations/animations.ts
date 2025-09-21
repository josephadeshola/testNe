import type { ActionReturn } from 'svelte/action';

export interface FadeInOptions {
  delay?: number; // Delay in milliseconds
  duration?: number; // Animation duration in milliseconds
  offset?: number; // Offset distance in pixels
  threshold?: number; // Intersection observer threshold (0 to 1)
  direction?: 'in' | 'up' | 'down' | 'left' | 'right'; // Animation direction
}

export function fadeIn(
  node: HTMLElement,
  options: FadeInOptions = {}
): ActionReturn<FadeInOptions> {
  // Default configuration
  const config: Required<FadeInOptions> = {
    delay: options.delay ?? 0,
    duration: options.duration ?? 600,
    offset: options.offset ?? 40,
    threshold: options.threshold ?? 0.25,
    direction: options.direction ?? 'up',
  };

  // Direction mappings for transform
  const directionMap: Record<string, { x: number; y: number }> = {
    in: { y: 0, x: 0 }, // <- new
    up: { x: 0, y: -config.offset },
    down: { x: 0, y: config.offset },
    left: { x: -config.offset, y: 0 },
    right: { x: config.offset, y: 0 },
  };

  // Get transform coordinates
  const { x, y } = directionMap[config.direction];

  // Initialize element styles
  node.style.opacity = '0';
  node.style.transform = `translate(${x}px, ${y}px)`;
  node.style.transition = `opacity ${config.duration}ms ease-out, transform ${config.duration}ms ease-out`;

  // Create IntersectionObserver
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          node.style.opacity = '1';
          node.style.transform = 'translate(0, 0)';
          observer.disconnect();
        }, config.delay);
      }
    },
    { threshold: config.threshold }
  );

  // Start observing
  observer.observe(node);

  return {
    update(newOptions: FadeInOptions) {
      // Update config with new options
      Object.assign(config, {
        delay: newOptions.delay ?? config.delay,
        duration: newOptions.duration ?? config.duration,
        offset: newOptions.offset ?? config.offset,
        threshold: newOptions.threshold ?? config.threshold,
        direction: newOptions.direction ?? config.direction,
      });

      // Update transform based on new direction
      const { x: newX, y: newY } = directionMap[config.direction];
      node.style.transform = `translate(${newX}px, ${newY}px)`;
      node.style.transition = `opacity ${config.duration}ms ease-out, transform ${config.duration}ms ease-out`;
    },
    destroy() {
      observer.disconnect();
    },
  };
}

/**
 * Parallax scroll effect action
 * @param node - The target HTML element
 * @param options - Configuration options for parallax effect
 * @returns Svelte action return object
 */
export function parallax(
  node: HTMLElement,
  {
    speed = 0.05,
    container, // eg: '.my-section' or '#hero'
  }: { speed?: number; container?: string } = {}
): ActionReturn<{ speed?: number; container?: string }> {
  let parent: Element | Window = window;

  // resolve container
  if (container) {
    const el = document.querySelector(container);
    if (el) parent = el;
  }

  const isWindow = parent === window;
  const getScrollTop = () => (isWindow ? window.scrollY : (parent as Element).scrollTop);

  const getOffset = () => {
    const rect = node.getBoundingClientRect();
    const parentRect = isWindow
      ? { top: 0, height: window.innerHeight }
      : (parent as Element).getBoundingClientRect();

    // progress inside container: 0 at top, 1 at bottom
    const start = parentRect.top;
    const end = parentRect.top + parentRect.height;
    const progress = Math.max(0, Math.min(1, (rect.top - start) / (end - start)));
    return progress;
  };

  const handler = () => {
    const offsetY = getScrollTop() * speed;
    node.style.transform = `translate3d(0, ${offsetY}px, 0)`;
  };

  parent.addEventListener('scroll', handler, { passive: true });
  handler(); // initial call

  return {
    update({ speed: newSpeed, container: newContainer }) {
      speed = newSpeed ?? speed;
      if (newContainer !== container) {
        // re-attach if container changes
        parent.removeEventListener('scroll', handler);
        parent = newContainer ? (document.querySelector(newContainer) ?? window) : window;
        parent.addEventListener('scroll', handler, { passive: true });
        handler();
      }
    },
    destroy() {
      parent.removeEventListener('scroll', handler);
    },
  };
}
