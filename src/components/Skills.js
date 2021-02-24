import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 320,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Skills() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Programming" {...a11yProps(0)} />
        <Tab label="Technologies" {...a11yProps(1)} />
        <Tab label="Frameworks and Libraries" {...a11yProps(2)} />
        <Tab label="Services" {...a11yProps(3)} />
        <Tab label="Topics" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ul>
          <li>JavaScript</li>
          <li>Node.JS</li>
          <li>React</li>
          <li>React Native</li>
          <li>EmberJS</li>
          <li>C++</li>
          <li>Java</li>
          <li>Python</li>
          <li>Swift</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul>
          <li>Git/GitHub</li>
          <li>XCode</li>
          <li>OS X</li>
          <li>Unix</li>
          <li>Linux</li>
          <li>MongoDB</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ul>
          <li>Redux</li>
          <li>Express</li>
          <li>Mongoose</li>
          <li>Bootstrap</li>
          <li>Material-UI</li>
          <li>Shopify Liquid</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ul>
          <li>Google Analytics</li>
          <li>Shopify</li>
          <li>Firebase</li>
          <li>Heroku</li>
          <li>SEO</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ul>
          <li>Systems development life cycle</li>
          <li>AGILE</li>
          <li>Team Work</li>
          <li>Full-Stack Development</li>
          <li>Mobile Apps Development</li>
        </ul>
      </TabPanel>
    </div>
  );
}
