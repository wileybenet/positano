import React from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Heading from '../components/Heading';
import Copy from '../components/Copy';
import Image from '../components/Image';
import { preloadJPG } from '../helpers/preload';

const IMAGE = 'truck';
const IMAGE2 = 'africa';
preloadJPG(IMAGE);
preloadJPG(IMAGE2);

export default function Registry() {
  return (
    <Layout title="Registry" theme={{colorScheme: 'dark', image: IMAGE, height: 1400, speed: 5}}>
      <Content>
        <Heading>
          Doctors Without Borders
        </Heading>
        <Copy>
          Wiley and I are lucky enough to have all the material items that we could every need (and a lot more that we don’t need). Our privilege is not lost on us, and instead of asking for things that we don’t need we’re asking for something that means so much more to us. Doctors without borders is a cause we have both been passionate about for years, and we donate what we can each month.
        </Copy>
        <Image src={`/img/${IMAGE2}.jpg`} alt="African Plain" />
        <Copy>
          However, it’s never enough and with you we can do more. We do not expect anything, especially if you are making the trip to Italy for our wedding (we’re already asking a lot of you!). But if you want to get us something in lieu of coming to the wedding, we ask that you help us bring medical care to people who desperately need it. If you feel like this isn’t personal enough, or long-lasting let me assure you that thinking about the pottery barn catalog inspires absolutely no emotion in us.
        </Copy>
        <Copy>
          But when we think about turning your love and good intentions into something bigger than us, it inspires not just emotion but purpose. Each time a donation is made, MSF will send us an email with your name and the note that you write. After our wedding they will print a certificate of our “fundraiser” which we will hang on our wall as a daily reminder of the kindness and generosity of the people around us.
        </Copy>
        <a className="big-button" href="https://events.doctorswithoutborders.org/index.cfm?fuseaction=donorDrive.personalCampaign&participantID=4295">Go to our fundraising page</a>
      </Content>
    </Layout>
  );
};
