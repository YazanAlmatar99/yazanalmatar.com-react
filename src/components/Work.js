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

export default function Work() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h1>Relevant Experiance</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Develop for Good</Typography>
          <Typography className={classes.secondaryHeading}>
            Full-Stack Developer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h5>Remote | 01/2021 - Present</h5>
            <ul>
              <li>
                Working with a team of 3 developers and 2 designers to build a
                Mobile App from scratch for the EDF (Environmental Defense Fund)
                to encourage youth activism against climate change.
              </li>
              <li>
                Working on building an API to handle all backend communications
                and store data.
              </li>
              <li>
                The app will provide youth with resources including podcasts,
                guides for actions, Climate Corps activist training, conference
                events, alumni network, and more.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Ana Luisa</Typography>
          <Typography className={classes.secondaryHeading}>
            Software Developer Internship
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h5>Brookyln, New York | 06/2019 - 08/2019</h5>
            <ul>
              <li>
                Implemented a Dashboard that's is being used by more than 25
                employees and an inventory management system
              </li>
              <li>
                Implemented a secured API for a Horoscope application using
                Node.js and Express.
              </li>
              <li>
                Worked on improving the company's website UI and UX by
                debugging, redesigning and creating pages.
              </li>
              <li>
                Worked on improving the website loading speed by using the best
                practices of optimization and improved the loading speed by 30%.
              </li>
              <li>
                Created weekly reports that presented the website's performance
                and traffic.
              </li>
              <li>
                Analyzed traffic using Google Analytics and worked on improving
                the SEO of the website that's being visited by more than 200k
                users a month.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
