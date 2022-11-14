import axios from "axios";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import usePromise from "../lib/usePromise";

const NewListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
     return axios.get(
       `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=fc08b0280b9e409da625ec17b595c647`
     );
  }, [category]);

  // 대기중일때

  if (loading) {
    return <NewListBlock>대기중...</NewListBlock>;
  }

  // 아직 response 값이 설정되지 않았을때
  if (!response) {
    return null;
  }

  // 에러가 발생헀을 때
  if (error) {
    return <NewListBlock>에러발생!</NewListBlock>;
  }
  // response값이 유효할 때
  console.log(response);
  const { articles } = response.data;
  return (
    <NewListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewListBlock>
  );
};

export default NewsList;
