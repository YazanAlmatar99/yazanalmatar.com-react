import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

export default class NavBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={"hello"}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className="hello">
            <a
              href="https://www.linkedin.com/in/yazanalmatar"
              style={{ color: "white", textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}
