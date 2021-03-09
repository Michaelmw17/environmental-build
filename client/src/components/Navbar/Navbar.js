import React from 'react';
import {  useHistory } from 'react-router-dom';
import { useAppContext } from '../../store';
import { setUserLogout } from '../../actions';
import './style.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function Navbar() {
    const classes = useStyles();
    const history = useHistory();
    const [state, dispatch] = useAppContext();

    const handleLogOut = (e) => {
        e.preventDefault();
        setUserLogout(dispatch);
        history.push('/');
    };

    console.log({state});

    const loginRegLink = (
        <ul className="navbar-nav list-group list-group-horizontal">
            
                <li>
                <ThemeProvider theme={theme}>
                        <Button color="primary" variant="contained"  href="/login" className={classes.margin}>
                        Login
                        </Button>
                    </ThemeProvider>
            </li>
                <li>
                <ThemeProvider theme={theme}>
                        <Button color="primary" variant="contained"  href="/register" className={classes.margin}>
                        Register
                        </Button>
                    </ThemeProvider>
            </li>
            
            
        </ul>
    );
    const userLink = (
        <ul className="navbar-nav list-group list-group-horizontal ">
            <li>
                <ThemeProvider theme={theme}>
                        <Button color="primary" variant="contained" href="./" className={classes.margin}>
                        home
                        </Button>
                    </ThemeProvider>
            </li>
            <li>
                <ThemeProvider theme={theme}>
                        <Button color="primary" variant="contained"  href="./userProfile" className={classes.margin}>
                        DashBoard
                        </Button>
                    </ThemeProvider>
            </li>
            <li>
                <ThemeProvider theme={theme}>
                    <Button color="secondary" variant="contained"href="./"
                        className={classes.margin} 
                        id="logoutBtn"
                        data-toggle="modal"
                        data-target="#logoutModal"
                        onClick={handleLogOut}>
                        Logout
                        </Button>
                    </ThemeProvider>
            </li>
        </ul>
    );
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbar1">
                {state.isAuthenticated ? userLink : loginRegLink}
            </div>
        </nav>
    );
}

export default Navbar;
