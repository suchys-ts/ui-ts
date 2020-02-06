import React, {FC, useState} from "react";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Chip, Container, Typography} from "@material-ui/core";
import AddUsers from "./AddUsers";
import Axios from "./Axios";
import UserItem from "./UserItem";

/* invitation status */
export type State = 'invited' | 'active';

/* assigned access */
export enum Access {
    full='full',
    limited='limited',
    readOnly='read-only'
}

/* user definition */
export interface User {
    email: string;
    accessLevel: Access;
    state: State;
}

export interface Http {
    readonly getUsers: () => User[];
    readonly getUser: (email: string) => User | undefined;
    readonly setStatus: (email: string, status: State) => User | undefined;
    readonly inviteUsers: (email: string[], accessLevel:Access) => User[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
       mainContainer: {
           paddingTop: theme.spacing(3),
       },
       topText: {
           paddingBottom: theme.spacing(1),
       },
       header: {
           backgroundColor: '#eeeeee',
           color: '#767676',
           textTransform: 'uppercase',
           paddingLeft: theme.spacing(.75),
       }
    }),
);

const Root: FC = () => {
    const classes = useStyles();
    const users: User[] = [];
    return (
        <Container maxWidth="md" className={classes.mainContainer}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h5" className={classes.topText}>User Accounts</Typography>
                </Grid>
                <Grid item xs={12}>
                    <AddUsers/>
                </Grid>
                <Grid container item xs={12} direction="row" alignItems="flex-start" className={classes.mainContainer}>
                    <Grid item xs={1}>
                        <Typography variant="subtitle1">My team</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Chip size="small" color="primary" label={users.length}/>
                    </Grid>
                </Grid>
                <Grid container item xs={12} direction="row" alignItems="flex-start" className={classes.mainContainer}>
                    <Grid item xs={4}>
                        <Typography variant="subtitle2" className={classes.header}>User</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle2" className={classes.header}>Access</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle2" className={classes.header}>Actions</Typography>
                    </Grid>
                </Grid>
                {/* render user here */}
            </Grid>
        </Container>
    );
};

export default Root;