const smoothingFns = {
	easeInQuad(x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad(x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad(x, t, b, c, d) {
    t /= d / 2;
		if (t < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic(x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic(x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic(x, t, b, c, d) {
    t /= d / 2;
		if (t < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	}
};

export default function animate({time, distance, smoothing = 'easeOutQuad'}, callback) {
  const start = Date.now();
  function step() {
    const now = Date.now();
    if (start + time > now) {
      const progress = smoothingFns[smoothing](null, now - start, 0, distance, time);
      callback(progress);
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
