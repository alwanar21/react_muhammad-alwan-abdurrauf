import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import swal from 'sweetalert';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

let myuuid = uuidv4();

export default function CreateProduct() {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [formInputData, setformInputData] = useState(
        {
            productId: '',
            productName: '',
            productCategory: '',
            productImage: '',
            productFreshness: '',
            productDesc: '',
            productPrice: ''
        }
    );

    const handleChange = (event) => {
        const newInput = (data) => ({ ...data, [event.target.name]: event.target.value })
        setformInputData(newInput)
        console.log(`${event.target.name}  :  ${event.target.value}`);
        console.log(formInputData)
    }

    //delete data in mockAPi
    const handleDelete = (index) => {
        console.log(index);
        swal({
            title: "Perhatian",
            text: "Apakah anda ingin menghapus data ini?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const deleteProducts = async () => {
                        try {
                            const response = await axios.delete(`https://642ccaf566a20ec9ce8e7674.mockapi.io/api/products/${index}`)
                        } catch (error) {
                            console.error(error);
                        }
                    }
                    deleteProducts();
                    setProducts(products.filter((product) => product.id !== index));
                    swal("Data anda berhasil dihapus!!!", {
                        icon: "success",
                    });
                    console.log(products);
                } else {
                    swal("Data anda tidak dihapus");
                }
            });

    }

    // //submit data
    const addProduct = async () => {
        try {
            const { data } = await axios.post(`https://642ccaf566a20ec9ce8e7674.mockapi.io/api/products`, {
                productId: myuuid,
                productName: formInputData.productName,
                productCategory: formInputData.productCategory,
                productImage: formInputData.productImage,
                productFreshness: formInputData.productFreshness,
                productDesc: formInputData.productDesc,
                productPrice: formInputData.productPrice
            })
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
        if (checkEmptyInput) {
            addProduct()
            const newData = (data) => ([...data, formInputData])
            setProducts(newData);
            const emptyInput = {
                productId: '',
                productName: '',
                productCategory: '',
                productImage: '',
                productFreshness: '',
                productDesc: '',
                productPrice: ''
            }
            setformInputData(emptyInput)
            swal("Good job!", "Product Berhasil ditambahkan", "success")
        }
    }

    //getData
    const getProducts = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get('https://642ccaf566a20ec9ce8e7674.mockapi.io/api/products');
            console.log(response.data);
            setIsLoading(false)
            setProducts(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getProducts()
    }, [])



    return (
        <>
            <ProductForm handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} />
            <ProductList products={products} handleDelete={handleDelete} isLoading={isLoading} />
        </>
    )
}
