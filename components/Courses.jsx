import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AboutSelf } from "../components/AboutSelf";
import styles from "./Header/main.module.sass";
import Link from "next/link";
import { useState  , useEffect } from "react";
import axios from "axios";

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const url = "http://smartshopcenter.org:5000/courses";  
  useEffect(() => {
    axios.get(url).then(function (response) {
      setCourses(response.data.course);
      // console.log(response.data)
    });
  }  , []);
  return (
    <>
      <div className={styles.courses}>
        {
          courses.map((course) =>{
            return(
              <Link href={"/english"} key={course.id}>
              <div className={styles.courses__cont}>
                <div className={styles.courses__img}>{course.image}</div>
              </div>
              </Link>
            )
          })
        }
      </div>
    </>
  );
};
