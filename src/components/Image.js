import React from 'react';

import './Image.css';

export default function Image({ title, theme, speed = 10, offset = 0, src, img, para = false, alt, children }) {
  if (img) {
    src = `/img/${img}.jpg`;
  }
  if (para) {
    return (
      <div className="paralax-image image-wrapper" data-speed={speed} data-offset={offset} style={{backgroundImage: `url('${src}')`}}>
        {(title || children) && <div className={`image-copy ${theme ? `image-copy-${theme}` : ''}`}>{title || children}</div>}
      </div>
    );
  }
  return <img className="copy-image" src={src} alt={alt} />;
}
