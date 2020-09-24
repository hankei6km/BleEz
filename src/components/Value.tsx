import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

type valuePropsType = {
  val: number;
  isConnected: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    valueConnected: {
      color: theme.palette.text.primary
    },
    valueDisconnected: {
      color: theme.palette.text.disabled
    }
  })
);

export default function Value(props: valuePropsType) {
  const classes = useStyles();
  return (
    <div
      className={
        props.isConnected ? classes.valueConnected : classes.valueDisconnected
      }
    >
      <Typography variant="h4" color="inherit">
        {props.val}
      </Typography>
    </div>
  );
}
