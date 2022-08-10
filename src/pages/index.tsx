import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import { useAuth } from "../lib/auth";
import Image from "next/image";

const Home: NextPage = () => {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>Fast Feedback</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="hero-section relative z-20 pt-12 sm:pt-28">
        <div className="container md:max-w-xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center sm:items-start lg:flex-row lg:justify-between">
            {/* hero - header container*/}
            <div className="mb-28 lg:container lg:basis-1/2">
              <div className="header-container">
                <span className="text-xs uppercase rounded-full bg-[#1f93ff] bg-opacity-10 text-[#136FDE] px-4 py-1">
                  Early Access
                </span>
                <h1 className="text-4xl sm:text-5xl sm:leading-relaxed font-semi-bold leading-snug mb-6 mt-6">
                  Simple Comment plug-in for your{" "}
                  <span className="text-[#136FDE]"> Webflow </span>sites
                </h1>
                <h3 className="text-xl leading-loose mb-6 text-[#869ab8]">
                  ReplyKit is a simple webflow plugin for enabling commenting
                  threads on your webflow site. Reserve your spot for the alpha
                  now.
                </h3>
              </div>
              <div className="button-container ">
                <button
                  className="bg-[#136FDE] shadow text-gray-100 rounded-md px-7 py-4 mr-8"
                  onClick={(e) => auth.signinWithGoogle()}
                >
                  Get started for free
                </button>
                <button className="border border-[#136FDE] shadow text-[#136FDE] bg-[#fff] rounded-md px-7 py-4">
                  Request a demo
                </button>
              </div>
            </div>
            {/* hero - image container */}
            <div className="flex flex-row justify-end">
              <div>
                <Image src="/images/chat.png" height={800} width={700} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
