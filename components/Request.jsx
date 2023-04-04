import { Box, TextField, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import axios from "axios";
import { Footer } from "./Footer";

export const Request = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const router = useRouter()

  const { name, email, phone } = formData;

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(formData);

    try {
      const res = await axios.post(
        "https://api.smartshopcenter.org/pupils",
        body,
        config
      );
      console.log(res.data);
      alert("Submited in Database")
    } catch (err) {
      console.error(err.response.data);
      alert("Error") 
      router.push('/')
    }
  };

  return (
    <>
      <Typography sx={{
        textAlign:"center" , 
        position  : "relative"  , 
        top  : "100px" , 
        fontSize : "26px"
      }} color={"primary"} variant={"body1"}>
        Request page for students
      </Typography>

      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "300px",
          margin: "0 auto",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ margin: "10px 0" }}
            label="name"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            required="true"
            onChange={handleChange}
          />

          <TextField
            sx={{ margin: "10px 0" }}
            type="email"
            name="email"
            value={email}
            label="email"
            variant="outlined"
            required="true"
            onChange={handleChange}
          />

          <TextField
            sx={{ margin: "10px 0" }}
            type="text"
            name="phone"
            label="phone"
            outlined
            required="true"
            value={phone}
            onChange={handleChange}
          />

          <Button
            sx={{
              margin: "20px 0 10px",
              background: "#5A46D4",
            }}
            variant={"contained"}
            type={"submit"}
          >
            {" "}
            Submit
          </Button>
        </form>
      </Box>
      {/* <Footer/> */}
    </>
  );
};
