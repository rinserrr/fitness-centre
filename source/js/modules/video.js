const videoBlocks = document.querySelectorAll('[data-video-block]');

const createIframe = (block) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', block.dataset.src);

  return iframe;
};

const initVideos = () => {
  if (videoBlocks && videoBlocks.length) {
    videoBlocks.forEach((block) => {
      const videoCover = block.querySelector('[data-video-cover]');
      const videoButton = block.querySelector('[data-video-button]');
      const iframeBlock = block.querySelector('[data-video-container]');

      videoButton.addEventListener('click', () => {
        const newIframe = createIframe(iframeBlock);
        iframeBlock.append(newIframe);
        videoCover.classList.add('hidden');
      });
    });
  }
};


export {initVideos};
