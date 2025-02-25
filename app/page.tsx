"use client";
import { useState } from "react";

// Plugins
import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Link from "next/link";

// Images
import img01 from "@/assets/images/home/home_01.jpg";
import img02 from "@/assets/images/home/home_02.jpg";
import img02B from "@/assets/images/home/home_02B.jpg";
import img03 from "@/assets/images/home/home_03.jpg";
import img04 from "@/assets/images/home/home_04.jpg";
import img05 from "@/assets/images/home/home_05.jpg";
import img06 from "@/assets/images/home/home_06.jpg";
import img07 from "@/assets/images/home/home_07.jpg";
import img08 from "@/assets/images/home/home_08.jpg";
import closeIcon from "@/assets/images/close.png";

// ------------

function Home() {
  const [openPortfolio, setOpenPortfolio] = useState<number>(0);

  /**
   * Open a popup of the item with the given number passed to the function
   *
   * @param num Pop up item number to be open
   */
  const handleOpenPopup = (num: number) => {
    setOpenPortfolio(num);
  };

  /**
   * Closed the opened items by reseting the {openPortfolio} variable to 0
   */
  const handleClosePopup = () => {
    setOpenPortfolio(0);
  };

  return (
    <>
      <main className="page-background">
        <div id="content" className="site-content">
          <div className="content-holder center-relative content-1170">
            <div id="portfolio-wrapper">
              <div className="our-grid">
                <motion.div
                  className="our-grid-item d-2x1 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <a className="item-link" onClick={() => handleOpenPopup(1)}>
                    <div className="video-wrapper">
                      <iframe
                        width="1236"
                        height="695"
                        src="https://www.youtube.com/embed/nAT8ZqZlgG8?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=nAT8ZqZlgG8"
                        title="Logo Animations by dcmagic!"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">LOGO WORK</p>
                    </div>
                  </a>
                </motion.div>
                <motion.div
                  className="our-grid-item d-1x1 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <a className="item-link" onClick={() => handleOpenPopup(2)}>
                    <div className="video-wrapper">
                      <iframe
                        width="1236"
                        height="695"
                        src="https://www.youtube.com/embed/a6CI7-_lwDo?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=a6CI7-_lwDo"
                        title="Explainer Videos"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">EXPLAINERS</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  className="our-grid-item d-1x1 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <a className="item-link" onClick={() => handleOpenPopup(4)}>
                    <div className="video-wrapper">
                      <iframe
                        width="1236"
                        height="695"
                        src="https://www.youtube.com/embed/CuvtMxrNPM4?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=CuvtMxrNPM4"
                        title="MS Roadshow"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">EVENTS</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  className="our-grid-item d-2x1 animate"
                  initial={{ opacity: 0, transform: `translateY(50px)` }}
                  whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                  viewport={{ once: true }}
                >
                  <a className="item-link" onClick={() => handleOpenPopup(3)}>
                    <div className="video-wrapper">
                      <iframe
                        width="1236"
                        height="695"
                        src="https://www.youtube.com/embed/_cSuF9DjGAQ?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=_cSuF9DjGAQ"
                        title="Videography by dcmagic!"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="portfolio-text-holder">
                      <p className="portfolio-title">3D Animation</p>
                    </div>
                  </a>
                </motion.div>

                <h1 className="entry-title-main center-align">
                  Let's Create Magic!
                </h1>
                <p className="description-main">
                  We are experts at providing premium bespoke animation and
                  graphic services that will realise your ideas. We bring
                  originality and quality to every aspect, from breathtaking
                  designs and captivating narratives with premium content.
                </p>
                <div className="button-main">
                  <a className="button-text" href="/contact">
                    CONTACT
                    <svg
                      className="feather feather-chevron-right"
                      fill="none"
                      height="24"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      viewBox="0 0 20 26"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Popups */}
      <Popup
        open={openPortfolio !== 0}
        closeOnDocumentClick
        onClose={handleClosePopup}
        modal
      >
        <div className="my-popup">
          <div
            className="close-popup-btn"
            role="button"
            onClick={handleClosePopup}
          >
            <img src={closeIcon.src} alt="close icon" />
          </div>
          {openPortfolio === 1 ? (
            <div className="popup-content">
              <h2>Logo Animations</h2>
              <p>
                Our logo animation services bring your brand identity to life.
                We create dynamic, engaging animations that capture the essence
                of your brand and make a lasting impression on your audience.
                From subtle movements to complex transitions, we design logo
                animations that tell your brand's story in seconds.
              </p>
              <p>
                Whether you need a logo animation for your website, social
                media, promotional videos, or presentations, our team delivers
                high-quality, custom animations that align with your brand
                guidelines and marketing goals.
              </p>
            </div>
          ) : openPortfolio === 2 ? (
            <div className="popup-content">
              <h2>Explainer Videos</h2>
              <p>
                Our explainer videos simplify complex ideas into engaging,
                easy-to-understand visual narratives. We combine creative
                storytelling, custom animations, and professional voiceovers to
                create compelling explainer videos that effectively communicate
                your message.
              </p>
              <p>
                Whether you're launching a new product, explaining a service, or
                educating your audience, our explainer videos help you connect
                with viewers and drive action. We handle every aspect of
                production, from scriptwriting to final delivery.
              </p>
            </div>
          ) : openPortfolio === 3 ? (
            <div className="popup-content">
              <h2>3D Animations</h2>
              <p>
                Our 3D animation services bring your ideas to life with stunning
                visuals and dynamic motion. Whether it's character animation,
                product visualization, or architectural walkthroughs, we craft
                high-quality animations that engage and inspire.
              </p>
              <p>
                We specialize in custom 3D animations tailored to your needs,
                ensuring every detail aligns with your vision. Using
                cutting-edge technology and industry-leading techniques, we
                create immersive experiences that captivate audiences and
                elevate your brand.
              </p>
            </div>
          ) : openPortfolio === 4 ? (
            <div className="popup-content">
              <h2>Event Graphics Coverage</h2>
              <p>
                Our event production services bring your vision to life with
                meticulous planning and flawless execution. From corporate
                conferences and product launches to roadshows and virtual
                events, we handle all aspects of event production, including
                staging, lighting, audio-visual solutions, and live streaming.
              </p>
              <p>
                We work closely with you to understand your objectives and
                create immersive, memorable experiences that engage your
                audience and deliver your message effectively. Our team's
                attention to detail ensures that every element of your event
                contributes to its overall success.
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Popup>
    </>
  );
}

export default Home;
