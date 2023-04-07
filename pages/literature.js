import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

const Math = () => {
  const [literature, setLiterature] = useState("");
  const url = "https://api.smartshopcenter.org/literature";

  useEffect(() => {
    axios
      .get(url, literature)
      .then(function (response) {
        setLiterature(response.data.literature);
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
        {literature &&
          literature.length > 0 &&
          literature.map((literature) => {
            return (
              <div>
                <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
                  {literature.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  {literature.description}
                </Typography>
              </div>
            );
          })}
        <Typography variant="body1" sx={{ mb: 4 }}>
          Agar siz Biologiya  haqida koproq bilim olmoqchi bolsangiz, bizning
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
