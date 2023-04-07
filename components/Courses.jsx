import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AboutSelf } from "../components/AboutSelf";
import styles from "./Header/main.module.sass";

import Link from "next/link";

export const Courses = () => {
  const courses = [
    {
      id: 1,
      image: "/img/biology.webp",
      href : "/biology"
    },
    {
      id: 2,
      image: "/img/math.jpg",
      href : "/math"
    },
    {
      id: 3,
      image: "/img/kimyo.jpg",
      href : "/kimyo"
    },
    {
      id: 4,
      image: "/img/mothertongue.jpg",
      href : "/mother"
    },
    {
      id: 5,
      image: "/img/adabiyot.jpg",
      href : "/literature"
    },
    {
      id: 6,
      image: "/img/rus.jpg",
      href : "/russian"
    },
    {
      id: 7,
      image: "/img/fizi.jfif",
      href : "/fizi"
    },
    {
      id: 8,
      image: "/img/english.jpg",
      href : "/english"
    },
  ];
  return (
    <>
      <div className={styles.courses}>
        {courses.map((course) => (
          <a
            key={course.id}
            target={"_blank"}
            rel="noreferrer"
            href={course.href}
          >
            <div className={styles.courses__card}>
              <img
                src={course.image}
                className={styles.courses__img}
                alt={course.title}
              />
              </div>  
          </a>
        ))}
      </div>
    </>
  );
};
