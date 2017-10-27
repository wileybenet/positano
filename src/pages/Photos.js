import React from 'react';
import Layout from '../components/Layout';
import { preloadJPG } from '../helpers/preload';

const IMAGE = 'stairs';
preloadJPG(IMAGE);

export default function Photos() {
  return (
    <Layout theme={{colorScheme: 'dark', image: IMAGE, height: 2500, speed: 1.25}}>
      Photos
    </Layout>
  );
};
