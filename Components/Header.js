import { Box, Text } from "@chakra-ui/react";
import image from "../images/pattern-bg.png"

const Header = () => {
    return (
        <Box as="header" margin="auto" width={"100vw"} maxWidth={"100rem"} height="12rem" bgImage={image} bgPos={"center"} bgSize={"cover"}>


        </Box>
    )
}

export default Header;