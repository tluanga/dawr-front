import axios from "axios";

export const login = (payload) => {
  return  axios.post("http://localhost:8000/api/token", {
      username: payload.username,
      password: payload.password,
    }).then(response=>{
        localStorage.setItem('accessToken',response.data.access)
        localStorage.setItem('refreshToken',response.data.refresh)
        return response.data
    })
};

export const logout=()=>{
    localStorage.removeItem('user')
}