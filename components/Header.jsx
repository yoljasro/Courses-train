import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import styles from "./Header/index.module.sass";
import Head from "next/head";

export const Header = () => {
  const [isToken, setIsToken] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage && localStorage.getItem("token")) {
      setIsToken(true);
    }
  }, []);
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#5A46D4" }}>
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 !important",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 300,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button color="inherit" onClick={() => router.push("/")}>
              Logo
            </Button>
            {isToken && (
              <>
                <Button color="inherit" onClick={() => router.push("/profile")}>
                  Profile
                </Button>
                <Button
                  color="inherit"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsToken(false);
                    router.push("/");
                  }}
                >
                  Exit
                </Button>
              </>
            )}
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: 250,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {/* <select className={styles.select}>
              <option value="ru">ru</option>
              <option value="uz">uz</option>
              <option value="en">en</option>
              <option value="kr">kr</option>
            </select> */}
            <Button
              className={styles.btn}
              variant="contained"
              color={"info"}
              onClick={() => router.push("/sign-up")}
            >
              Request
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
