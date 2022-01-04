import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
    return (
        <Box as="header"   margin="auto" width={"100vw"} maxWidth={"100rem"} height="12rem" bgColor={"navy"}>
            <Box width="90%"marginX={"auto"}  height={["5rem"]} display={"flex"} justifyContent={"space-between"}>
                <Text as ="h1" textTransform={"capitalize"} fontWeight={"600"} fontSize={"33px"} color="#fff">
                    reserved.com
                </Text>
                
            </Box>
            <Box as="nav" height={["5rem"]} width="90%"marginX={"auto"}color="#fff" fontSize={"20px"} display={"flex"} justifyContent={"space-between"}>
                <Box as="ul" display={"inline-flex"} textDecoration={"none"} listStyleType={"none"}>
                    
                    <Link href="/car-rental"><Box as="li" mx="1rem" textTransform={"capitalize"}><Box as="a">flights</Box></Box></Link>
                </Box>

            </Box>
        </Box>
    )
}

export default Header;