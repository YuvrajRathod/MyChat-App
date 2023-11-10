import { useContext, useState } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Chat as MessageIcon } from '@mui/icons-material';

import { AccountContext } from '../../../context/AccountProvider';


//components
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`
const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`
const Title = styled(Typography)`
    font-size: 35px;
    font-weight: 900;
    margin: 12px 0 10px 75px;
    color: #137dc5;
    
`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
});

const  Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);

    const toggleDrawer = () =>  {
        setOpenDrawer(true);
    }

    return (
        <>
            <Component>
                <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()}/>
                <Title>MyChat App</Title>
                <Wrapper>
                    <MessageIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer}/>
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>        
        </>
    )
}

export default Header;