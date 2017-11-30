import React from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Heading from '../components/Heading';
import Copy from '../components/Copy';
import Image from '../components/Image';
import { preloadJPG } from '../helpers/preload';

const IMAGE = 'capri_rock';

preloadJPG(IMAGE);

export default function Wedding() {
  return (
    <Layout title="Wedding" theme={{colorScheme: 'dark', image: IMAGE, height: 1100, speed: 6}}>
      <Content>
        <Heading>
          Venue
        </Heading>
        <Copy>
          Our wedding will be held at the Villa Oliviero on September 21st 2018. This villa is where
          we will be staying, with our wedding party, while we are in Positano. The Villa has a steam
          room, a hot tub, and a pool and you can bet your ass that we are jumping in come
          wedding night.
        </Copy>
        <Image src="http://www.villaoliviero.it/images/slide3.jpg" alt="Villa Oliviero" />
        <Copy>
          The Villa will be our meeting place and hangout for the five days we are in Positano, and
          our door is open to you the whole time. The wedding will take place at 5 pm, we will have
          a very casual Italian dinner afterwards, with lots of drinks and fun.
        </Copy>
      </Content>
    </Layout>
  );
};
