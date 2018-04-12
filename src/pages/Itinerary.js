import React from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Image from '../components/Image';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Copy from '../components/Copy';
import { preloadJPG } from '../helpers/preload';

const IMAGE = 'dinatale';
preloadJPG(IMAGE);

export default function Itinerary() {
  return (
    <Layout title="Itinerary" theme={{colorScheme: 'dark', image: IMAGE, height: 1100, speed: 6}} noPadding={true}>
      <Content>
        <Heading>
          Itinerary
          <br />
        </Heading>
      </Content>
      <Image para={true} theme="dark" src="http://cdnfiles.hdrcreme.com/20972/original/Seattle.jpg" alt="Seattle">
        <Content>
          <SubHeading>
            September 13<sup>th</sup>
          </SubHeading>
          <Copy>
            Leave Seattle for Roma
          </Copy>
        </Content>
      </Image>
      <Image para={true} offset={50} src="https://www.dentons.com/-/media/images/website/background-images/offices/rome/rome_1900x1500.jpg" alt="Rome">
        <Content>
          <SubHeading>
            September 14<sup>th</sup>
          </SubHeading>
          <Copy>
            Arrive in Rome
          </Copy>
        </Content>
      </Image>
      <Image para={true} offset={100} theme="dark" src="http://static5.businessinsider.com/image/55d4e8a09dd7cc21008b4626/these-pictures-will-make-you-want-to-visit-pompeii-which-was-covered-under-a-layer-of-volcanic-ash-thousands-of-years-ago.jpg" alt="Salerno">
        <Content>
          <SubHeading>
            September 18<sup>th</sup>
          </SubHeading>
          <Copy>
            Depart Rome for Pompei on 7 am train, transfer in Naples. Train from Pompei to Salerno at 2 pm, on 3:30 ferry to Positano.
            (approximately 5 hours in Pompei)
          </Copy>
        </Content>
      </Image>
      <Image para={true} offset={200} src="http://www.citalia.com/medias/sys_master/h4e/h7f/8987556413470.jpg" alt="Capri">
        <Content>
          <SubHeading>
            September 19<sup>th</sup>
          </SubHeading>
          <Copy>
            Capri day! By ferry or private boat
          </Copy>
        </Content>
      </Image>
      <Image para={true} theme="dark" offset={300} img="furore_fjord" alt="Fjordo Furore">
        <Content>
          <SubHeading>
            September 20<sup>th</sup>
          </SubHeading>
          <Copy>
            Bus to Fjordo Furore beach in the morning. Pool party at Villa Oliviero at 3 pm.
          </Copy>
        </Content>
      </Image>
      <Image para={true} speed={20} offset={200} img="dinatale" alt="Positano">
        <Content>
          <SubHeading>
            September 21<sup>st</sup>
          </SubHeading>
          <Copy>
            Hike of the Gods in the morning (11 km, incredible views!), wedding at 5 pm.
          </Copy>
        </Content>
      </Image>
      <Image para={true} offset={1400} img="amalfi" alt="Amalfi Coast">
        <Content>
          <SubHeading>
            September 22<sup>nd</sup>
          </SubHeading>
          <Copy>
            Depart Positano via ferry in the afternoon.
          </Copy>
        </Content>
      </Image>
    </Layout>
  );
};
