import { Grid } from '@mui/material';

import { createRoot } from 'react-dom/client';
import { Settings } from './settings';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

    <Grid container spacing={1}>
        <Grid item xs={2.5}>
            <Settings />
        </Grid>
        <Grid item xs={9.5}>
            <img src="/img/winter_mountains_comic.jpg">
            </img>
        </Grid>

    </Grid >

);
