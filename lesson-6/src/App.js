import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Loader from "react-loader-spinner";
import axios from "axios";

// dadaff635ff942c2ae85697f25fc3548
// 60e2bc569b994741968d5baf33e9aab8
// e2c83af80c914772a72937010152f1b5

const CustomLoader = () => (
  <Loader
    type="Grid"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={30000} //3 secs
  />
);

const fetchNews = async (page = 1) => {
  return await axios.get(
    `https://newsapi.org/v2/everything?q=tesla&from=2021-06-21&sortBy=publishedAt&apiKey=de78e3c3937f4e8b853145aebc374ac8&page=${page}`
  );
};

const errorsStatus = {
  400: "что-то ",
  410: "что-то ",
  432: "что-то ",
  404: "что-то ",
};

class App extends React.Component {
  state = {
    news: [],
    errors: { message: "", status: "" },
    loading: true,
    currentPage: 1,
  };

  componentDidMount() {
    (async () => {
      try {
        const news = await fetchNews();
        console.log("news", news);
        this.setState({ news: news.data.articles, loading: false });
      } catch (error) {
        console.log("errror", error.response);
        this.setState({
          errors: {
            message: error.response.data.message,
            status: error.response.status,
          },
          loading: false,
        });
      }
    })();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      (async () => {
        try {
          this.setState({ loading: true });
          const news = await fetchNews(this.state.currentPage);
          this.setState({
            news: [...prevState.news, ...news.data.articles],
            loading: false,
          });
        } catch (error) {
          this.setState({
            errors: {
              message: error.response.data.message,
              status: error.response.status,
            },
            loading: false,
          });
        }
      })();
    }
  }

  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  render() {
    const { loading, errors, news } = this.state;

    return (
      <>
        <div className="App">
          <header className="App-header">
            {loading && <CustomLoader />}
            {errors.message ? (
              <h2>{errors.message}</h2>
            ) : (
              <>
                {news.map((article) => (
                  <h2>{article.content}</h2>
                ))}
                <button onClick={this.nextPage}>load more ...</button>
              </>
            )}

            {/* {loading ? (
              <CustomLoader />
            ) : errors.message ? (
              <h2>{errors.message}</h2>
            ) : (
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            )} */}
          </header>
        </div>
      </>
    );
  }
}

export default App;

// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>

// const counter = (a: number, b: number): number => {
//   if (typeof a === "string" || typeof b === "string") {
//     return null;
//   }
//   return a + b;
// };

// counter(2, "2");
