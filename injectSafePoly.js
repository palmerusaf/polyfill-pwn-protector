let el = document.querySelector("script[src*='polyfill.io']");
el.src = el.src.replace(/.*\.io/, "https://cdnjs.cloudflare.com/polyfill");
