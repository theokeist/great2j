import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ScaleIcon from "@mui/icons-material/Scale";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Typography from "@mui/material/Typography";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import TimelineItemCustom from "./timelineItem";
export default function EventTimeline2() {
  const [showForm, setHover] = React.useState(false);
  return (
    <Paper
      elevation={24}
      sx={{
        borderRadius: 3,
        py: 4,
        px: 2,
        bgcolor: "primary",
        display: "flex",
        alignItems: "center",
        height: "99%",
      }}
    >
      <Timeline position="left" sx={{ mt: 0, mb: 0 }}>
        <Typography
          variant="h5"
          align="center"
          color="primary"
          sx={{ color: "red", fontWeight: 700, letterSpacing: 2.5 }}
          paragraph
        >
          PRŮBĚH UDÁLOSTI
        </Typography>
        <TimelineItemCustom
          eventDescription="OFICIÁLNÍ VÁŽENÍ"
          eventDate="čtvrtek 21.4."
          eventTime="od 10:00 hod."
          icon={ScaleIcon}
        />

        <TimelineItemCustom
          eventDescription="VEŘEJNÉ VÁŽENÍ"
          eventPlace="Forum Nová Karolína"
          eventDate="čtvrtek 21.4."
          eventTime="od 17:00 hod."
          icon={ScaleIcon}
        />

        <TimelineItemCustom
          eventDescription="PŘEDTURNAJ"
          eventPlace="Mládež a méně zkušení zápasníci"
          eventDate="pátek 22.4."
          eventTime="od 13-15 hod."
          icon={FitnessCenterIcon}
        />

        {/* <TimelineItemCustom
          eventDescription="doprovodný program"
          eventDate="pátek 22.4."
          eventTime="13-16 hod"
          icon={EventNoteIcon}
        /> */}

        <TimelineItemCustom
          eventDescription="HLAVNÍ TURNAJ"
          eventDate="pátek 22.4."
          eventTime="od 17-23 hod."
          icon={EmojiEventsIcon}
        />

        <TimelineItemCustom
          eventDescription="AFTERPARTY"
          eventPlace="Brickhouse DOV"
          eventDate="pátek 22.4."
          eventTime="od 21 hod."
          icon={NightlifeIcon}
          last
        />
      </Timeline>

      {/* <Button
        size="large"
        variant="outlined"
        fullWidth
        startIcon={
          !showForm ? (
            <FavoriteBorderIcon
              style={{
                fontSize: 30,
                marginRight: 5,
              }}
            />
          ) : (
            <FavoriteIcon
              style={{
                fontSize: 30,
                marginRight: 5,
              }}
            />
          )
        }
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        sx={{
          bgcolor: "black",
          ":hover": {
            bgcolor: "primary",
          },
          color: "red",
          mt: 1.5,
          py: 2.5,
          borderRadius: 3,
          fontWeight: 700,
          typography: {
            letterSpacing: 4,
          },
        }}
      >
        transparentní účet
      </Button> */}
    </Paper>
  );
}
