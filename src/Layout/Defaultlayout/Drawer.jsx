import {Box, ListItem, ListItemButton} from "@mui/material"
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
import {Link, useLocation} from "react-router-dom";
import {useState} from "react"

function Drawer() {

    const [selectedItem, setSelectedItem] = useState("");
    const currentPath = useLocation().pathname;

    const Routes = [
        {
            name: 'Home',
            activeIcon: homeW,
            icon: home,
            path: '/'
        },
        {
            name: 'Book',
            activeIcon: bookW,
            icon: book,
            path: '/login'
        },
        {
            name: 'setting',
            activeIcon: settingW,
            icon: setting,
            path: '/setting'
        },
        {
            name: 'message',
            activeIcon: messageW,
            icon: message,
            path: '/message'
        }, {
            name: 'trending',
            activeIcon: trendingW,
            icon: trending,
            path: '/trending'
        }, {
            name: 'users',
            activeIcon: usersW,
            icon: users,
            path: '/users'
        },
    ]
    return (

        <Box sx={
            {
                height: '100vh',
                width: '120px',
                borderRight: "1px solid #e5e5e5",
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.10)'
            }
        }>
            <Box display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                paddingTop={'64px'}>

                <img src={logo}
                    alt=""/>
            </Box>

            <Box display={'flex'}
                flexDirection={'column'}
                marginTop={'120px'}>
                {
                Routes.map((item, index) => {
                    const handleItemClick = () => {
                        setSelectedItem(item.name);
                    };
                    const isActive = currentPath === item.path;

                    return (
                        <ListItem sx={
                                {


                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: 'center'
                                }


                            }
                            key={index}>
                            <Link to={
                                    item.path
                                }
                                style={
                                    {textDecoration: "none"}
                            }>
                                <ListItemButton style={
                                        {


                                            backgroundColor: isActive ? '#5200FF' : "white",
                                            gap: "48px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: 'center',
                                            borderRadius: '6.4px',
                                            width: '64px',
                                            height: '64px'
                                        }


                                    }
                                    onClick={handleItemClick}>
                                    <Box sx={
                                        {
                                            display: "flex",
                                            justifyContent: "center",
                                            cursor: 'pointer'
                                        }
                                    }>
                                        <img src={
                                                isActive ? item.activeIcon : item.icon
                                            }
                                            alt=""/>
                                    </Box>


                                </ListItemButton>
                            </Link>
                        </ListItem>
                    );
                })
            } </Box>


        </Box>

    )
}

export default Drawer
