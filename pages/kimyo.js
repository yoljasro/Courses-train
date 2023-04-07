import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

const Math = () => {
  const [kimyo, setKimyo] = useState("");
  const url = "https://api.smartshopcenter.org/kimyo";

  useEffect(() => {
    axios
      .get(url, kimyo)
      .then(function (response) {
        setKimyo(response.data.kimyo);
        console.log(response);
      })
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
        {kimyo &&
          kimyo.length > 0 &&
          kimyo.map((kimyo) => {
            return (
              <div>
                <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
                  {kimyo.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  {kimyo.description}
                </Typography>
              </div>
            );
          })}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Agar siz Kimyo  haqida koproq bilim olmoqchi bolsangiz, bizning
          kursimiz siz uchun juda qiziqarli boladi. Kursga yozilish uchun
          quyidagi tugmani bosing.
        </Typography>
        <Button variant="contained" color="primary">
          Kursga yozilish
        </Button>
      </Box>
    </div>
  );
};

export default Math;
