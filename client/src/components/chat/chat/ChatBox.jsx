
import { useContext, useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { AccountContext } from '../../../context/AccountProvider';

import { getConversation } from '../../../service/api';

//component
import ChatHeader from './ChatHeader';
import Messages from './Messages';


const ChatBox = () => {

    const { person, account } = useContext(AccountContext);
    
    const [conversation, setConversation] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub , receiverId: person.sub});
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub, account.sub]); 
    // accout.sub add kiya h upr wali line me

    return (
        <Box style={{ height: '75%'}}>
            <ChatHeader person={person}/>
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox;