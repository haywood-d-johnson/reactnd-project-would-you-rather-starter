import React, { useState } from "react";

import { Paper, Avatar, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";

export default function NavBar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  //TODO: Add React-Router, add props to render authedUser
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className="navbar-container" position="static">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        variant="fullWidth"
        centered
      >
        <Tab label="Home" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab
          style={{ display: "inline" }}
          label="Hello, user"
          icon={<Avatar className={classes.small}></Avatar>}
          disabled
        />
      </Tabs>
    </Paper>
  );
}
