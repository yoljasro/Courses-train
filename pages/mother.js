import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

const Math = () => {
  const [mother, setMother] = useState("");
  const url = "https://api.smartshopcenter.org/mothertongue";

  useEffect(() => {
    axios
      .get(url, mother)
      .then(function (response) {
        setMother(response.data.mother);
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
        {mother &&
          mother.length > 0 &&
          mother.map((mother) => {
            return (
              <div>
                <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
                  {mother.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  {mother.description}
                </Typography>
              </div>
            );
          })}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Agar siz Ona-tili haqida koproq bilim olmoqchi bolsangiz, bizning
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
