
import { useContext } from 'react';

import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

import { qrCodeImage } from "../../constants/data";

import { AccountContext } from '../../context/AccountProvider';

import { addUser } from '../../service/api';

import { GoogleLogin } from '@react-oauth/google';

import jwt_decode from 'jwt-decode';

const Components = styled(Box)`
    display: flex
`
const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`
const QRCode = styled('img')({
    height: 264,
    width: 300,
    margin: '50px 10px 0 150px' //200px -> 50px
});

const Title = styled(Typography)`
    font-size: 26px;
    color: #41525D;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;
`
const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #3B4A54
    }
`

const dialogStyle = {
    height: '96%',
    marginTop: '8%',
    width: '70%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
    backgroundColor: 'none'
}

const NeedHelp = styled(Typography)`
    font-size: 15px;
    color: #0074c4;
    font-weight: 100;
`


const LoginDialog = () => {    

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }

    const onLoginError = (res) => {
        console.log('Login Failed ', res);
    }
    
    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            <Components>
                <Container>
                    <Title> Use MyChat WebApp on your Computer</Title>
                    <StyledList>
                        <ListItem>1. Open MyChat on your Computer.</ListItem>
                        <ListItem>2. Tap on Gmail Account. </ListItem>
                        <ListItem>3. Select Gmail Account.</ListItem>
                        <ListItem>4. Open Your Account on MyChat App and Enjoy it.</ListItem>
                    </StyledList>
                    <br></br><br></br><br></br><br></br>
                    <NeedHelp>Need help to get started?</NeedHelp>
                    
                </Container>   
                <Box style={{position: 'relative'}}>
                    <QRCode src={qrCodeImage} alt="logo"/>
                    <Box style={{position: 'relative', top:'10%', transform: 'translateX(37%)'}}> 
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box> 

            </Components>   
        </Dialog>
    )
}

export default LoginDialog;