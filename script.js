const backToTop = document.getElementById('backToTop');

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Insere o player do YouTube dentro da própria página ao clicar na prévia.
const videoStart = document.getElementById('videoStart');
const videoFrame = document.getElementById('videoFrame');
videoStart?.addEventListener('click', () => {
  if (!videoFrame || videoFrame.querySelector('iframe')) return;
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube-nocookie.com/embed/uP3rsLqdxUs?autoplay=1&rel=0&playsinline=1';
  iframe.title = 'Apresentação do curso';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.allowFullscreen = true;
  iframe.style.position = 'absolute';
  iframe.style.inset = '0';
  videoFrame.replaceChildren(iframe);
});
