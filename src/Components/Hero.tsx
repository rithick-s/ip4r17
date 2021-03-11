import React from "react";
import {Box, Typography,TextField, Button, InputAdornment} from "@material-ui/core"

function Hero(){
    return(
        <Box style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
        }}>
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginLeft: '5%'
            }}>
                <Typography variant="h3">Buy/Sell Cryptocurrencies with Ease</Typography>
                <Typography variant="h6">Build your portfolio with us.</Typography>
                <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '100%'}}>
                    <TextField 
                        placeholder="Enter your email"
                        disabled
                        style={{
                            width: '70%',
                            border: '1px solid grey',
                            padding: 15
                        }}
                        InputProps={{disableUnderline: true}}
                    />
                    <Button variant="contained" style={{marginLeft: 20,backgroundColor: '#fa4a29', color: 'white', marginRight: 20, padding: 20}} size="large" disableElevation>Get Started</Button>
                </Box>
                <Typography variant="h6" style={{marginTop: 10}}>New to Crypto? Click Here</Typography>
        <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 20}}>
            <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <img src="https://coindcx.com/assets/new-home-page/Fold1_Instant.svg" alt="mic" style={{marginRight: 30}} />
                <Box>Instant Deposits & Withdrawals with Zero Fees</Box>
            </Box>
            <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <img src="https://coindcx.com/assets/new-home-page/Fold1_Secure.svg" alt="mic" style={{marginRight: 30}} width={25} />
                <Box>Users Funds Secured and Insured with BitGo</Box>
            </Box>
             <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <img src="https://coindcx.com/assets/new-home-page/Fold1_ISO.svg" alt="mic" style={{marginRight: 30}} width={25}/>
                <Box>ISO Certified Processes with 24*7 support</Box>
            </Box>
            </Box>
            </Box>


            <Box style={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                width: '50%',
                borderRadius: 20,
                backgroundColor: '#eff4f4',
                padding: 50,
                right: 0
                }}>
                        <Typography variant="h6">Buy BTC</Typography>
                        <Typography variant="h6">1 BTC = ₹ 4195298.53</Typography>

                        <TextField 
                        placeholder="0.00"
                        disabled
                        style={{
                            width: '100%',
                            border: '1px solid grey',
                            margin: 20,
                            padding: 15
                        }}

                        InputProps={{
                            endAdornment: <InputAdornment position="end">INR</InputAdornment>,
                            disableUnderline: true
                        }}
                    />
                     <TextField 
                        placeholder="0.00"
                        disabled
                        style={{
                            width: '100%',
                            border: '1px solid grey',
                            padding: 15
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">BTC</InputAdornment>,
                            disableUnderline: true
                        }}
                    />
                    <Button variant="contained" style={{marginLeft: 20, marginTop: 20,backgroundColor: '#fa4a29', color: 'white', marginRight: 20, padding: 20}} size="large" disableElevation>Buy BTC</Button>
            </Box>

        </Box>
    )
}

export default Hero