
import { emptyChatImage } from "../../../constants/data";

import { Box, Typography, styled, Divider } from "@mui/material";

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100vh;

`;

const Container = styled(Box)`
    padding: 0 200px;
`

const Image = styled('img')({
    width: 400,
    marginTop: 20,
});


const Title = styled(Typography)`
    font-size: 32px;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weightL 300;
    color: #41525d;
    
`
const SubTitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-weightL 400;
    font-family: inherit;
`

const StyledDivider = styled(Divider)`
    margin: 20px 0;
    opacity: 0.6;
`

const EmptyChat = () => {

    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="image" />
                <Title>MyChat App</Title>
                <SubTitle>Now send and receive messages with MyChat App.</SubTitle>
                <SubTitle>Use MyChat on Multiple linked devices at the same time.</SubTitle>
                <StyledDivider/>
                <SubTitle>Send Documents from desktop with MyChat App. Get it here.</SubTitle>
            </Container>
        </Component>
    )   
}

export default EmptyChat;