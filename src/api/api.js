import axios from 'axios'

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

export const baseUrl='http://127.0.0.1:8000/'
// export const baseUrl='http://lalfakawma14.pythonanywhere.com/'

// export const baseUrl='http://fakawma.pythonanywhere.com/'


export const getList=url=>{
    const _url=new URL(url,baseUrl)
    return axios.get(_url)
            .then(data=>data.data)
            .catch(err=>err)
}


// export const baseUrl='http://3.17.148.232/'
// export const getList= async (url)=>{
//     const _url= new URL(url,baseUrl)
    
//     try{
//         const response= await axios.get(_url)
//                         .then(data=>data.data)
                       
//         return response
//     }
//     catch(err){
//         return err
//     }
// }

// -----get a single Item by its id
export const getItem=async params =>{
    
    const __url=new URL((params.url+'/'+params.id),baseUrl)
    console.log(__url)
    try{
        const response=await axios.get(__url)
            .then(data=>data.data)        
        return response
    }
    catch(err){
        return err
    }
}



// --Search an Item in a api server
export const searchItem=async params =>{
    
    const __url=new URL(params.url,baseUrl)
    
    params.searchParam.map(p1=> __url.searchParams.append(p1.key,p1.value))
    
    try{
        const response=await axios.get(__url)
            .then(data=>data.data)        
        return response
    }
    catch(err){
        return err
    }
}


// -----Create an Item
export const create=async({url,data})=>{
    const __url=new URL(url+'/',baseUrl)  
    try{
        const response=await axios.post(__url,data)
        return response.data
    }
    catch(err){
        return err
    }
    
    
}


//---update api function with params expected, url, data
// expect url='gst' id=1 data=data
export const update=async({url,id,data})=>{
    
    const __url=new URL(url+'/'+id+'/',baseUrl)
    
    try{
        const response=await axios.patch(__url,data)
        return response.data
    }
    catch(err)
    {
        console.log(err)
        return(err)

    }
}


