import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { Typography, Grid } from "@mui/material";

export default function Banner({
  subtitle,
  title,
  gutterBottom,
  align,
  header,
  objectPosition,
  marginLeft,
}: any) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Grid
        className="pt-2"
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          height: matches ? "38.8vw" : "48.66vw",
          filter: `blur(0px)`,
          backgroundImage: `url("${header}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: objectPosition,
          backgroundSize: "cover",
          objectPosition: objectPosition,
          margin: 0,
          marginTop: { sm: 0, xs: 0 },
          marginLeft: "auto",
          width: { xl: "calc(100% - 15vw)", sm: "100%" },
        }}
      >
        {/* <Image
        alt="great by 2j"
        src={header}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        objectPosition={objectPosition}
        priority
      /> */}
        {matches && title && (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ width: "initial" }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="primary.light"
              gutterBottom={gutterBottom}
              textAlign={align}
              sx={
                matches
                  ? {
                      fontWeight: 700,
                      letterSpacing: 10,
                      fontSize: 62,
                      backgroundColor: "secondary.main",
                      padding: "14px 25px",
                      transform: "skewX(-10deg)",
                      marginLeft: marginLeft,
                    }
                  : {
                      fontWeight: 700,
                      letterSpacing: 4,
                      fontSize: 20,
                      backgroundColor: "secondary.main",
                      padding: "14px 25px",
                      transform: "skewX(-10deg)",
                    }
              }
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                component="h1"
                variant="subtitle1"
                color="primary.light"
                textAlign={align}
                sx={
                  matches
                    ? {
                        fontWeight: 300,
                        fontSize: 50,
                        letterSpacing: 4,
                        marginBottom: 0,
                        backgroundColor: "secondary.main",
                        padding: "10px 15px",
                        transform: "skewX(-10deg)",
                        marginTop: 1,
                        marginLeft: marginLeft,
                      }
                    : {
                        fontWeight: 300,
                        fontSize: 18,
                        letterSpacing: 2,
                        marginBottom: 0,
                        backgroundColor: "secondary.main",
                        padding: "10px 25px",
                        transform: "skewX(-10deg)",
                        marginTop: 0.5,
                      }
                }
                gutterBottom
              >
                {subtitle}
              </Typography>
            )}
          </Grid>
        )}
      </Grid>
      {!matches && title && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: -4 }}
        >
          <Grid
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography
              component="h1"
              variant="h3"
              color="primary.light"
              gutterBottom={gutterBottom}
              textAlign={align}
              sx={
                matches
                  ? {
                      fontWeight: 700,
                      letterSpacing: 10,
                      fontSize: 62,
                      backgroundColor: "secondary.main",
                      padding: "14px 25px",
                      transform: "skewX(-10deg)",
                      marginLeft: marginLeft,
                      width: "fit-content",
                    }
                  : {
                      fontWeight: 700,
                      letterSpacing: 4,
                      fontSize: 20,
                      backgroundColor: "secondary.main",
                      padding: "14px 15px",
                      transform: "skewX(-10deg)",
                      width: "fit-content",
                    }
              }
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                component="h1"
                variant="subtitle1"
                color="primary.light"
                textAlign={align}
                sx={
                  matches
                    ? {
                        fontWeight: 300,
                        fontSize: 50,
                        letterSpacing: 4,
                        marginBottom: 0,
                        backgroundColor: "secondary.main",
                        padding: "10px 15px",
                        transform: "skewX(-10deg)",
                        marginTop: 1,
                        marginLeft: marginLeft,
                        width: "fit-content",
                      }
                    : {
                        fontWeight: 300,
                        fontSize: 16,
                        letterSpacing: 2,
                        marginBottom: 0,
                        backgroundColor: "secondary.main",
                        padding: "10px 15px",
                        transform: "skewX(-10deg)",
                        marginTop: 0.5,
                        width: "fit-content",
                      }
                }
                gutterBottom
              >
                {subtitle}
              </Typography>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
}
