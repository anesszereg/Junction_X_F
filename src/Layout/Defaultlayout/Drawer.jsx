
import { Box, Button, ListItem } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

import logo from '../../assets/Svgs/logo.svg'
import book from '../../assets/Svgs/Drawer/book.svg'
import setting from '../../assets/Svgs/Drawer/settings.svg'
import message from '../../assets/Svgs/Drawer/message-square.svg'
import trending from '../../assets/Svgs/Drawer/trending.svg'
import users from '../../assets/Svgs/Drawer/users.svg'
import home from '../../assets/Svgs/Drawer/home.svg'
import bookW from '../../assets/Svgs/Drawer/bookW.svg'
import settingW from '../../assets/Svgs/Drawer/settingsW.svg'
import messageW from '../../assets/Svgs/Drawer/messageW.svg'
import trendingW from '../../assets/Svgs/Drawer/trendingW.svg'
import usersW from '../../assets/Svgs/Drawer/usersW.svg'
import homeW from '../../assets/Svgs/Drawer/homeW.svg'

function Drawer() {
    const location = useLocation();

    const Routes = [
        {
            name: 'Home',
            activeIcon: homeW,
            icon: home,
            path: '/AdultDashboard'
        },
        {
            name: 'GameOne',
            activeIcon: bookW,
            icon: book,
            path: '/AdultDashboard/Gameone'
        },
        {
            name: 'Setting',
            activeIcon: settingW,
            icon: setting,
            path: '/AdultDashboard/setting'
        },
        {
            name: 'Message',
            activeIcon: messageW,
            icon: message,
            path: '/AdultDashboard/message'
        }, {
            name: 'Trending',
            activeIcon: trendingW,
            icon: trending,
            path: '/AdultDashboard/trending'
        }, {
            name: 'Users',
            activeIcon: usersW,
            icon: users,
            path: '/AdultDashboard/users'
        },
    ]

    return (
        <Box sx={{
            height: '100vh',
            width: '120px',
            borderRight: "1px solid #e5e5e5",
            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.10)'
        }}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} paddingTop={'64px'}>
                <img src={logo} alt="" />
            </Box>

            <Box display={'flex'} flexDirection={'column'} marginTop={'120px'}>
                {
                    Routes.map((item, index) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <ListItem sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: 'center'
                            }} key={index}>
                                <NavLink to={item.path} style={{ textDecoration: "none" }}>
                                    <Button style={{
                                        backgroundColor: isActive ? '#5200FF' : "white",
                                        gap: "48px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: 'center',
                                        borderRadius: '6.4px',
                                        width: '64px',
                                        height: '64px'
                                    }}>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            cursor: 'pointer'
                                        }}>
                                            <img src={isActive ? item.activeIcon : item.icon} alt="" />
                                        </Box>
                                    </Button>
                                </NavLink>
                            </ListItem>
                        );
                    })
                }
            </Box>
        </Box>
    )
}

export default Drawer;
