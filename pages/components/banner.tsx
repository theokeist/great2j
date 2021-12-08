import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

export default function Banner({ header, objectPosition }: any) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div
      className="pt-2"
      style={{
        position: "relative",
        width: "100%",
        height: matches ? "38.66vw" : "48.66vw",
      }}
    >
      <Image
        alt="great by 2j"
        src={header}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        objectPosition={objectPosition}
        priority
      />
    </div>
  );
}
