import { SiGoogledisplayandvideo360 } from "react-icons/si";
import './Hero.css';

const Hero = ({data, index, setIndex}) => {

    const {brief, title, imgUrl, imgSrc, itemUrl, category, videoUrl, colorCode} = data[index] || {}

    return (
        <main className="grid-container grid-container--hero flow">
            <div className="indicators">
                {data?.sort((a, b) => a.order - b.order).map((item, i) => (
                    <button key={i} className={`indicator ${index === i ? 'active' : ''}`} onClick={() => setIndex(i)} style={{backgroundColor: `#${item.colorCode}`}}>
                        <span className="sr-only">{item.category}</span>
                    </button>
                ))}
            </div>
            <article className="hero-details flow">
                <header className="flow">
                    <p className="hero__subtitle" style={{color: `#${colorCode}`}}>{category}</p>
                    <h1 className="hero__title">{title}</h1>
                </header>
                
                <p className="hero__desc">{brief}</p>

                <div className='hero__cta'>
                    <a href={itemUrl} className="info-btn cta-btn">Find out more</a>
                    <a href={videoUrl} className="video-btn cta-btn"><SiGoogledisplayandvideo360 /></a>
                </div>
            </article>

            <picture>
                <source srcSet={imgSrc} type="image/webp"/>
                <img src={imgUrl} alt="Douglas Hurley"/>
            </picture>
        </main>
    );
}

export default Hero;
