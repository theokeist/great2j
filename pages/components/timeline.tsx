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

export default function EventTimeline() {
  const [showForm, setHover] = React.useState(false);
  return (
    <Paper
      elevation={24}
      sx={{ borderRadius: 3, py: 4, px: 4, bgcolor: "primary" }}
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
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="primary"
          >
            čtvrtek 21.4. dopoledne
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <ScaleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "30px", px: 1 }}>
            <Typography
              variant="h6"
              color="primary"
              component="span"
              sx={{ fontSize: 15 }}
            >
              oficiální vážení
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="primary"
          >
            čtvrtek 21.4. odpoledne
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <ScaleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "20px", px: 1 }}>
            <Typography
              variant="h6"
              color="primary"
              component="span"
              sx={{ fontSize: 15 }}
            >
              veřejné vážení, místo bude upřesněno
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="primary"
          >
            pátek 22.4. 9-13 hod
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <FitnessCenterIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "20px", px: 1 }}>
            <Typography
              variant="h6"
              color="primary"
              component="span"
              sx={{ fontSize: 15 }}
            >
              “předturnaj” mládeže a “méně zkušených” zápasníků
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="primary"
          >
            pátek 22.4. 13-16 hod
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <EventNoteIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "30px", px: 1 }}>
            <Typography
              variant="h6"
              color="primary"
              component="span"
              sx={{ fontSize: 15 }}
            >
              doprovodný program
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="primary"
          >
            pátek 22.4. 17-22 hod
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <EmojiEventsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "30px", px: 1 }}>
            <Typography
              variant="h6"
              color="primary"
              component="span"
              sx={{ fontSize: 15 }}
            >
              hlavní turnaj
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="primary"
          >
            pátek 22.4. 23 hod
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <NightlifeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "20px", px: 1 }}>
            <Typography
              variant="h6"
              color="primary"
              component="span"
              sx={{ fontSize: 15 }}
            >
              začátek Afterparty (místo bude upřesněno)
            </Typography>
          </TimelineContent>
        </TimelineItem>
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
