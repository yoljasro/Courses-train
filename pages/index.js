import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AboutSelf } from "../components/AboutSelf";
import Head from "next/head";
import "../styles/index.module.sass";

import Link from "next/link";
import { Courses } from "../components/Courses";

export default function Home() {
  return (
    <>
      <Head>
        <title>Courses</title>
        <meta name="description" content="Courses" />
        <link rel="icon" href="/assets/img/aboutself.png" />
      </Head>
      
      <Courses />
    </>
  );
}
