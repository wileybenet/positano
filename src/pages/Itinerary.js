import React from 'react';
import Layout from '../components/Layout';
import { preloadJPG } from '../helpers/preload';

const IMAGE = 'ocean';
preloadJPG(IMAGE);

export default function Itinerary() {
  return (
    <Layout title="Itinerary" theme={{colorScheme: 'dark', image: IMAGE, height: 1100, speed: 6}}>
      Itinerary
    </Layout>
  );
};
