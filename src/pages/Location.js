import React from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Heading from '../components/Heading';
import Copy from '../components/Copy';
// import Image from '../components/Image';
import { preloadJPG } from '../helpers/preload';

const IMAGE = 'beach_view';
preloadJPG(IMAGE);

export default function Location() {
  return (
    <Layout title="Location" theme={{colorScheme: 'dark', image: IMAGE, height: 2500, speed: 1.5}}>
      <Content>
        <Heading>
          Travel
        </Heading>
        <Copy>
          From what we have read, riding in a bus anywhere on the Amalfi coast is a stomach-turning, and frightening experience. The coast is full of twists and turns, on very steep cliffs, and is not recommended for those with motion sickness. For this reason (and also for Pompeii) we recommend taking a train from wherever you are arriving, to Salerno, where you can catch a direct ferry to Positano. Naples is the closest city, but if you plan on doing some exploring before or after, Italy has an extensive train system which makes it easy to get to Naples.
        </Copy>
        <Copy>
          Renting a car is another option, although Positano has almost no streets accessible to cars. All the streets are for pedestrians. And anywhere you choose to explore along the coast is accessed easier by ferry or taxi boat than by car.
        </Copy>
        <Heading>
          Things to Do
        </Heading>
        <Copy>
          Positano is a quaint little fishing village, with lots to do and explore either in
          Positano or the nearby villages. A few suggestions are listed below:
        </Copy>
        <ul>
          <li>
            <Copy>
              Hiking the walk of the gods. The walk of the gods is a beautiful trail that runs along the hills of the Amalfi coasts, and zigzags through hidden orchards and tiny towns. A hike to Ravello is long, but highly recommended.
            </Copy>
          </li>
          <li>
            <Copy>
              Day trip to the island of Capri. Capri is a quick 30 minute ferry ride from Positano. Capri has beautiful beaches, lots of high end shopping and a lift ride to the top of the island with incredible views. Capri is known for being posh and expensive, and is a popular getaway for celebrities.
            </Copy>
          </li>
          <li>
            <Copy>
              Amalfi, Atrani, Sorrento, and beaches galore. The best way to get around the Amalfi coast is by boat, and there are lots of hidden beaches, cities, and little towns that can be easily accessed by a quick boat ride. Personally, we are most excited about Atrani and fiordo di furore beach.
            </Copy>
          </li>
          <li>
            <Copy>
              Swimming. The seawater in September is still plenty warm enough to swim in, with daytime temperatures in the 70’s and low 80’s. Positano has two main beaches, marina grande which is bigger and busier, and Fornillo beach which is quieter. To get to Fornillo, you take a beautiful trek along the cliffs of Positano. A smaller beach slightly outside of the cityscape; Arienzo, which is quiet, secluded and a beautiful hike to get to.
            </Copy>
          </li>
          <li>
            {/* <Image src="https://www.besthotelsinitaly.com/wp-content/uploads/2017/03/lesirenuse-hotel-positano-1.jpg" alt="Villa Oliviero" /> */}
            <Copy>
              Drinks at Le Sirenuse. Le Sirenuse is a luxury hotel in Positano filled with original artwork and a restaurant famous for it’s food and stunning aesthetics. If you don’t want to pay the big bucks to stay there, the next best thing is a quick stop for dinner or drinks.
            </Copy>
          </li>
          <li>
            <Copy>
              Stop at Pompeii on your way to/from Positano. The easiest (and smoothest) way to get to Positano from Naples is a train to Salerno and then a ferry to Positano. Pompeii is on the train route from Naples to Salerno. Since you’re already passing through, it’s a great chance to see Pompeii. Also, there are many places in Pompeii to check your luggage while you explore.
            </Copy>
          </li>
        </ul>
      </Content>
    </Layout>
  );
};
