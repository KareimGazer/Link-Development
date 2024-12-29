import './services.css';
import { FaArrowRight } from "react-icons/fa6";

import { useState, useEffect } from "react";
import { getThingsWeDo} from '../../utils'

const Services = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getThingsWeDo()
                setData(data)
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="services parallax top-bg-container gallery" id="about">
            
            <div className='services__content'>
            <div className='bg-text'></div>
                <h2 className='services__title'>{data?.title}</h2>
                <p className='services__subtitle'>{data?.excerpt}</p>
            </div>

            {data.items?.map((item, index) => {
                const {id, imgUrl, title, description} = item
                return (
                    <div key={id} className='services__item'>
                        <img src={imgUrl} alt={title} className='services__image'/>
                        <h3 className='services__item__title'>{title}</h3>
                        <div className='lurk'> <FaArrowRight className='icon'/> <p>Read more</p> </div>
                        {/* <p className='services__item-description'>{description}</p> */}
                    </div>
                )
            })}

        </div>
    );
}

export default Services;