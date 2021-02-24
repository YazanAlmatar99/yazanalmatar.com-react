import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "40%",
    flexShrink: 0,
    fontFamily: "monospace",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
  },
}));

export default function Education() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h1>Education</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            CUNY College of Staten Island
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Bachelor Degree - Computer Science
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h5>2017-2021 | Anticipated Graduation Date: August 2021</h5>
            <h6>Relevant Coursework:</h6>
            <ul>
              <li>Data Structures and Algorithms,</li>
              <li>Analysis of Algorithms</li>
              <li>Database Fundamentals</li>
              <li>Software Engineering</li>
              <li>Software Design</li>
              <li>Advanced Web Development</li>
              <li>C++ Programming</li>
              <li>Java Programming</li>
              <li>Game Development using Unity Engine</li>
              <li>Discrete Math</li>
              <li>Calculus 1,2 & 3</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h1>Skills</h1>
    </div>
  );
}
