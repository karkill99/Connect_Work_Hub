
// import { Text , Button} from "react-native"
import { NativeBaseProvider, Box } from "native-base";
import Tabs from "../bottemNavigation/Tabs";

export default function Customer(){
    return(
        // <>
        // <Text>Hello i am Customer</Text>
        
        
        // </>
        <NativeBaseProvider>
        <Box>Hello world</Box>
             <Tabs />
      </NativeBaseProvider>
    )
}