import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

export default function EventTimeline() {
  return (
    <React.Fragment>
      <Timeline position="left" sx={{ padding: 0 }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="primary"
          >
            pátek 22.4.2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "50px", px: 1 }}>
            <Typography variant="h6" color="primary" component="span">
              Vážení
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
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "22px", px: 1 }}>
            <Typography variant="h6" color="primary" component="span">
              Předturnaje
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
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "40px", px: 1 }}>
            <Typography variant="h6" color="primary" component="span">
              Doprovodný program
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
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "22px", px: 1 }}>
            <Typography variant="h6" color="primary" component="span">
              Hlavní turnaj
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="primary"
          >
            sobota 23.4. od 23 hod
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "40px", px: 1 }}>
            <Typography variant="h6" color="primary" component="span">
              Afterparty
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
