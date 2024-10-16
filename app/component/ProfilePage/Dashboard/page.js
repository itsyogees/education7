import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const CardDatas = [
    {
      title: "Total Students",
      value: "20.5k",
      image: "/image/students-icon.png",
    },
    {
      title: "Total Teachers",
      value: "1.2k",
      image: "/image/teachers-icon.png",
    },
    {
      title: "Courses Offered",
      value: "350+",
      image: "/image/courses-icon.png",
    },
    {
      title: "New Enrollments",
      value: "5.6k",
      image: "/image/students-icon.png",
    },
  ];

  return (
    <div className={styles.Dashboard}>
      <div className={styles.DashboardContainer}>
        <div className={styles.DashboardCards}>
          {CardDatas.map((item, index) => (
            <div className={styles.DashboardCard} key={index}>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
              />
              <div className={styles.DashboardText}>
                <p>{item.title}</p>
                <span>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.Charts}>
            <div className={styles.Chart}></div>
            <div className={styles.Chart}></div>
            <div className={styles.Chart}></div>
        </div>
        <div className={styles.Tasks}>
            <div className={styles.Task1}></div>
            <div className={styles.Task2}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
