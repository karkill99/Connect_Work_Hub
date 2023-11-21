import { NativeBaseProvider, Box } from "native-base";
import { TabForCustomer } from "../bottemNavigation/Tabs";

export default function  Customer(){

    return(
       
     <NativeBaseProvider>
        <Box>Hello world im customer</Box>
            <TabForCustomer />
      </NativeBaseProvider>
    )
}