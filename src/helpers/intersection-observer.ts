export function observeElementVisibility(
  element: HTMLElement,
  callback: (isVisible: boolean) => void,
  options = { threshold: 0.1 }
): () => void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.isIntersecting);
    });
  }, options);

  observer.observe(element);

  // Return a cleanup function
  return () => observer.disconnect();
}
