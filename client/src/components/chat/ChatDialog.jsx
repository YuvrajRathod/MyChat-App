import { useContext } from 'react';

import { Dialog, Box, styled } from '@mui/material';

import { AccountContext } from '../../context/AccountProvider';

//components
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';
import ChatBox from './chat/ChatBox';
const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)`
    width: 30%;
    min-width: 450px;
`;
const RightComponent = styled(Box)`
    width: 70%;
    mid-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const dialogStyle = {
    height: '95%',
    width: '95%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 3,
    boxShadow: 'none',
    overflow: 'hidden',
};

const ChatDialog = () => {

    const { person } = useContext(AccountContext);
 
    return(
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
            maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    { Object.keys(person).length ? <ChatBox/> : <EmptyChat/>}
                </RightComponent>
            </Component>

        </Dialog>
    )
};


export default ChatDialog;