import React, { useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import swal from 'sweetalert';


export default function CreateProduct() {
    const [tableData, setTableData] = useState([])
    const [formInputData, setformInputData] = useState(
        {
            productName: '',
            productCategory: '',
            productImage: '',
            productFreshness: '',
            productArea: '',
            productPrice: ''
        }
    );

    const handleChange = (event) => {
        const newInput = (data) => ({ ...data, [event.target.name]: event.target.value })
        setformInputData(newInput)
        console.log(`${event.target.name}  :  ${event.target.value}`);
        console.log(formInputData)
    }

    //delete data
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
                    setTableData(tableData.filter((item, i) => i !== index));
                    swal("Data anda berhasil dihapus!!!", {
                        icon: "success",
                    });
                } else {
                    swal("Data anda tidak dihapus");
                }
            });

    }

    //submit data
    const handleSubmit = (event) => {
        event.preventDefault();
        const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
        if (checkEmptyInput) {
            const newData = (data) => ([...data, formInputData])
            setTableData(newData);
            const emptyInput = {
                productName: '',
                productCategory: '',
                productImage: '',
                productFreshness: '',
                productArea: '',
                productPrice: ''
            }
            setformInputData(emptyInput)
        }
    }


    return (
        <>
            <ProductForm handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} />
            <ProductList tableData={tableData} handleDelete={handleDelete} />
        </>
    )
}
