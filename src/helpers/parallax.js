export default function() {
  let last_known_scroll_position = 0;
  let ticking = false;

  function parallax(scroll_pos) {
    for (const image of document.getElementsByClassName('image-wrapper')) {
      const speed = Number(image.attributes['data-speed'].value);
      const offset = image.attributes['data-offset'] ? Number(image.attributes['data-offset'].value) : 0;
      image.style.backgroundPositionY = `${-scroll_pos / speed - 20 + offset}px`;
    }
  }

  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        parallax(last_known_scroll_position);
        ticking = false;
      });
      ticking = true;
    }
  });

}
