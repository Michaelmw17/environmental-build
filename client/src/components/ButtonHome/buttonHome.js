
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

const images = [
    {
        url: './Images/image2.webp',
        title: 'About',
        width: '50%',
        siteUrl: "/about",
    },
    {
        url: './Images/image3.webp',
        title: 'Location',
        width: '50%',
        siteUrl: "/locations",
    },
    {
        url: './Images/image4.webp',
        src: './about',
        title: 'Enquire',
        width: '50%',
        siteUrl: "/enquire",
    },
    {
    url: './Images/image23.webp',
    title: 'Profile',
    width: '50%',
        siteUrl: "/userProfile",
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        alignItems: 'center',
      

        
    },
    image: {
        backgroundColor: 'transparent',
        position: 'relative',
        height: 150,
        marginBottom: "10px",
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 110,
            margin:'5px'
        },
        '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
            opacity: 0,
        },
        '& $imageMarked': {
            opacity: 0.15,
        },
        '& $imageTitle': {
            border: '4px solid currentColor',
        },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        borderRadius: "150px",
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: "150px",
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'absolute',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    }));

export default function ButtonBases() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        {images.map((image) => (
            <ButtonBase component={RouterLink} to={image.siteUrl}
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                width: image.width,
            }}
            >
            <span
                className={classes.imageSrc}
                style={{
                backgroundImage: `url(${image.url})`,
                }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
                >
                {image.title}
                <span className={classes.imageMarked} />
                </Typography>
            </span>
            </ButtonBase>
        ))}
        </div>
    );
    }