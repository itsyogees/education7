"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFileAlt, FaChartLine, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import styles from "./MyCourses.module.scss";

const MyCourses = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  
  // Add status to each card
  const cards = [
    {
      img: "/image/img1.jpg",
      amt: "₹5000",
      rating: 4.5,
      title: "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
      status: "finished", // Status: finished, not_enrolled, or all (default)
    },
    {
      img: "/image/img2.png",
      amt: "₹5000",
      rating: 4.0,
      title: "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
      status: "all",
    },
    {
      img: "/image/img3.jpg",
      amt: "₹5000",
      rating: 3,
      title: "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
      status: "not_enrolled",
    },
    {
      img: "/image/img1.jpg",
      amt: "₹5000",
      rating: 4.0,
      title: "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
      status: "finished",
    },
  ];

  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} />);
    }

    return stars;
  };

  // Function to filter cards based on the active tab
  const filteredCards = () => {
    if (activeTab === 2) return cards.filter(card => card.status === "finished");
    if (activeTab === 3) return cards.filter(card => card.status === "not_enrolled");
    return cards; // All courses if tab 1 (All) is selected
  };

  return (
    <div className={styles.MyCourses}>
      <div className={styles.MyCoursesContainer}>
        <div className={styles.heroTabs}>
          {["All", "Finished", "Not Enrolled"].map((section, index) => (
            <div
              key={index}
              className={`${styles.tab} ${activeTab === index + 1 ? styles.active : ""}`}
              onClick={() => handleTabClick(index + 1)}
            >
              {section}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.heroPageContent}>
        <div className={styles.heroTabsCard}>
          <div className={styles.coursesCards}>
            {filteredCards().map((card, index) => (
              <div key={index} className={styles.coursesCard}>
                <a href="#cardlink" className={styles.cardLink}>
                  <Image
                    src={card.img}
                    alt="Card"
                    width={300}
                    height={200}
                    className={styles.cardImage}
                  />
                  <div className={styles.sliderCard}>
                    <div className={styles.stars}>{getStars(card.rating)}</div>
                    <h2 className={styles.cardTitle}>{card.title}</h2>
                  </div>
                  <div className={styles.cardDoc}>
                    <p>
                      <FaFileAlt /> View Details
                    </p>
                    <p>
                      <FaChartLine /> Beginner
                    </p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.amount}>
                    <p>{card.amt}</p>
                    <button className={styles.amtBtn}>Start Courses</button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
