export const loadCSS = (href) => {
  return new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = resolve;
    
    // Load after page load
    if (document.readyState === 'complete') {
      document.head.appendChild(link);
    } else {
      window.addEventListener('load', () => {
        document.head.appendChild(link);
      });
    }
  });
};
