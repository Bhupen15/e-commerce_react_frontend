import axios from 'axios';



export const base_url = ()=>{

    return ("http://localhost:5002/");
}

export const register = async (data:object) =>{

    return axios.post(base_url()+ "register",data);
}


export const login = async (data:object) =>{
    console.log("-----------data----",data)

    return axios.post(base_url()+ "login",data);
}



export const addProduct = async (data:object) =>{

    return axios.post(base_url()+ "add-product",data);
}

export const productList = async () =>{
   
    const getToken  = localStorage.getItem("token");
   

    return axios.get(base_url()+ "product-list" , {headers: {Authorization: getToken}} );
}
export const deleteproduct = async (id: any) =>{

    return axios.delete(base_url()+ `deleteproduct/${id}`);
}
export const updateproduct = async (id: any, data:any) =>{

    return axios.put(base_url()+ `updateproduct/${id}`, data);
}
export const singleproduct = async (id: any) =>{

    return axios.get(base_url()+ `singleproduct/${id}`);
}
export const searchProduct = async (key: any) =>{

    return axios.get(base_url()+ `search/${key}`);
}