import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComp extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(
      props.category,
    )}`;
  }

  async updateNews() {
    this.setState({ loading: true });

    // Reliable CORS-Free Public Feed API
    const category = this.props.category || "general";
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;

    try {
      let response = await fetch(url);
      let parsedData = await response.json();

      const articlesList = parsedData.articles || [];
      this.setState({
        articles: articlesList,
        totalResults: parsedData.totalResults || articlesList.length,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ articles: [], loading: false });
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ hasMore: false });
  };

  render() {
    return (
      <>
        <h1
          className="text-center"
          style={{ margin: "20px 0px", marginTop: "80px" }}
        >
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles ? this.state.articles.length : 0}
          next={this.fetchMoreData}
          hasMore={false}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles &&
                this.state.articles.map((element, index) => {
                  return (
                    <div className="col-md-4 my-3" key={element.url || index}>
                      <NewsItem
                        title={
                          element.title
                            ? element.title.slice(0, 45) + "..."
                            : "No Title"
                        }
                        description={
                          element.description
                            ? element.description.slice(0, 88) + "..."
                            : "No Description Available"
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author || "Unknown"}
                        date={element.publishedAt}
                        source={element.source ? element.source.name : "News"}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default NewsComp;
