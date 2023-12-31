
import { useContext } from 'react';

import { AppBar, Toolbar, styled, Box } from '@mui/material';

import { AccountContext } from '../context/AccountProvider';

//components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';

const Components = styled(Box)`
    height: 100vh;
    background: #DCDCDC
`

const Header = styled(AppBar)`
    height: 100%;
    background-color: #137DC5;
    boxShadow: none;
 `
 const LoginHeader = styled(AppBar)`
    height: 100%;
    background-color: #137DC5;
    boxShadow: none;
 ` 

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <Components>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar>
                            
                        </Toolbar>
                    </Header>
                    <ChatDialog /> 
                </>                
                :
                <>
                    <LoginHeader>
                        <Toolbar>

                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog/>
                </>
            }
        </Components>
    )
}

export default Messenger;