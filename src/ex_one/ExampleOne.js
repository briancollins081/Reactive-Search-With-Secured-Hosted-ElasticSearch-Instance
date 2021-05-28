/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  DataSearch,
  MultiList,
  ReactiveBase,
  ReactiveList,
  ResultList,
} from "@appbaseio/reactivesearch";
import parseHTML from "html-react-parser";
import { DAYS_OF_THE_WEEEK, MONTH_OF_THE_YEAR } from "../consts";

const ExampleOne = () => {
  const onData = (searchItem) => {
    // console.log(searchItem);
    // return <div>{parseHTML(searchItem.post)}</div>
    // Check data and extract your information here i.e. images, stars, ratings, authors
    const imageUrl =
      "https://twaa.s3.fr-par.scw.cloud/posts/7523740510212292292903089790949086898421760o.jpg";

    return (
      <ReactiveList.ResultListWrapper>
        <ResultList key={searchItem._id}>
          <ResultList.Image
            src={searchItem.mediaurl || searchItem.mediathumbnail || imageUrl}
          />
          <ResultList.Content>
            <ResultList.Title>{parseHTML(searchItem.post)}</ResultList.Title>
            <ResultList.Description>
              <div className="row">
                <div className="d-flex justify-content-start mb-2">
                  <div className="text-muted">
                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;
                    {searchItem.PostLikes.length}
                  </div>
                  &nbsp;
                  <div className="text-muted">
                    <i className="fa fa-comments" aria-hidden="true"></i>&nbsp;
                    {searchItem.PostComments.length}
                  </div>
                </div>

                <figure
                  class="figure d-flex justify-content-space-evenly"
                  style={{ width: "12rem" }}
                >
                  <img
                    src={searchItem.User.profilepicture}
                    class="figure-img img-rounded rounded"
                    alt="..."
                    style={{
                      width: "3rem",
                      marginRight: "8px",
                    }}
                  />
                  <figcaption class="figure-caption text-start pl-2">
                    <p>@{searchItem.User.twaausername}</p>
                    <p>{searchItem.User.username}</p>
                  </figcaption>
                </figure>
              </div>
            </ResultList.Description>
          </ResultList.Content>
        </ResultList>
      </ReactiveList.ResultListWrapper>
    );
  };
  return (
    <div className="container-fluid">
      <ReactiveBase
        // app="articles,counsellors,events,forums,groupsopen,groupsprivate,mentees,mentors,organizations,speakers,timelineposts,tstoreproducts,tstoreservices,twaabooks,users,videos"
        app="timelineposts"
        url={`http://127.0.0.1:9200`}
        // credentials={`${process.env.REACT_APP_ELASTIC_USER_NAME}:${process.env.REACT_APP_ELASTIC_USER_PASSWORD}`}
        // credentials={"elastic:bR4GQWvXFpL8tPrD9Jjd"}
        // headers={{
        //   Authorization:
        //     "T3hiV3JYa0JKMmNkX1pXMm83dEY6dUJNX28wY3RRR2VlMUh0VFp3OU8tdw==",
        // }}
        transformRequest={(request) => {
          let headers = request.headers;
          // console.log({ headers });
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
                placeholder="Search Zara"
                dataField={["*"]}
                defaultValue={"Zara"}
                highlightField="post"
                autosuggest={true}
                searchInputId="NameSearch"
                iconPosition="left"
                showFilter={true}
                showVoiceSearch
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
        <div className="row">
          <div className="col-8 col-lg-3 col-md-3 col-sm-4 scroll">
            <div className="box mt-4">
              <MultiList
                dataField="creationYear"
                title="Creation Year"
                componentId="creationYearReactor"
                placeholder="Filter by Year"
                showFilter={true}
                showSearch={false}
                selectAllLabel="All Years"
                filterLabel="Creation Year"
                react={{
                  and: ["nameReactor"],
                }}
              />
            </div>
            <div className="box mt-4">
              <MultiList
                dataField="creationMonth"
                title="Creation Month"
                componentId="creationMonthReactor"
                placeholder="Filter by Month"
                showFilter={true}
                showSearch={false}
                selectAllLabel="All Months"
                filterLabel="Creation Month"
                react={{
                  and: ["nameReactor"],
                }}
                renderItem={(label, count, isSelected) => (
                  <div className="d-flex justify-content-between w-100">
                    <div>{MONTH_OF_THE_YEAR[+label]}</div>
                    <div className="ml-auto text-muted">{count}</div>
                  </div>
                )}
              />
            </div>
            <div className="box mt-4">
              <MultiList
                dataField="creationDay"
                title="Creation Day"
                componentId="creationDayReactor"
                placeholder="Filter by Day"
                showFilter={true}
                showSearch={false}
                selectAllLabel="All Days"
                filterLabel="Creation Days"
                react={{
                  and: ["nameReactor"],
                }}
                renderItem={(label, count, isSelected) => (
                  <div className="d-flex justify-content-between w-100">
                    <div>{DAYS_OF_THE_WEEEK[+label]}</div>
                    <div className="ml-auto text-muted">{count}</div>
                  </div>
                )}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-8 scroll">
            <ReactiveList
              componentId="queryResult"
              dataField={["*"]}
              from={0}
              size={15}
              renderItem={onData}
              pagination={true}
              react={{
                and: [
                  "creationYearReactor",
                  "creationMonthReactor",
                  "creationDayReactor",
                  "deliveringNowReactor",
                  "bookingReactor",
                  "deliveryReactor",
                  "tableBookinReactor",
                  "nameReactor",
                  "RangeSliderSensor",
                ],
              }}
              renderError={(error) => (
                <div>
                  Something went wrong with ResultList!
                  <br />
                  Error details
                  <br />
                  {JSON.stringify(error)}
                </div>
              )}
            />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6" />
        </div>
      </ReactiveBase>
    </div>
  );
};

export default ExampleOne;
