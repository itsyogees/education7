import React from "react";
import styles from "./Blog.module.scss";

import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { VscEye } from "react-icons/vsc";
import { FiMessageSquare } from "react-icons/fi";
import ScrollToTop from "@/app/component/ScrollToTop/page";

const articles = [
  {
    id: 1,
    image: "/image/article1.png",
    title:
      "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    author: "Randy",
    date: "Feb 09, 2024",
    views: "38.8K",
    comments: 4,
  },
  {
    id: 2,
    image: "/image/article2.png",
    title:
      "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    author: "Randy",
    date: "Feb 09, 2024",
    views: "38.8K",
    comments: 4,
  },
  {
    id: 3,
    image: "/image/article3.png",
    title:
      "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    author: "Randy",
    date: "Feb 09, 2024",
    views: "38.8K",
    comments: 4,
  },
  {
    id: 4,
    image: "/image/article4.png",
    title:
      "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    author: "Randy",
    date: "Feb 09, 2024",
    views: "38.8K",
    comments: 4,
  },
  {
    id: 5,
    image: "/image/article5.png",
    title:
      "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    author: "Randy",
    date: "Feb 09, 2024",
    views: "38.8K",
    comments: 4,
  },
  {
    id: 6,
    image: "/image/article6.png",
    title:
      "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    author: "Randy",
    date: "Feb 09, 2024",
    views: "38.8K",
    comments: 4,
  },
  {
    id: 7,
    image: "/image/article7.png",
    title:
      "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    author: "Randy",
    date: "Feb 09, 2024",
    views: "38.8K",
    comments: 4,
  },
  {
    id: 8,
    image: "/image/article8.png",
    title:
      "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    author: "Randy",
    date: "Feb 09, 2024",
    views: "38.8K",
    comments: 4,
  },
  {
    id: 9,
    image: "/image/article9.png",
    title:
      "Introduction to Web Design: From Basics to Advanced - Explained in Tamil",
    author: "Randy",
    date: "Feb 09, 2024",
    views: "38.8K",
    comments: 4,
  },
];
const reviews = [
  {
    name: "Elisa Joe",
    date: "Nov 9, 2023",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    name: "John Doe",
    date: "Oct 12, 2023",
    rating: 4,
    comment: "Sed do eiusmod tempor incididunt ut labore...",
  },
];

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.articlesContainer}>
        <h2>Blog</h2>
        <h4>Recently Added Articles</h4>

        <div className={styles.articleRow}>
          {articles.map((article) => (
            <div key={article.id} className={styles.articleCol}>
              <div className={styles.articleCard}>
                <div className={styles.articleImg}>
                  <img src={article.image} alt={article.title} />
                </div>
                <div className={styles.articleDetails}>
                  <h3>{article.title}</h3>
                  <h5>By {article.author}</h5>
                  <p>Last updated on</p>
                  <div className={styles.articleIcons}>
                    <p>{article.date}</p>
                    <h6>
                      <span>
                        <VscEye />
                      </span>
                      {article.views}
                    </h6>
                    <h5>
                      <span>
                        <FiMessageSquare />
                      </span>
                      {article.comments}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.principleContainer}>
        <div className={styles.blogImg}> </div>

        <div className={styles.principleDetails}>
          <h3>Key Principles of Web Design</h3>

          <div className={styles.principleRating}>
            <h4>
              <span>
                <MdStarRate />
              </span>
              4.8
            </h4>{" "}
            <p>Feb 09, 2024</p>
          </div>
        </div>

        <div className={styles.principleContent}>
          <p>
            <span>User-Centered Design (UCD):</span> The design should
            prioritize the needs, goals, and preferences of users. A
            user-friendly interface improves the overall experience and keeps
            visitors engaged.
          </p>

          <p>
            <span>Simplicity:</span>Effective web design avoids clutter and
            ensures that users can easily navigate the site. Simplicity often
            means clean layouts, readable fonts, and intuitive navigation.
          </p>

          <p>
            <span>Consistency:</span>Maintaining uniform design elements (fonts,
            colors, button styles, etc.) throughout the site creates a cohesive
            look and feel, enhancing the user experience.
          </p>

          <p>
            <span>Responsive Design: </span>Modern websites must work across
            multiple devices—desktops, tablets, and mobile phones. Responsive
            design ensures that the website layout adjusts to fit different
            screen sizes.
          </p>

          <p>
            <span>Accessibility:</span> Websites should be designed to
            accommodate all users, including those with disabilities.
            Accessibility standards ensure that sites can be navigated by screen
            readers, and content is understandable for users with visual or
            hearing impairments.
          </p>
        </div>

        <div className={styles.reviewContainer}>
          <h3>Reviews</h3>
          <div className={styles.reviewContent}>
            <div className={styles.reviewProfile}>
              <Image src="/image/reviewProfile.png" width={55} height={90} />
            </div>

            <div className={styles.reviewDetails}>
              <div className={styles.userName}>
                <h4>Elisa Joe</h4>
                <p>Nov 9, 2023</p>
              </div>

              <div className={styles.reviewRating}>
                <div className={styles.reviewStars}>
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.reviewData}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor elit, sed do
              eiusmod tempor ut labore Lorem ipsum dolor sit eiusmod tempor ut
              labore Lorem
            </p>
          </div>

          <div className={styles.reviewContent}>
            <div className={styles.reviewProfile}>
              <Image src="/image/reviewProfile.png" width={55} height={90}/>
            </div>

            <div className={styles.reviewDetails}>
              <div className={styles.userName}>
                <h4>Elisa Joe</h4>
                <p>Nov 9, 2023</p>
              </div>

              <div className={styles.reviewRating}>
                <div className={styles.reviewStars}>
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.reviewData}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor elit, sed do
              eiusmod tempor ut labore Lorem ipsum dolor sit eiusmod tempor ut
              labore Lorem
            </p>
          </div>
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default Blog;
