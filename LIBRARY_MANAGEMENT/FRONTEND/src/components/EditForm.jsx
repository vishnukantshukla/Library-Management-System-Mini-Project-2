import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
const EditForm = () => {
    const Navigate=useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({
        image:' ',
        BookName:' ',
        PublishYear:' ',
        Price:' ',
        Quantity:' ',
        Desc:' '
    });
    useEffect(()=>{
         axios.get(`http://localhost:8080/books/`+id)
        .then(res=>{
            setData({...data,image:res.data.image,BookName:res.data.BookName,PublishYear:res.data.PublishYear,Price:res.data.Price
            ,Quantity:res.data.Quantity,Desc:res.data.Desc})
        })
    },[])
    async function handlesubmit(e) {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/books/`+id,{data});
        alert("Update Success");
        Navigate('/dashboard')
    }
  return (
    <div>
        <h1 className="text-[2.5rem] text-center">Edit Book</h1>
      <form className="max-w-md mx-auto border-solid border-4 border-gray-200 mt-4 p-5 rounded-lg" onSubmit={handlesubmit} method="POST">
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="image">Image Cover</label>
          <input
             className=" pl-[5px] w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={(e)=>setData({...data,image:e.target.value})}
            value={data.image}
            name="image"
            id="image"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="BookName">Book Title</label>
          <input
             className="pl-[5px]   w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={(e)=>setData({...data,BookName:e.target.value})}
            value={data.BookName}
            name="BookName"
            id="BookName"
            readOnly
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="PublishYear">Publish Year</label>
          <input
             className=" pl-[5px]  w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={(e)=>setData({...data,PublishYear:e.target.value})}
            value={data.PublishYear}
            name="PublishYear"
            id="PublishYear"
            readOnly
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="Price">Price</label>
          <input
             className="pl-[5px]   w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={(e)=>setData({...data,Price:e.target.value})}
            value={data.Price}
            name="Price"
            id="Price"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="Quantity">Quantity</label>
          <input
             className=" pl-[5px]  w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={(e)=>setData({...data,Quantity:e.target.value})}
            value={data.Quantity}
            name="Quantity"
            id="Quantity"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="Desc">Description</label>
          <input
             className="pl-[5px]  w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={(e)=>setData({...data,Desc:e.target.value})}
            value={data.Desc}
            name="Desc"
            id="Desc"
          />
        </div>
        <button className="text-[1.2rem] p-[.6rem] rounded-[1rem] bg-blue-400 " type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default EditForm