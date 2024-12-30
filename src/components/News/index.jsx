import { useEffect, useState } from "react"
import { getNews, getNewsCategories } from "../../utils"
import { SlCalender } from "react-icons/sl";
import { FaHeart, FaRegHeart,  } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

import './News.css'

const News = () => {
    const [news, setNews] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('0')

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsData = await getNews()
                setNews(newsData)
            }
            catch (error) {
                console.error(error)
            }
        }

        const fetchCategories = async () => {
            try {
                const categoriesData = await getNewsCategories()
                setCategories([{ id: '0', name: "All news" }, ...categoriesData])
            }
            catch (error) {
                console.error(error)
            }
        }

        fetchCategories()
        fetchNews()
    }, [])
    return (
        <div className="news" id="news">
            <div className="news__heading">
                <p className="news__subtitle">Media</p>
                <h2 className="news__title">Top News</h2>
            </div>
            <div className="news__filters">
                {categories.map((category) => <button key={category.id}
                    onClick={() => { setSelectedCategory(category.id)}}
                    className={'filter-btn ' + (selectedCategory === category.id ? 'filter-btn-active' : '')}
                >{category.name}</button>)}
            </div>
            <div className="news__grid">
                {
                    news.filter(newsItem => newsItem.categoryID === selectedCategory || selectedCategory === '0')
                        .map((newsItem) => (
                        <div key={newsItem.id} className="news__article">
                            <div className="article__avatar-container">
                                <img className="article__avatar" src={newsItem.urlToImage} />
                            </div>
                            <div className="article-body">
                                <h3  className="article-desc"><a href="https://linkdevelopment.com/">{newsItem.title}</a></h3>
                                <div className="article-date">
                                    <SlCalender className="article-icon" />
                                    <div>{newsItem.publishedDate}</div>
                                </div>
                                <div className="cols-2">
                                    <p className="article-category">
                                        {categories.filter(category => category.id === newsItem.categoryID)[0]?.name}
                                    </p>
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    )).slice(0, 6)
                }
            </div>
            <button className="more-news-btn">View All News</button>
        </div>
    )
}

const SocialLinks = () => {
    const [liked, setLiked] = useState(false)
    const [shared, setShared] = useState(false)
    return (
        <div className="social-links">
            <div onClick={() => setLiked(!liked)}>{liked ? <FaHeart /> : <FaRegHeart />}</div>
            <div>
                <CiShare2 onClick={() => setShared(!shared)} />
                {shared && <div className="share-links">
                    <img src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=210" alt="facebook" />
                    <img src="https://yt3.googleusercontent.com/ecGSwfk4BtzH_-0VPoZE9zw1dKdOyHvvacJaJ8Is0N0vhh2MIBSkWAy1yPf3MSoiZzLL0C3uF6Q=s900-c-k-c0x00ffffff-no-rj" alt="twitter" />
                    <img src="https://i.pinimg.com/originals/f1/ba/a8/f1baa8c8c56cb9840b44f39628915e37.jpg" alt="gmail" />
                </div>}
            </div>
        </div>
    );
}

export default News