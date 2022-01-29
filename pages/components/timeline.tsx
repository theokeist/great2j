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
export default function EventTimeline() {
  return (
    <React.Fragment>
      <Timeline
        position="left"
        sx={{ mt: 0, mb: 0, py: 4, px: 2, bgcolor: "black" }}
      >
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
            pátek 22.4. dopoledne
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
            pátek 22.4. odpoledne
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
            sobota 23.4. 9-13 hod
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
            sobota 23.4. 13-16 hod
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
            sobota 23.4. 17-22 hod
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
            sobota 23.4. 23 hod
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
    </React.Fragment>
  );
}
