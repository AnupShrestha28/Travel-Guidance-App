import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Guidance
                </Typography>  

                <Box display="flex">
                    {/* <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography> */}

                    {/* <Autocomplete> */}
                        {/* <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>

                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput}} />
                        </div> */}
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;