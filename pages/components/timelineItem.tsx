import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import EventNoteIcon from "@mui/icons-material/EventNote";

export default function TimelineItemCustom({
  eventDescription = "",
  eventPlace = "",
  eventDate = "",
  eventTime = "",
  icon = EventNoteIcon,
  last = false,
}: any) {
  const EventIcon = icon;
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: "auto 0", pl: 1, pr: 0 }}>
        <Typography
          variant="body2"
          color="primary"
          component="span"
          sx={{ fontSize: 15 }}
          gutterBottom
        >
          {eventDate}
        </Typography>
        <br />
        <Typography
          variant="body2"
          color="primary"
          component="span"
          sx={{ fontSize: 15 }}
        >
          {eventTime}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          <EventIcon />
        </TimelineDot>
        {!last ? (
          <TimelineConnector />
        ) : (
          <TimelineConnector sx={{ backgroundColor: "background.paper" }} />
        )}
      </TimelineSeparator>
      <TimelineContent sx={{ py: "35px", pl: 0, pr: 1 }}>
        <Typography
          variant="h6"
          color="primary"
          component="span"
          sx={{ fontSize: 16 }}
          gutterBottom
        >
          {eventDescription}
        </Typography>
        <br />
        <Typography
          variant="body2"
          color="primary"
          component="span"
          sx={{ fontSize: 14 }}
        >
          {eventPlace}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
