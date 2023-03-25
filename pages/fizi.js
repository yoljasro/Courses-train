import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Box, Typography , Button } from "@mui/material";

const Fizi = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "30px auto",
          padding: "20px",
          boxShadow: "0px 0px 10px 0 #eee",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Fizi   haqida
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Bu yerda biologiya haqida ma'lumotlarni topishingiz mumkin. Bu yerda
          turlar bo'yicha biologiya haqida ma'lumotlar, asosiy konseptlar,
          xususiyatlar, tushunchalar, o'rganish usullari va turli xil boshqa
          ma'lumotlarga ega bo'lishingiz mumkin.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Bizning biologiya kursimiz, o'quvchilarga jismoniy va fikr yoshlariga
          yo'naltirilgan, hamda ularni o'rganish va rivojlantirishga yordam
          beradi. Bu kursda siz biologiya fanining asosiy tushunchalarini
          o'rganasiz, jismoniy tizimlarni, o'rnatish, funktsiyalarni, genetikani
          va ekologiyani tahlil qilasiz.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Agar siz biologiya haqida ko'proq bilim olmoqchi bo'lsangiz, bizning
          kursimiz siz uchun juda qiziqarli bo'ladi. Kursga yozilish uchun
          quyidagi tugmani bosing.
        </Typography>
        <Button variant="contained" color="primary">
          Kursga yozilish
        </Button>
      </Box>
      <Footer />
    </div>
  );
};

export default Fizi;
