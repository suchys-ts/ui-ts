import React, {ChangeEvent, FC, Fragment, useRef, useState} from "react";
import {Button, Grid, MenuItem, TextField, Typography} from "@material-ui/core";
import {Access} from "./Root";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import UserItem from "./UserItem";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topText: {
            paddingBottom: theme.spacing(3),
        },
        boxPadding: {
            paddingRight: theme.spacing(1),
        },
    }),
);

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const AddUsers: FC = () => {
    const classes = useStyles();
    const[emails, setEmails] = useState<string>('');
    const[valid, setValid] = useState<boolean>(false);

    const emailValidation = (emails: string): void => {
        setEmails(emails);
        if (emails.length === 0) {
          setValid(true);
          return;
        }
        const emailArray: string[] = emails.split(',');
        setValid(emailArray.findIndex((email) => email.trim().match(emailRegex) === null) === -1);
    };

    return (
        <Fragment>
            <Grid container>
                <Grid item xs={12} className={classes.topText}>
                    <Typography variant="subtitle1">Add New User(s)</Typography>
                </Grid>
                <Grid container item xs={12} direction="row" alignItems="center">
                    <Grid item xs={5} className={classes.boxPadding}>
                        <TextField
                            value={emails}
                            variant="outlined"
                            size="small"
                            label="Enter one or more emails"
                            error={false}
                            required
                            fullWidth/>
                    </Grid>
                    <Grid item xs={5} className={classes.boxPadding}>
                        <TextField
                            value={Access.full}
                            variant="outlined"
                            size="small"
                            label="Choose access level"
                            select required fullWidth>
                            <MenuItem key={"full"} value={Access.full}>
                                FULL
                            </MenuItem>
                            <MenuItem key={"limited"} value={Access.limited}>
                                LIMITED
                            </MenuItem>
                            <MenuItem key={"read-only"} value={Access.readOnly}>
                                READ ONLY
                            </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant={"outlined"} disabled={true}>Send Invites</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}

// @ts-ignore
AddUsers.whyDidYouRender = true;

export default AddUsers;