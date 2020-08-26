
import React from 'react';

import { Theme, withStyles } from '@material-ui/core/styles';
import { Divider, Box, Typography } from '@material-ui/core';

import AbstractComponent from './AbstractComponent';
import Constants  from '../helpers/constants';


interface Props {
    classes: any,
}

interface State {

}


class Footer extends AbstractComponent<Props, State, any> {
    
    public render() {
        const { classes } = this.props;

        return (
            <Box className={classes.root}>
                {/* <Divider classes={{root: classes.divider}} /> */}
                <Typography className={classes.bottomText} align={"center"}>
                    &#169; {new Date().getFullYear()}
                    &nbsp; {Constants.APP_NAME}.
                    All rights reserved.
                </Typography>
            </Box>
        )
    }
}


const useStyles = (theme: Theme) => ({
    root: {
        backgroundColor: '#333333',
        padding: theme.spacing(2),
    },
    divider: {
      borderColor: '#444',
    },
    bottomText: {
        color: '#fefefe'
    }
});

export default withStyles(useStyles)(Footer);