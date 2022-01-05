import { Box, Text } from "@chakra-ui/react";
import image from "../images/pattern-bg.png"

const Header = () => {
    return (
        <Box as="header" className="header" marginX="auto" pos={"relative"} top="-2.5rem" width={"100vw"} maxWidth={"100rem"} height="19rem" bgImage={image} bgPos={"center"} bgSize={"cover"}>
            <Box as="nav" color={"#fff"} height="4rem">
                <Text textTransform={"capitalize"} pt="3rem" fontWeight={"600"} fontSize={"33px"} color="#fff" textAlign={"center"}>IP address tracker</Text>
            </Box>

            <Box margin={"auto"} width="70%" height="10rem" mt="3rem">
                <Box as="input" height="3rem" width="100%"></Box>
            </Box>
        </Box>
    )
}

export default Header;