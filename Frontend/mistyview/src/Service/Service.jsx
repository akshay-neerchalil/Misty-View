import axios from 'axios'

export const userLogin = async(data) => {
    try{
        const response = await axios.post("http://localhost:8000/login",data)
        return response
    }
    catch(error){
      console.log("error",error);
    }
}
