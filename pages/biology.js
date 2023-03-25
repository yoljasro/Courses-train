import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Box, Typography , Button } from '@mui/material';

const Biology = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          margin: '30px auto',
          padding: '20px',
          boxShadow: '0px 0px 10px 0 #eee',
          borderRadius: '   20px',
        }}
      >
        <Typography variant='h4' component='h1' sx={{ mb: 4 }}>
          Biologiya haqida
        </Typography>
        <Typography variant='body1' sx={{ mb: 4 }}>
          Bu yerda biologiya haqida malumotlarni topishingiz mumkin. Bu yerda
          turlar boyicha biologiya haqida malumotlar, asosiy konseptlar,
          xususiyatlar, tushunchalar, organish usullari va turli xil boshqa
          malumotlarga ega bolishingiz mumkin.
        </Typography>
        <Typography variant='body1' sx={{ mb: 4 }}>
          Bizning biologiya kursimiz, oquvchilarga jismoniy va fikr yoshlariga
          yonaltirilgan, hamda ularni organish va rivojlantirishga yordam
          beradi. Bu kursda siz biologiya fanining asosiy tushunchalarini
          organasiz, jismoniy tizimlarni, ornatish, funktsiyalarni, genetikani
          va ekologiyani tahlil qilasiz.
        </Typography>
        <Typography variant='body1' sx={{ mb: 4 }}>
          Agar siz biologiya haqida koproq bilim olmoqchi bolsangiz, bizning
          kursimiz siz uchun juda qiziqarli boladi. Kursga yozilish uchun
          quyidagi tugmani bosing.
        </Typography>
        <Button variant='contained' color='primary'>
          Kursga yozilish
        </Button>
      </Box>
      <Footer />
    </div>
  );
};

export default Biology;
