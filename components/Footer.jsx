import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { BsInstagram, BsFacebook, BsTelegram } from "react-icons/bs";
import styled from "@emotion/styled";
import Link from "next/link";
import { Typography } from "@mui/material";

const BtnStyle = styled.button`
  color: white;
  cursor: pointer;
  font-size: 30px;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
`;

export const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddinTop: "100px"
      }}
    >
      <AppBar
        position="relative"
        sx={{
          height: 150,
          background: "#5A46D4",
          // top: "50px" , 
          marginTop: "100px" , 
          // position: "fixed"
        }} 
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%" ,
            display: "flex",
            justifyContent: "space-around",
            marginLeft: "auto",
            // padding : 1
          }}
        >
          <Typography
            sx={
              {
                // textAlign: 'left',
              }
            }
          >
            Logo
          </Typography>
          <Typography
            sx={
              {
                // textAlign: 'center',
                // position : 'relative' ,
                // top : 30
              }
            }
          >
            Footer text
          </Typography>
        </Box>

        <Toolbar
          sx={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            height: "inherit",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 500,
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "auto",
              "@media (max-width: 769px)": {
                justifyContent:'space-around'
              },
            }}
          >
            <Link href={"https://www.instagram.com"}>
              <a target={"_blank"}>
                <BtnStyle>
                  <BsInstagram />
                </BtnStyle>
              </a>
            </Link>
            <Link href={"https://www.facebook.com"}>
              <a target={"_blank"}>
                <BtnStyle>
                  <BsFacebook />
                </BtnStyle>
              </a>
            </Link>
            <Link href={"https://telegram.org"}>
              <a target={"_blank"}>
                <BtnStyle>
                  <BsTelegram />
                </BtnStyle>
              </a>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
