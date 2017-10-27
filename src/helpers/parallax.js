export default function() {
  let last_known_scroll_position = 0;
  let ticking = false;

  function parallax(scroll_pos) {
    const image = document.getElementsByClassName('image-wrapper')[0];
    const speed = Number(image.attributes['data-speed'].value);
    if (image) {
      image.style.backgroundPositionY = `${-scroll_pos / speed - 20}px`;
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
