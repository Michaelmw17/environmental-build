import React, {Suspense} from 'react';
import { useAppContext } from '../../store';
import Footer from '../Footer'
import Spinner from 'react-bootstrap/Spinner'
import MyComp from '../MyComp/myComp'
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

    const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    }));


export default function Profile() {
    const classes = useStyles();
    const [authState] = useAppContext();

        return (
        <div className='outerContainer'>
            <div className={classes.root}>
                        <div className="mx-auto col-12">
                            <div className="ProfileEco">
                                <Link to="/" >
                                    <Suspense fallback={
                                                <Spinner animation="border" />
                                                }>
                                                    <MyComp /> 
                                        </Suspense>
                                </Link>
                            </div>
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
            <Avatar>F</Avatar>
            </Grid>
                    <Grid item xs zeroMinWidth>
                        <label>First Name</label>
                <Typography noWrap>{authState.user.first_name}</Typography>
            </Grid>
            </Grid>
        </Paper>
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
                <Avatar>L</Avatar>
            </Grid>
                    <Grid item xs>
                        <label>Last Name</label>
                <Typography noWrap>{authState.user.last_name}</Typography>
            </Grid>
            </Grid>
        </Paper>
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
                <Avatar>E</Avatar>
            </Grid>
                    <Grid item xs>
                        <label>Email</label>
                    <Typography>{authState.user.email}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            <Footer />
                </div>
                </div>
            </div>
    );
}