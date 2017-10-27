import React from 'react';

import './Image.css';

export default function Image({ src, alt }) {
  return <img className="copy-image" src={src} alt={alt} />;
}
