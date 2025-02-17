document.querySelectorAll('.progress-bar').forEach(bar => {
    const width = bar.getAttribute('data-progress'); // Example: data-progress="80%"
    bar.style.width = width;
  });
