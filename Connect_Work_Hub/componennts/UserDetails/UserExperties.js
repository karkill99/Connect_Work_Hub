import { Checkbox, VStack, Box, NativeBaseProvider, HStack, Text, Button } from "native-base";

export default function UserExperties({navigation}){

    return (
        <NativeBaseProvider>
    <Box alignItems="center">
        <Text >Electronics</Text>
        <HStack>
       <VStack>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       </VStack>
       <VStack marginLeft={5}>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       </VStack>
       </HStack>
       <Text>Home repair</Text>
       <HStack>
       <VStack>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       </VStack>
       <VStack marginLeft={5}>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       <Checkbox size="sm" value="green">
         Experties
        </Checkbox>
       </VStack>
       </HStack>
       <Button
         onPress={()=>{
            navigation.navigate("worker")
        }}
       >Done</Button>
      </Box>;

        </NativeBaseProvider>
    )
}