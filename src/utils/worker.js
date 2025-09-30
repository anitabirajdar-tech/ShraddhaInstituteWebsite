// Web Worker to handle expensive operations
self.addEventListener('message', function(e) {
  const { type, data } = e.data;
  
  if (type === 'process-images') {
    // Example of expensive operation offloaded to worker
    const processed = data.map(img => ({
      ...img,
      processed: true,
      // Any expensive processing here
    }));
    
    self.postMessage({ type: 'images-processed', data: processed });
  }
});
