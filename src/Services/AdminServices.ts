import axios from 'axios';




export const base_url = ()=>{

    return ("http://localhost:5002/");
}

export const register = async (data:object) =>{

    return axios.post(base_url()+ "register",data);
}


export const login = async (data:object) =>{

    return axios.post(base_url()+ "login",data);
}



export const addProduct = async (data:object) =>{
    const token =localStorage.getItem("token") as string;
   
    const getToken  =`bearer `+ JSON.parse(token);
    return axios.post(base_url()+ "add-product",data, {headers: {Authorization: getToken}});
}

export const productList = async () =>{
   const token =localStorage.getItem("token") as string;
 
    const getToken  =`bearer `+ JSON.parse(token);
    return axios.get(base_url()+ "product-list" , {headers: {Authorization: getToken}} );
 

    
}
export const deleteproduct = async (id: any) =>{
    const token =localStorage.getItem("token") as string;
   
    const getToken  =`bearer `+ JSON.parse(token);
    return axios.delete(base_url()+ `deleteproduct/${id}`, {headers: {Authorization: getToken}});
}
export const updateproduct = async (id: any, data:any) =>{
    const token =localStorage.getItem("token") as string;
   
    const getToken  =`bearer `+ JSON.parse(token);
    return axios.put(base_url()+ `updateproduct/${id}`, data, {headers: {Authorization: getToken}});
}
export const singleproduct = async (id: any) =>{
    const token =localStorage.getItem("token") as string;
   
    const getToken  =`bearer `+ JSON.parse(token);
    return axios.get(base_url()+ `singleproduct/${id}`, {headers: {Authorization: getToken}});
}

export const searchProduct = async (key: any) =>{
    const token =localStorage.getItem("token") as string;
   
    const getToken  =`bearer `+ JSON.parse(token);

    return axios.get(base_url()+ `search/${key}`, {headers: {Authorization: getToken}});
}
export const imageUpload = async (data :any) =>{
    const token =localStorage.getItem("token") as string;
   
    const getToken  =`bearer `+ JSON.parse(token);
    // ,{headers: {Authorization: getToken}}
    return axios.post(base_url()+ `upload-image`,data ,{headers: {Authorization: getToken}});

}
export const getme = async () =>{
    const token =localStorage.getItem("token") as string;
   
    const getToken  =`bearer `+ JSON.parse(token);
    // ,{headers: {Authorization: getToken}}
    return axios.get(base_url()+ `me` ,{headers: {Authorization: getToken}});

}