/* eslint-disable jsx-a11y/anchor-is-valid */
import { DataSearch, ReactiveBase } from "@appbaseio/reactivesearch";

const ExampleOne = () => {
  return (
    <div>
      <ReactiveBase
        app="articles,counsellors,events,forums,groupsopen,groupsprivate,mentees,mentors,organizations,speakers,timelineposts,tstoreproducts,tstoreservices,twaabooks,users,videos"
        url={`http://127.0.0.1:9200`}
        credentials={`${process.env.ELASTIC_USER_NAME}:${process.env.ELASTIC_USER_PASSWORD}`}
        // headers={{
        //   Authorization:
        //     "T3hiV3JYa0JKMmNkX1pXMm83dEY6dUJNX28wY3RRR2VlMUh0VFp3OU8tdw==",
        // }}
        transformRequest={(request) => ({
          ...request,
          headers: {
            ...request.headers,
            Authorization:
              "Basic T3hiV3JYa0JKMmNkX1pXMm83dEY6dUJNX28wY3RRR2VlMUh0VFp3OU8tdw==",
          },
        })}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                    {error}
                  </div>
                )}
              />
            </div>
          </div>
        </nav>
      </ReactiveBase>
    </div>
  );
};

export default ExampleOne;
