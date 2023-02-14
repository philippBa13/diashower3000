import { ShuffleOutlined, RepeatOutlined } from "@mui/icons-material";
import { Grid, Typography, TextField, ToggleButton, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { useState } from "react";


export const Settings = () => {

    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(false);

    const [bgcolor, setBgcolor] = useState('#ffffff')

    const [transition, setTransition] = useState("");


    return (
        <Grid container direction="column" spacing={1}>
            <Grid item xs={"auto"}>
                <h3>
                    Einstellungen
                </h3>
            </Grid>
            <Grid item xs={"auto"}>
                <Typography>Zeitintervall (Sekunden)</Typography>
                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
            </Grid>

            <Grid item xs={"auto"}>
                <Typography>Wiedergabe</Typography>
                <Grid container direction="row" spacing={1} alignItems="stretch">
                    <Grid item>
                        <ToggleButton
                            value="shuffle"
                            selected={shuffle}
                            onChange={() => {
                                setShuffle(!shuffle);
                            }}
                        >
                            <ShuffleOutlined />
                        </ToggleButton>
                    </Grid>

                    <Grid item>
                        <ToggleButton
                            value="random"
                            selected={repeat}
                            onChange={() => {
                                setRepeat(!repeat);
                            }}
                        >
                            <RepeatOutlined />
                        </ToggleButton>
                    </Grid>


                    <Grid item xs={"auto"}>
                        <FormControl fullWidth sx={{ minWidth: 120 }} size="medium">
                            <InputLabel id="transition-select-label">Übergang</InputLabel>
                            <Select
                                labelId="transition-select-label"
                                id="transition-select"
                                value={transition}
                                label="Übergang"
                                onChange={(e) => setTransition(e.target.value)}
                            >
                                <MenuItem value={"No"}>Keine</MenuItem>
                                <MenuItem value={"fadeaway"}>Ausblenden</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                
            </Grid>

            <Grid item xs={"auto"}>
                <Typography>Diashow-Hintergrund</Typography>
                <MuiColorInput fallbackValue="rgb(255, 255, 255)" format="rgb" value={bgcolor} onChange={(newValue) => setBgcolor(newValue)} />
            </Grid>

        </Grid >

    )
}