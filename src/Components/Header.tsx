import React from 'react';
import {Box, Typography} from "@material-ui/core"
import Marquee from "react-fast-marquee";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginRight: 40
    },
  }));

function Header(){
    const classes = useStyles();

    return(
        <Box>
            <Marquee style={{backgroundColor: '#eff4f4', top: 0, padding: 10,color: '#0d1016'}} gradient={false} pauseOnHover speed={80}>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
                <Typography style={{marginRight: 60}}>DATA/USDT</Typography>
            </Marquee>
            <AppBar position="static" style={{backgroundColor: 'white', width: '100%', marginTop: 10, color: '#1c2951'}} elevation={0}>
                <Toolbar>
                    <Box style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            justifyContent: 'space-between'
                        }}>

                        <Box style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <img src="https://coindcx.com/assets/new-home-page/Fold1_Logo.svg" alt="logo"/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                            Trade
                            </Typography>
                            <Typography variant="h6" className={classes.title}>
                            Earn
                            </Typography>
                            <Typography variant="h6" className={classes.title}>
                            QuickBuy
                            </Typography>
                            <Typography variant="h6" className={classes.title}>
                            DCX Learn
                            </Typography>
                        </Box>
                        <Box style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <img src="https://coindcx.com/assets/new-home-page/Fold1_Support.svg" alt="mic" style={{marginRight: 30}} />
                            <img src="https://coindcx.com/assets/new-home-page/Fold1_NotificationRead.svg"  alt="noto" style={{marginRight: 30}} />
                            <Button variant="outlined" style={{backgroundColor: 'white', color: '#1c2951', marginRight: 20}} size="large" disableElevation>Login</Button>
                            <Button variant="contained" style={{backgroundColor: '#fa4a29', color: 'white', marginRight: 20}} size="large" disableElevation>Register</Button>

                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header