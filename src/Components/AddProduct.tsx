import React, { useState } from 'react'
import { addProduct } from '../Services/AdminServices';

function AddProduct() {


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const addProducts = async () => {

        // console.log(name, price, category, company, userId);

        let lsdata: any = localStorage.getItem("user");
        // console.log(lsdata, "line 15");

        const userId = JSON.parse(lsdata)._id;

        console.log(userId);

        let data = {
            'name': name,
            'price': price,
            'category': category,
            'company': company,
            'userId': userId
        }
        const result = await addProduct(data);
        console.log(result);

        // localStorage.setItem("user", JSON.stringify(data));


    }
    return (


        <section className=" "  >
            <h1>Add Product</h1>
            <div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                        <div className="card rounded-3">
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Add product</h3>

                                <form className="px-md-2">
                                    <div className="form-outline mb-4">
                                        <input type="text" id="fname" name='name' value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" />
                                        <label className="form-label" htmlFor="fname">Product name</label>

                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form3Example1q" value={price} onChange={(e) => { setPrice(e.target.value) }} className="form-control" name='price' />
                                        <label className="form-label" htmlFor="form3Example1q">Price</label>

                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="form3Example1q" value={category} onChange={(e) => { setCategory(e.target.value) }} className="form-control" name='category' />
                                        <label className="form-label" htmlFor="form3Example1q">Category</label>

                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form3Example1q" value={company} onChange={(e) => { setCompany(e.target.value) }} className="form-control" name='company' />
                                        <label className="form-label" htmlFor="form3Example1q">Company</label>

                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button onClick={addProducts} type="submit" className="btn btn-primary btn-lg ">Add product</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddProduct;