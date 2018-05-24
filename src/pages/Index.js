import React from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Heading from '../components/Heading';
import Copy from '../components/Copy';
import RSVP from '../components/RSVP';
import { preloadJPG } from '../helpers/preload';

const IMAGE = 'city_view';
preloadJPG(IMAGE);

// const submit = () => {
//   console.log('submitted');
// };

export default function Index({ match: { path } }) {
  return (
    <Layout theme={{colorScheme: 'light', image: IMAGE, height: 1000, speed: 6}}>
      <Content>
        <Heading>Ciao!</Heading>
        <Copy>
          We have decided to get married in Positano, Italy. <br />
          Why? Because we want to. Quit asking. No,
          neither of us have Italian ancestry. We’re mavericks, ok?
        </Copy>
        <Copy>
          We will be in Positano from the 18th to the 22nd of September, 2018 hosting pool parties,
          taking boat trips and getting married. We’d love it if you joined us for all five days.
        </Copy>
        <Copy>
          On this website, you’ll find information about the wedding day, places to stay and
          activities we have planned.
        </Copy>
        <Heading>RSVP</Heading>
        <Copy>
          Let us know if you're coming!
        </Copy>
        <Copy>
          <RSVP openOnLoad={path === '/rsvp'} />
        </Copy>
      </Content>
    </Layout>
  );
};
