import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";


const NewListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen  and (max-width : 768px ){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`


const NewsList = () =>{
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
    
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=fc08b0280b9e409da625ec17b595c647'
      )
      setArticles(response.data.articles)
      console.log(response.data.articles)
    } catch (e){
      console.log(e)
    } setLoading(false)
  }
    fetchData();
},[])

if(loading) {
  return<NewListBlock>대기중...</NewListBlock>
}

if(!articles){
  return null
}
  return(
    <NewListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewListBlock>
  )
}

export default NewsList;