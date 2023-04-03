import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Box, Typography , Button } from '@mui/material';

const Math = () => {
  return (
    <div>
      <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          margin: '30px auto',
          padding: '20px',
          boxShadow: '0px 0px 10px 0 #eee',
          borderRadius: '20px',
        }}
      >
        <Typography variant='h4' component='h1' sx={{ mb: 4 }}>
          Matematika   haqida
        </Typography>
        <Typography variant='body1' sx={{ mb: 4 }}>
          Bu yerda Matematika haqida malumotlarni topishingiz mumkin. Bu yerda
          turlar boyicha Matematika haqida malumotlar, asosiy konseptlar,
          xususiyatlar, tushunchalar, organish usullari va turli xil boshqa
          malumotlarga ega bolishingiz mumkin.
        </Typography>
        <Typography variant='body1' sx={{ mb: 4 }}>
          Bizning Matematika kursimiz, oquvchilarga matematik va fikr yoshlariga
          yonaltirilgan, hamda ularni organish va rivojlantirishga yordam
          beradi. Bu kursda siz Matematika fanining asosiy tushunchalarini
          organasiz, jismoniy tizimlarni, ornatish, funktsiyalarni, formulalari
          va ekologiyani tahlil qilasiz.
        </Typography>
        <Typography variant='body1' sx={{ mb: 4 }}>
          Agar siz Matematika haqida koproq bilim olmoqchi bolsangiz, bizning
          kursimiz siz uchun juda qiziqarli boladi. Kursga yozilish uchun
          quyidagi tugmani bosing.
        </Typography>
        <Button variant='contained' color='primary'>
          Kursga yozilish
        </Button>
      </Box>
    </div>
  );
};

export default Math;
