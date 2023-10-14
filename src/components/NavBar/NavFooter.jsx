import { useEffect, useState } from "react";


const NavFooter = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
        fetch('nav.json')
        .then(res => res.json())
        .then(result => setData(result))
    },[])
    return (
        <div className=" bg-[#ECEAE3] flex flex-col md:flex-row gap-4 lg:gap-10 px-4 md:px-8 lg:px-40 xl:px-48 py-2 lg:py-8 ">
            {
                data.map(data => <div key={data.id}>
                    <img className=" w-14 h-14 " src={data.image} alt="" />
                    <h1 className=" text-2xl xl:text-3xl font-rancho font-normal">{data.title}</h1>
                    <p className=" text-sm text-[#514f4f] text-justify">{data.details}</p>
                </div> )
            }
        </div>
    );
};

export default NavFooter;