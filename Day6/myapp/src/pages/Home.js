import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';


const Home = () => {
    const Item = styled(Paper)(() => ({
        textAlign: 'center',
    }));
    return (
        <div>
            <Box sx={{ flexGrow: 1}}>
                <Grid container spacing={2} >
                    <Grid item xs={4}>
                        <Item >xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item >sx=4</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ textAlign: 'center', backgroundColor: 'orange'}}>Orange</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ textAlign: 'center', backgroundColor: 'red'}}>Red</Item>
                    </Grid>
                    
                </Grid>
            </Box>
        </div>

    )
}
export default Home;