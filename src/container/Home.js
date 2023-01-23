import axios from 'axios';
import { useEffect, useState } from 'react';
import logo from "../assets/1.png"
import { useAppContext } from '../context/favContext';
import { BsFillHeartFill } from "react-icons/bs"





const Main = () => {

    const [data, setData] = useState([]);
    const {  addToFav } = useAppContext();



    const getData = async () => {
        try {

            const response = await axios.get("https://multiverse-ott.onrender.com/api/allMusic");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className='main-con'>
                <div className='log'>
                    <img src={logo} alt='logo ' />
                </div>
                <div className='quteos m-5'>
                    <h1 className='txt mt-5'>Your favourite tunes</h1>
                    <h4>All Sun and all Moon</h4>
                </div>
            </div>
            <div className='data-con '>
                <h3 className='rel'>RELEASED THIS WEEK</h3><span><div className='line'></div></span>
            </div>
            <div className='api-data'>
                {data.map((res) => {
                    return (
                        <>
                            <div key={res.id} >
                                <div className='box'>
                                    <img src={res.poster} alt='artwork' className='art' />
                                    <p>{res.title}</p>
                                    <BsFillHeartFill size={20} className="heart" onClick={() => addToFav(res)} />
                                   
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Main