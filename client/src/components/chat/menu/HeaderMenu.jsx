import { useState } from 'react';

import { MoreVert } from '@mui/icons-material';

import { Menu, MenuItem, styled } from '@mui/material';

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color; #4A4A4A;
`


const HeaderMenu = ({ setOpenDrawer }) => {

    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handClick = (e) => {
        setOpen(e.currentTarget);
    }

    return  (
        <>
            <MoreVert onClick={handClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={() => {handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>New group</MenuOption>
                <MenuOption onClick={handleClose}>Archived</MenuOption>
                <MenuOption onClick={handleClose}>Starred messages</MenuOption>
                <MenuOption onClick={() => {handleClose(); setOpenDrawer(true); }}>Settings</MenuOption>
                <MenuOption onClick={handleClose}>Log out</MenuOption>
            </Menu>
        </>
    )

}

export default HeaderMenu;