import { Box, Text } from "@chakra-ui/react";
import Header from "../Components/Header";
import { useState } from "react";

const IndexPage = () => {  
  const [Data, SetData] = useState("")
  const [IP, setIP] = useState("8.8.8.8")
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_z6bnD7zIz7VsqGpoIW5n357PNQ9um&ipAddress=${IP}`, {
      "method": "GET"})
      .then(res => res.json())
      .then(data => SetData(data.isp))

      


  return ( 
      <Box>
        <Header IP ={IP} setIP = {setIP}/>     
        <Box as="main" width={"100vw"} maxWidth={"100rem"} height="27rem" bgColor="red"position={"relative"} top={"-3rem"} >
          <Box as="section" width={"80%"} margin="auto" height="10rem" pos={"relative"} top="-5rem" bgColor="#fff" borderColor={"#000"} boxShadow={"dark-lg"} borderRadius={"12px"} display={"flex"} justifyContent={"space-between"}>
               <Box as="article" width="20%" margin="auto">
                 <Text as="h5" textTransform={"uppercase"} color={"#707070"}>ip address</Text>
                 <Text as = "h2">{IP}</Text>
               </Box>
               <Box height="80%" mt="1.5%" width=".15rem"  bgColor={"#D8D8D8"}> </Box>
               <Box as="article" width="20%" margin="auto">
               <Text as="h5" textTransform={"uppercase"} color={"#707070"}>location</Text>
                 <Text as = "h2">{IP}</Text>
               </Box>

               <Box height="80%" mt="1.5%" width=".15rem" mx="2rem" bgColor={"#D8D8D8"}> </Box>

               <Box as="article" width="20%" margin="auto">
               <Text as="h5" textTransform={"uppercase"} color={"#707070"}>timezone</Text>
                 <Text as = "h2">{IP}</Text>
               </Box>

               <Box height="80%" mt="1.5%" width=".15rem" mx="2rem" bgColor={"#D8D8D8"}> </Box>

               <Box as="article" width="20%" margin="auto">
                <Text as="h5" textTransform={"uppercase"} color={"#707070"}>isp</Text>
                 <Text as = "h2">{Data}</Text>
               </Box>
          </Box>
        </Box>
      </Box>
   );
}
 
export default IndexPage;