import axios from "axios";

const useFetchNews = async () => {
  const data = await axios.get(
    `https://newsapi.org/v2/everything?q=tesla&from=2021-07-02&sortBy=publishedAt&apiKey=170f254648c146d1b4131a2ec576187a`
  );
  return data;
};

export default useFetchNews;
