"use client"; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { PiCertificateBold } from "react-icons/pi";
import { FaPeopleLine, FaSquarePhone } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdCheckCircle } from 'react-icons/md';
import styles from "./About.module.scss";
import ScrollToTop from '@/app/component/ScrollToTop/page';

const About = () => {
  const cards = [
    { img: '/image/imgslide1.png', name: 'Elisa Peter', detail: 'Web Designer' },
    { img: '/image/imgslide2.png', name: 'Andrus', detail: 'Software Engineer' },
    { img: '/image/imgslide3.png', name: 'Elson Peter', detail: 'Web Designer' },
    { img: '/image/imgslide4.png', name: 'Lisa David', detail: 'Java Trainer' },
    { img: '/image/imgslide1.png', name: 'Elisa Peter', detail: 'Web Designer' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4); // default to 4

  
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 600) return 1;
      if (window.innerWidth < 1024) return 2;
      return 4;
    }
    return 4; // fallback for server-side rendering
  };
  const handleResize = () => {
    const newCardsPerView = getCardsPerView();
    setCardsPerView(newCardsPerView);

    // Reset currentIndex if it exceeds the new limit
    if (currentIndex >= cards.length - newCardsPerView) {
      setCurrentIndex(cards.length - newCardsPerView);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex < cards.length - cardsPerView) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
    <div className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}>
          <Image 
            src="/image/about.png" 
            alt="about image" 
            width={500} 
            height={500} 
          />
        </div>

        <div className={styles.aboutContent}>
          <h3>We Are <span>Increasing Business</span> Success with IT Courses</h3>
          <p className={styles.padding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. 
            Adipiscing elit sed do eiusmod tempor consectetur adipiscing elit, sed incididunt ut labore et dolore.
          </p>

          <div className={styles.aboutDetails}>
            <div className={styles.aboutCompany}>
              <div className={styles.icon}>
                <PiCertificateBold />
              </div>
              <div className={styles.info}>
                <h4>Certified Company</h4>
                <p>Best Provide Skill Services</p>
              </div>
            </div>

            <div className={styles.aboutTeam}>
              <div className={styles.icon}>
                <FaPeopleLine />
              </div>
              <div className={styles.info}>
                <h4>Expert Team</h4>
                <p>100% Expert Team</p>
              </div>
            </div>
          </div>

          <div className={styles.aboutDetails}>
            <div className={styles.aboutBtn}>
              <button>
                Explore More
                <IoIosArrowForward style={{ marginLeft: '8px' }} />
              </button>
            </div>

            <div className={styles.aboutContact}>
              <div className={styles.icon}>
                <FaSquarePhone />
              </div>
              <div className={styles.info}>
                <h4>Call Us On:</h4>
                <p>+91 12345 67890</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutDetailContainer}>
        <div className={styles.platformContainer}>
          <h3>Welcome to Education Platform</h3>
          <p>At Education Platform, we are on a mission to empower individuals with the knowledge and skills needed to thrive in the ever-evolving world of technology. 
            Established with a passion for innovation and a commitment to excellence, 
            we strive to be a beacon of learning, where aspiring tech professionals find the guidance and resources to turn their dreams into reality.
          </p>
        </div>

        <div className={styles.missionVisionContainer}>
          <div className={styles.mission}>
            <h3>Our Mission</h3>
            <p>To provide accessible, high-quality educational content and resources to learners of all ages, 
              empowering them to reach their full potential through personalized, interactive, and engaging learning experiences.
            </p>
          </div>

          <div className={styles.vision}>
            <h3>Our Vision</h3>
            <p>To become a global leader in online education by fostering a culture of continuous learning, innovation, and inclusion, 
              ensuring that knowledge is accessible to everyone, everywhere, transforming lives through education.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.approachContainer}>
        <div className={styles.approachImg}>
          <img 
            src="/image/about2.png" 
            alt="about image" 
          />
        </div>
        <div className={styles.approachDetails}>
          <h3>Our <span>Approach</span> and How We <span>Function</span></h3>
          <p>At Educational Platform, our approach is centered on delivering high-quality, accessible, 
            and personalized education to learners around the world. We blend technology, pedagogy, and design to create an ecosystem where learners, educators, and institutions thrive.
          </p>
        </div>
      </div>

      <div className={styles.functionContainer}>
        <div className={styles.functionContents}>
          <div className={styles.functionDetails}>
            <h3>Learner-Centric:</h3>
            <p>Personalized learning paths driven by AI and data to enhance engagement and help learners succeed.</p>
          </div>
          <div className={styles.functionDetails}>
            <h3>Accessible:</h3>
            <p>Inclusive design with mobile access, screen readers, and multilingual support to ensure education for all.</p>
          </div>
          <div className={styles.functionDetails}>
            <h3>Collaborative:</h3>
            <p>Interactive tools and real-time feedback foster community and teamwork.</p>
          </div>
          <div className={styles.functionDetails}>
            <h3>Engaging Content:</h3>
            <p>Dynamic multimedia, quizzes, and gamification make learning fun and inspiring.</p>
          </div>
        </div>
        <div className={styles.functionImg}>
          <img
            src="/image/about3.png" 
            alt="about image" 
          />
        </div>
      </div>

      <div className={styles.capabilityContainer}>
        <h2>Our Core Platform <span>Capabilities</span></h2>
        <div className={styles.capabilityContent}>
          <div className={styles.tickIcon}>
            <MdCheckCircle />
          </div>
          <div className={styles.capabilityDetails}>
            <h3>Cloud-Based Infrastructure:</h3>
            <p>Our platform is cloud-hosted, ensuring security, scalability, and reliability for millions of learners.</p>
          </div>
          <div className={styles.tickIcon}>
            <MdCheckCircle />
          </div>
          <div className={styles.capabilityDetails}>
            <h3>Advanced LMS</h3>
            <p>Our LMS manages user registration, course progress, and certification, providing a smooth experience for learners and educators.</p>
          </div>
        </div>

        <div className={styles.capabilityContent}>
          <div className={styles.tickIcon}>
            <MdCheckCircle />
          </div>
          <div className={styles.capabilityDetails}>
            <h3>Educator Support</h3>
            <p>Tools and dashboards empower educators to easily create and manage courses while we handle the tech.</p>
          </div>
          <div className={styles.tickIcon}>
            <MdCheckCircle />
          </div>
          <div className={styles.capabilityDetails}>
            <h3>24/7 Support</h3>
            <p>Our team offers round-the-clock assistance for both learners and educators.</p>
          </div>
        </div>
      </div>

      <div className={styles.teamContainer}>
        <h2>See Our Skilled Expert <span>Team</span></h2>
        <p>TEAM MEMBERS</p>

        <div className={styles.imageSliders}>
          <div className={styles.cardSliderContainer}>
            <button 
              className={styles.navButton} 
              onClick={prevSlide} 
              disabled={currentIndex === 0}
            >
              <AiOutlineLeft />
            </button>
            
            <div className={styles.cardslider}>
              <div className={styles.cardWrapper} 
                  style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}>
                {cards.map((card, index) => (
                  <div key={index} className={styles.cardItem}>
                    <img src={card.img} alt="Card" className={styles.cardImages} />
                    <div className={styles.teamDetails}>
                      <h4>{card.name}</h4>
                      <p>{card.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className={styles.navButton} 
              onClick={nextSlide} 
              disabled={currentIndex >= cards.length - cardsPerView}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
      </div>
      <ScrollToTop/>
    </>
  );
};

export default About;
