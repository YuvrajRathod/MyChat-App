
import { useContext, useState } from 'react';

import { Box, Typography, styled } from '@mui/material';

import { Search, MoreVert } from '@mui/icons-material';
import { AccountContext } from '../../../context/AccountProvider';

import { Menu, MenuItem } from '@mui/material';

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color; #4A4A4A;
`
const Header = styled(Box)`
    height: 44px;
    background-color: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'
});

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const Status = styled(Typography)`
    margin-left: 12px !important;
    font-size: 12px;
    color: rgb(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 24px;
        color: #000;
    }
`;



const ChatHeader = ({ person }) => {

    const { activeUsers } = useContext(AccountContext);

    const [open, setOpen] = useState(null);
    const handleClose = () => {
        setOpen(null);
    }
    const handClick = (e) => {
        setOpen(e.currentTarget);
    }

    return (
        <Header>
            <Image src={person.picture} alt="dp" />
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
            </Box>
            <RightContainer>
                <Search/>
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
                <MenuOption onClick={handleClose}>Contact Info</MenuOption>
                <MenuOption onClick={handleClose}>Select Message</MenuOption>
                <MenuOption onClick={handleClose}>Close Chat</MenuOption>
                <MenuOption onClick={handleClose}>Mute Notifications</MenuOption>
                <MenuOption onClick={handleClose}>Clear Chat</MenuOption>
                <MenuOption onClick={handleClose}>Delete Chat</MenuOption>
                <MenuOption onClick={handleClose}>Report</MenuOption>
                <MenuOption onClick={handleClose}>Block</MenuOption>
            </Menu>
        </>
            </RightContainer>
        </Header>
    )
}

export default ChatHeader;