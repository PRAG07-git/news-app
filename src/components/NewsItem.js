import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  // Clean fallback image if imageUrl is missing
  const defaultImg =
    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&auto=format&fit=crop";

  return (
    <div>
      <div className="card h-100 shadow-sm">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={!imageUrl ? defaultImg : imageUrl}
          className="card-img-top"
          alt="News"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="mt-2">
            <p className="card-text mb-2">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {date ? new Date(date).toUTCString() : "Recent"}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
