/* eslint-disable jsx-a11y/anchor-is-valid */
import { DataSearch, ReactiveBase } from "@appbaseio/reactivesearch";

const ExampleOne = () => {
  const onData = (searchItem) => {
    // Check data and extract your information
  }
  return (
    <div className="container-fluid">
      <ReactiveBase
        // app="articles,counsellors,events,forums,groupsopen,groupsprivate,mentees,mentors,organizations,speakers,timelineposts,tstoreproducts,tstoreservices,twaabooks,users,videos"
        app="articles"
        url={`http://127.0.0.1:9200`}
        // credentials={`${process.env.REACT_APP_ELASTIC_USER_NAME}:${process.env.REACT_APP_ELASTIC_USER_PASSWORD}`}
        // credentials={"elastic:bR4GQWvXFpL8tPrD9Jjd"}
        // headers={{
        //   Authorization:
        //     "T3hiV3JYa0JKMmNkX1pXMm83dEY6dUJNX28wY3RRR2VlMUh0VFp3OU8tdw==",
        // }}
        transformRequest={(request) => {
          let headers = request.headers;
          console.log({ headers });
          // headers.Authorization = `Basic ${process.env.REACT_APP_ELASTIC_API_KEY}`;
          headers.Authorization = `ApiKey ${process.env.REACT_APP_ELASTIC_API_KEY}`;
          return {
            ...request,
            headers: {
              ...headers,
            },
          };
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
          <a className="navbar-brand" href="#">
            Yelp Search
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-lg-7 dataSearch">
              <DataSearch
                componentId="nameReactor"
                placeholder="Search TWAA Zara"
                dataField="name"
                searchInputId="NameSearch"
                iconPosition="right"
                renderError={(error) => (
                  <div>
                    Something went wrong with DataSearch
                    <br />
                    Error details
                    <br />
                    {JSON.stringify(error)}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="links">
            <a
              target="_blank"
              href="https://github.com/appbaseio/reactivesearch"
              className="btn text-primary"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>&nbsp; Github
            </a>
            &nbsp;&nbsp;
            <a
              target="_blank"
              href="https://opensource.appbase.io/reactive-manual/"
              className="btn text-primary"
              rel="noreferrer"
            >
              <i className="fas fa-book" aria-hidden="true" />
              &nbsp;Documentation
            </a>
          </div>
        </nav>
      </ReactiveBase>
    </div>
  );
};

export default ExampleOne;
