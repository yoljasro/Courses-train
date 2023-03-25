import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AboutSelf } from "../components/AboutSelf";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <AboutSelf />
      <Typography
        sx={{
          textAlign: "center",
          color: "blue",
          fontSize: "35px",
          paddingTop: "20px",
        }}
      >
        Courses
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "blue",
          fontSize: "25px",
        }}
      >
        Courses Block Desctiption
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1200px",
          width: "100%",
          margin: "30px auto",
          gap: "20px",
          flexWrap: "wrap",
          "@media (max-width: 769px)": {
            justifyContent: "center",
          },
        }}
      >
        <Card
          sx={{
            minHeight: 400,
            maxWidth: 345,
            borderRadius: "20px",
            boxShadow: "0px 0px 10px 0 #eee",
          }}
        >
          <a href={"/math"} target="_blank" rel="noreferrer">
            <CardMedia
              component="img"
              height="400"
              image="/img/math.jpg"
              alt="green iguana"
            />
          </a>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mathematics
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Mathem
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minHeight: 200,
            maxWidth: 345,
            borderRadius: "20px",
            boxShadow: "0px 0px 10px 0 #eee",
          }}
        >
          <a href={"/biology"} target="_blank" rel="noreferrer">
            <CardMedia
              component="img"
              height="400"
              image="/img/bio.webp"
              alt="green iguana"
            />
          </a>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Biology
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Biology
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minHeight: 200,
            maxWidth: 345,
            borderRadius: "20px",
            boxShadow: "0px 0px 10px 0 #eee",
          }}
        >
          <a href={"/fizi"} target="_blank" rel="noreferrer">
            <CardMedia
              component="img"
              height="400"
              image="/img/demo.jpg"
              alt="green iguana"
            />
          </a>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Physics
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Physics
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </>
  );
}
