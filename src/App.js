import "./App.css";
import SearchWrapper from "./components/SearchWrapper";
// import { SearchWrapper } from "reactive-search-app";

function App() {
  return (
    <main className="container-fluid">
      <SearchWrapper />
      {/* <SearchWrapper
          ELASTIC_SEARCH_APP_URL={process.env.REACT_APP_ELASTIC_SEARCH_ENDPOINT}
          ELASTIC_SEARCH_API_KEY={process.env.REACT_APP_ELASTIC_API_KEY}
          INDICES_STRING_COMMA_SEPARATED="articles,counsellors,events,forums,groupsopen,groupsprivate,mentees,mentors,organizations,speakers,timelineposts,tstoreproducts,tstoreservices,twaabooks,users,videos"
        /> */}
    </main>
  );
}

export default App;
