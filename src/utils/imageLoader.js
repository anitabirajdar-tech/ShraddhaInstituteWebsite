export const optimizedImageLoad = (images, callback) => {
  // Create a new worker
  const worker = new Worker('/worker.js');
  
  // Listen for messages from the worker
  worker.addEventListener('message', function(e) {
    if (e.data.type === 'images-processed') {
      callback(e.data.data);
      worker.terminate(); // Clean up worker when done
    }
  });
  
  // Send data to worker
  worker.postMessage({ type: 'process-images', data: images });
};

// Priority image loading with IntersectionObserver
export const lazyLoadImages = (imageElements) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px 0px' });
    
    imageElements.forEach(img => observer.observe(img));
  }
};
