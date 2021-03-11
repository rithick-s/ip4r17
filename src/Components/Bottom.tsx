import React from 'react'
import {Box, Typography} from '@material-ui/core'

function Bottom(){
    return(
        <Box>
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                color: 'white',
                backgroundColor: '#fa4a29'
            }}>
            <img src="https://coindcx.com/assets/new-home-page/AppImage.png" alt="mic" style={{marginRight: 30}} />
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}>
                <Typography variant="h5">Download our Android App to </Typography>
                <Typography variant="h5">enjoy trading on the go...</Typography>
                <Typography variant="h5">wherever, whenever.</Typography>
                <img src="https://coindcx.com/assets/new-home-page/google-play-badge.png" alt="mic" style={{marginRight: 30}} />
            </Box>

            </Box>

            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#1c2951',
                color: 'white',
                padding: 50,
            }}>
                <img src="https://coindcx.com/assets/new-home-page/CD_LogoWhite-Tag.svg" alt="mic" style={{marginRight: 30}} />
                <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Typography variant="h5">CoinDCX is a safe and simple gateway to</Typography>
                    <Typography variant="h5">build a strong crypto portfolio for everyone.</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Bottom;