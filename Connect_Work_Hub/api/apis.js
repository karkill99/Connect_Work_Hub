import axios from "axios";
export const logInApi =  async () => {

    try {
        const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signin', {
            username: userName,
            password: password
        });

        const { token } = response.data

        // localStorage.setItem('token', token);
        console.log('token', token);

    } catch (error) {
        console.error('Error logging in:', error);
        console.log('Error response data:', error.response.data);
        console.log('Error status:', error.response.status);
      
    }

}

export const signUpApi1 = async () => {
    try {
      const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step1', {
      username:userName,
      password:password,
      mobile:mobile,

      });
      
     console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }      
export const signUpApi2 = async () => {
    try {
      const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step2', {
      username:userName,
      password:password,
      mobile:mobile,

      });
     
    } catch (error) {
      console.log(error)
    }
  }      
export const signUpApi3 = async () => {
    try {
      const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step3', {
      username:userName,
      password:password,
      mobile:mobile,

      });
     
    } catch (error) {
      console.log(error)
    }
  }      