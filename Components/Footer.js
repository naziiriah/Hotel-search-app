import { Box, Text } from"@chakra-ui/react";


const Footer = () => {
    return ( 
        <Box as="footer"    margin="auto" width={"100vw"} maxWidth={"100rem"} height="6rem" bgColor={"navy"}>
            <Text as="h5"  fontWeight={"500"} textAlign={"center"} color="#fff">copyright, 2022</Text>
        </Box>
     );
}
 
export default Footer;