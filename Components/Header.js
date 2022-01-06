import { Box, Text, Button, Icon } from "@chakra-ui/react";
import image from "../images/pattern-bg.png"
import { IoIosArrowForward } from "react-icons/io"
import { useState } from "react";

const Header = ({IP, setIP}) => {

    const [value ,setValue] = useState(IP)

    return (
        <Box as="header" className="header" marginX="auto" pos={"relative"} top="-2.5rem" width={"100vw"} maxWidth={"100rem"} height="19rem" bgImage={image} bgPos={"center"} bgSize={"cover"}>
            <Box as="nav" color={"#fff"} height="4rem">
                <Text textTransform={"capitalize"} pt="3rem" transition={"ease-in"} transitionDuration={"2"} fontWeight={"600"} fontSize={"33px"} color="#fff" textAlign={"center"}>IP address tracker</Text>
            </Box>

            <Box margin={"auto"} width={["80%","80%","70%","60%"]} height="10rem" display={"flex"} mt="3rem" >
                <Box borderRadius={"6px"} as="input" height="3rem" width={["80%","80%"]} value={value} onChange={(e) => setValue(e.target.value)}></Box>
                <Button borderRadius={"3px"} _hover={{cursor:"pointer"}} width="4rem" bgColor={"#000"} height="3rem" onClick={() => setIP(value)}> <Icon as={ IoIosArrowForward } color="#fff"/></Button>
            </Box>
        </Box>
    )
}

export default Header;