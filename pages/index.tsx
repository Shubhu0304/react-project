import Head from "next/head";
import { motion } from "framer-motion";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import smallCardImage from "/public/images/3643ec104098983.5f5b5ea7c10c5.png";

type HomeProps = {
  exploreData: any;
  cardData: any;
};

const Home = ({ exploreData, cardData }: HomeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-x-hidden"
    >
      <Head>
        <title>SlumberLand</title>
        <meta name="description" content="Slumber land team welcomes you" />
        <link
          rel="icon"
          href="data:image/png;base64,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"
        />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>
          {/* data from sever */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4"
          >
            {exploreData?.map((item: any) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold py-8">Live Anywhere</h2>
          <div
            className="flex space-x-3 overflow-scroll scrollbar-hide p-3
          -ml-3"
          >
            {cardData?.map((item: any) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img={smallCardImage}
          title="The Greatest Outdoors"
          description="wishlists curated by Slumberland"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;

export async function getServerSideProps() {
  const exploreData = await fetch(
    "https://hasinduperera12.github.io/Application-Programming-Interface/smallCardData.json"
  ).then((res) => res.json());

  const cardData = await fetch(
    "https://hasinduperera12.github.io/Application-Programming-Interface/mediumCarData.json"
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
