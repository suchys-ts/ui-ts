import Grid from "@material-ui/core/Grid";
import {Button, Chip, Typography, withStyles} from "@material-ui/core";
import React, {FC} from "react";
import {User} from "./Root";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainContainer: {
            paddingTop: theme.spacing(3),
        },
        header: {
            paddingLeft: theme.spacing(.75),
        },
        chips: {
          textTransform: 'capitalize',
        },
        invited: {
            backgroundColor: '#c66e94',
        },
        active: {
            backgroundColor: '#519a3e',
        },
        full: {
            backgroundColor: '#dd7b74',
        },
        limited: {
            backgroundColor: '#a8a930',
        },
        'read-only': {
            backgroundColor: '#4397b7',
        },
    }),
);
const UserButton = withStyles(theme => ({
    root: {
        width: '100%',
    },
}))(Button); //UserButton size="small" variant={"outlined"}

const UserItem: FC<User> = props => {
    const {email, accessLevel, state} = props;
    const classes = useStyles();
    return (
        <Grid container item xs={12} direction="row" alignItems="baseline" className={classes.mainContainer}>
            <Grid item xs={1} className={classes.header}>
                <Chip size="small" className={classNames(classes[state], classes.chips)} label={state}/>
            </Grid>
            <Grid item xs={3} className={classes.header}>
                <Typography variant="body2">{email}</Typography>
            </Grid>
            <Grid item xs={4} className={classes.header}>
                <Chip size="small" className={classNames(classes[accessLevel], classes.chips)} label={accessLevel}/>
            </Grid>
            <Grid item xs={2} className={classes.header}>
            </Grid>
            <Grid item xs={2} className={classes.header}>
            </Grid>
        </Grid>
    );
};

export default UserItem;
