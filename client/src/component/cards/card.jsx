import { useEffect, useState } from "react"
import "./card.css"
const Card = (link) => {

    const [data, setData] = useState({price:"", detail: "", img:""})

    const fetchData = async () => {
        const result = await fetch("http://localhost:3001/", {
            method: "POST",
            headers:{
            "content-type": "application/json"
            },
            body: JSON.stringify({url: link.link})
        })
        const res = await result.json()
        const {price, detail, img} = res
        setData({price, detail,img})
    }
    useEffect( () => {
        fetchData()
    }
    , []);

    return (
        <div className=" overflow-hidden card card-compact w-52 shadow-xl border-2 bg-primary-content  text-info-content   ">
        <figure className="overflow-hidden cards h-52  w-full" style={{
                backgroundImage: `url(${data.img})`
            }}></figure>
        <div className="card-body ">
            <h2 className="card-title text-sm font-thin   ">{data.detail}</h2>
            <p className="text-lg text-green-500">₹{data.price}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary btn-xs"> <a href={link.link}>Buy Now</a> </button>
            </div>
        </div>
        </div>
    )
}

export default Card