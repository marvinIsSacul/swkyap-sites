import React from 'react';

import { Theme, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Box, IconButton, Typography, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import AbstractComponent from './AbstractComponent';


interface Props {
    classes: any,
}

interface State {
    currentNavItem: number,
}

enum NavItem {
    HOME,
    PRICING,
}

interface MenuItem {
    title: string;
    icon: string;
}

class Header extends AbstractComponent<Props, State, any> {
    state: State;
    private primaryMenuItems: MenuItem[] = [
        {
            title: 'Sites',
            icon: '',
        },
    ];
    private secondaryMenuItems: MenuItem[] = [
        {
            title: 'Pricing',
            icon: 'star',
        },
        {
            title: 'About',
            icon: 'info',
        },
    ];
    
    constructor(props: Props) {
        super(props);
        
        this.state = {
            currentNavItem: NavItem.HOME,
        }
    }

    render() {
        const { currentNavItem } = this.state;
        const { classes } = this.props;

        return (
            <Box>
                <AppBar className={classes.appbar} position="sticky">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Sites
                        </Typography>
                        <Box>
                            {
                                this.secondaryMenuItems.map((item: MenuItem) => (
                                    <Button color="inherit">
                                        <Icon className={classes.menuIcon}>{item.icon}</Icon>
                                        <Typography className={classes.menuTitle}>{item.title}</Typography>
                                    </Button>
                                ))
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

const useStyles = (theme: Theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar: {
        backgroundColor: '#fff',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 0.10,
      color: theme.typography.body1.color,
    },
    menuTitle: {

    },
    menuIcon: {
        marginRight: theme.spacing(1),
        color: theme.typography.body1.color,
    }
});

export default withStyles(useStyles)(Header);
