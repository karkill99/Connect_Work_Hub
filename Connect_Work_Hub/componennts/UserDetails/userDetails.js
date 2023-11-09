import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
  NativeBaseProvider,
  Select,
  Checkbox,
  Button,
} from "native-base";
import { Text } from "react-native";
// import { useEffect } from "react";

export default function UserDetails({ navigation }) {
  const handleFirstForm = async () => {
    try {
      const response = await axios.post(
        "https://connect-hub-backend.onrender.com/auth/signup",
        {
          username: userName,
          password: password,
          usertype: userType,
          name: name,
          mobile: mobile,
          alternatemobile: alternateMobile,
          address: address,
          state: state,
          city: city,
          pinCode: pinCode,
          gender: gender,
        }
      );
      console.log("Response:", response.data);
      // Handle successful response
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Submit Your details</FormControl.Label>
              <Input type="text" placeholder="Your Name" />
              <Input type="number" placeholder="Mobile" />
              <Input type="number" placeholder="Alternate Mobile" />
              <Input type="text" placeholder="Address" />

              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
              <Text>Select State</Text>
              <Select>
                <Select.Item label="Rajasthan" value="rj" />
                <Select.Item label="Maharashtra" value="mh" />
                <Select.Item label="Assam" value="as" />
                <Select.Item label="Delhi" value="dl" />
                <Select.Item label="Uttar Pradesh" value="up" />
              </Select>
              <Input type="text" placeholder="City / District" />

              <Input type="number" placeholder="Pincode" />
              <Text>Select Gender</Text>

              <Checkbox value="one">Male</Checkbox>
              <Checkbox value="two">Female</Checkbox>
              <Checkbox value="three">Other</Checkbox>
            </Stack>
            <Button
              onPress={() => {
                handleFirstForm;
                navigation.navigate("userExperties");
              }}
            >
              Next
            </Button>
          </FormControl>
        </Box>
      </Box>
      ;
    </NativeBaseProvider>
  );
}
