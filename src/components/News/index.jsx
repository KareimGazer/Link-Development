import { useEffect, useState } from "react"
import { getNews, getNewsCategories } from "../../utils"

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
                    onClick={() => { setSelectedCategory(category.id); console.log(category.id) }}
                    className="filter-btn"
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
                                <h3><a href="https://linkdevelopment.com/" className="article-desc">{newsItem.title}</a></h3>
                                <p className="article-date">{newsItem.publishedDate}</p>
                                <div className="cols-2">
                                    <p className="article-category">
                                        {categories.filter(category => category.id === newsItem.categoryID)[0]?.name}
                                    </p>
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

export default News