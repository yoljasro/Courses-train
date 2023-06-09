import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

const Math = () => {
  const router = useRouter();
  const [english, setEnglish] = useState("");
  const url = "http://smartshopcenter.org:5000/english";

  useEffect(() => {
    axios
      .get(url, english)
      .then(function (response) {
        setEnglish(response.data.english);
        console.log(response);
      }, [])
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "30px auto",
          padding: "20px",
          boxShadow: "0px 0px 10px 0 #eee",
          borderRadius: "20 px",
        }}
      >
        {english &&
          english.length > 0 &&
          english.map((english) => {
            return (
              <div key={english.id}>
                <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
                  {english.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  {english.description}
                </Typography>
              </div>
            );
          })}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Agar siz Ingliz haqida koproq bilim olmoqchi bolsangiz, bizning
          kursimiz siz uchun juda qiziqarli boladi. Kursga yozilish uchun
          quyidagi tugmani bosing.
        </Typography>
        <Button
          onClick={() => router.push("/sign-up")}
          variant="contained"
          color="primary"
        >
          Kursga yozilish
        </Button>
      </Box>
    </div>
  );
};

export default Math;
