import React, { useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import swal from 'sweetalert';


export default function CreateProduct() {
    const [tableData, setTableData] = useState([])

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
    const addData = (productName, productCategory, productImage, productFreshness, productArea, productPrice) => {
        const formData = {
            productName: productName,
            productCategory: productCategory,
            productImage: productImage,
            productFreshness: productFreshness,
            productArea: productArea,
            productPrice: productPrice
        }
        const newData = (data) => ([...data, formData])
        setTableData(newData);
    }


    return (
        <>
            <ProductForm addData={addData} />
            <ProductList tableData={tableData} handleDelete={handleDelete} />
        </>
    )
}
