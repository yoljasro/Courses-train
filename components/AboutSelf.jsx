import { Box } from "@mui/system";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import styles from "../styles/about.module.css";

export const AboutSelf = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
        background: "#5A55D5",
        
      }}
    >
      <Box
        sx={{
          width: "100%",
          margin: "0 auto",
          maxWidth: 1200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "@media (max-width: 769px)": {
            flexDirection: "column",
            marginTop: "30px"
          },
        }}
      >
        <Box>
          <Typography variant="h2" color={"HighlightText"}>
            Company Name
          </Typography>
          <Typography variant="body" color={"HighlightText"}>
            This is Courses Description
          </Typography>
        </Box>
        <Image
          className={styles.img}
          alt="aboutself"
          width={600}
          height={600}
          src={"/img/aboutself.png"}
        />
      </Box>
    </Box>
  );
};
