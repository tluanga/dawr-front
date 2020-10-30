import axios from axios

// get all current price 
const accessToken=localStorage.getItem('accessToken')

axios.interceptors.request.use(
    config=>{
        config.headers.authorization=`Bearer ${accessToken}`
        return config;
    },
    error=>{
        return Promise.reject(error)
    }
)

export const baseUrl='http://localhost:8000'

export const getList= async (url)=>{
    const _url= new URL(url,baseUrl)
    console.log('token-----',accessToken)
    console.log(_url)
    try{
        const response= await axios.get(_url)
                        .then(data=>data.data)
                       
        return response
    }
    catch(err){
        return err
    }
}