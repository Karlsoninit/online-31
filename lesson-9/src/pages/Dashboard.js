import { useEffect } from "react";
import { useFetchNews } from "../hooks";

const Dashboard = () => {
  const fetcher = useFetchNews();
  useEffect(() => {
    (async () => {
      const news = await fetcher;
      console.log(`news`, news);
    })();
  });
  return <h2>Dashboard</h2>;
};

export default Dashboard;
