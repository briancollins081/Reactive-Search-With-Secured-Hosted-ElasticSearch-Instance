"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactivesearch = require("@appbaseio/reactivesearch");

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _index = require("../../consts/index");

require("../styles/main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const SearchWrapper = _ref => {
  let {
    ELASTIC_SEARCH_APP_URL,
    ELASTIC_SEARCH_API_KEY,
    INDICES_STRING_COMMA_SEPARATED
  } = _ref;
  const history = (0, _reactRouterDom.useHistory)();

  const onData = searchItem => {
    var _searchItem$User, _searchItem$User2, _searchItem$User3, _searchItem$mentorshi, _searchItem$mentorshi2;

    let imageUrl = "https://twaa.s3.fr-par.scw.cloud/posts/7523740510212292292903089790949086898421760o.jpg";
    let searchTitle = "<p>TWAA content item</p>";
    let userProfilePicture = "https://twaa.s3.fr-par.scw.cloud/default.png";
    let twaaUsername = "TWAA User";
    let userName = "@anonymous";
    let itemPath = "/";
    const searchIndex = searchItem.searchIndex;
    userProfilePicture = (searchItem === null || searchItem === void 0 ? void 0 : (_searchItem$User = searchItem.User) === null || _searchItem$User === void 0 ? void 0 : _searchItem$User.profilepicture) || userProfilePicture;
    twaaUsername = (searchItem === null || searchItem === void 0 ? void 0 : (_searchItem$User2 = searchItem.User) === null || _searchItem$User2 === void 0 ? void 0 : _searchItem$User2.twaausername) || twaaUsername;
    userName = (searchItem === null || searchItem === void 0 ? void 0 : (_searchItem$User3 = searchItem.User) === null || _searchItem$User3 === void 0 ? void 0 : _searchItem$User3.username) || userName; // eslint-disable-next-line default-case

    switch (searchIndex) {
      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.articles:
      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.timelineposts:
        imageUrl = searchItem.mediaurl;
        searchTitle = searchItem.post;
        itemPath = "/timeline/posts/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.counsellors:
        imageUrl = searchItem.profilepicture;
        searchTitle = "<p>TWAA counsellor profile</p>";
        itemPath = "/viewprofile/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.events:
        imageUrl = searchItem.eventBanner;
        searchTitle = searchItem.eventName;
        itemPath = "/eventdetails/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.forums:
        imageUrl = searchItem.posterimage;
        searchTitle = searchItem.name + ": " + searchItem.about;
        itemPath = "/discussions/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.groupsopen:
        imageUrl = searchItem.groupbanner;
        searchTitle = searchItem.groupName + ": " + ((_searchItem$mentorshi = searchItem.mentorshipGroupDetail) === null || _searchItem$mentorshi === void 0 ? void 0 : _searchItem$mentorshi.introduction) || "";
        itemPath = "/grouptimeline/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.groupsprivate:
        imageUrl = searchItem.groupbanner;
        searchTitle = searchItem.groupName + ": " + ((_searchItem$mentorshi2 = searchItem.mentorshipGroupDetail) === null || _searchItem$mentorshi2 === void 0 ? void 0 : _searchItem$mentorshi2.introduction) || "";
        itemPath = "#";
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.mentees:
        imageUrl = searchItem.profilepicture;
        searchTitle = "<p>TWAA mentee profile</p>";
        itemPath = "/viewprofile/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.mentors:
        imageUrl = searchItem.profilepicture;
        searchTitle = "<p>TWAA mentor profile</p>";
        itemPath = "/viewprofile/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.organizations:
        imageUrl = searchItem.coverphoto;
        searchTitle = "<p>TWAA mentorship groups</p>";
        itemPath = "/aboutorganization/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.speakers:
        imageUrl = searchItem.speakerbanner;
        searchTitle = searchItem.name + ": " + searchItem.topics;
        itemPath = "/speakerprofile/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.tstoreproducts:
        imageUrl = searchItem.featuredphoto;
        searchTitle = searchItem.title;
        itemPath = "/tstore/products/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.tstoreservices:
        imageUrl = searchItem.featuredphoto;
        searchTitle = searchItem.title;
        itemPath = "/tstore/services/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.twaabooks:
        imageUrl = searchItem.cover;
        searchTitle = searchItem.name;
        itemPath = "/books/details/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.users:
        userProfilePicture = searchItem.profilepicture;
        twaaUsername = searchItem === null || searchItem === void 0 ? void 0 : searchItem.twaausername;
        userName = searchItem === null || searchItem === void 0 ? void 0 : searchItem.username;
        imageUrl = searchItem === null || searchItem === void 0 ? void 0 : searchItem.profilepicture;
        searchTitle = "<p>TWAA User: ".concat(searchItem.username, "</p>");
        itemPath = "/viewprofile/" + searchItem.id;
        break;

      case _index.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME.videos:
        imageUrl = searchItem.mediathumbnail;
        searchTitle = searchItem.post;
        itemPath = "/viewvideo/" + searchItem.id;
        break;
    }

    return /*#__PURE__*/_react.default.createElement(_reactivesearch.ReactiveList.ResultListWrapper, null, /*#__PURE__*/_react.default.createElement(_reactivesearch.ResultList, {
      key: searchItem._id,
      className: "cursor_pointer",
      onClick: () => {
        history.push(itemPath);
      },
      target: "_top",
      href: "#"
    }, /*#__PURE__*/_react.default.createElement(_reactivesearch.ResultList.Image, {
      className: "searchCardImg",
      src: imageUrl || "#"
    }), /*#__PURE__*/_react.default.createElement(_reactivesearch.ResultList.Content, null, /*#__PURE__*/_react.default.createElement(_reactivesearch.ResultList.Title, {
      className: "text-dec-none"
    }, (0, _htmlReactParser.default)(searchTitle || /*#__PURE__*/_react.default.createElement("p", null, "Item data"))), /*#__PURE__*/_react.default.createElement(_reactivesearch.ResultList.Description, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "d-block"
    }, /*#__PURE__*/_react.default.createElement("figure", {
      class: "figure d-flex justify-content-space-evenly",
      style: {
        width: "12rem"
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: userProfilePicture,
      class: "figure-img searchUserProfile",
      alt: "..."
    }), /*#__PURE__*/_react.default.createElement("figcaption", {
      class: "figure-caption text-start pl-2 text-dec-none"
    }, /*#__PURE__*/_react.default.createElement("p", null, "@", twaaUsername), /*#__PURE__*/_react.default.createElement("p", null, userName))))))));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-100 overflow-hidden"
  }, /*#__PURE__*/_react.default.createElement(_reactivesearch.ReactiveBase, {
    app: INDICES_STRING_COMMA_SEPARATED,
    url: ELASTIC_SEARCH_APP_URL,
    transformRequest: request => {
      let headers = request.headers;
      headers.Authorization = "ApiKey ".concat(ELASTIC_SEARCH_API_KEY);
      return _objectSpread(_objectSpread({}, request), {}, {
        headers: _objectSpread({}, headers)
      });
    },
    theme: {
      typography: {
        fontFamily: '"Nunito", sans-serif',
        fontSize: "16px"
      },
      colors: {
        textColor: "#424242",
        primaryTextColor: "#fff",
        primaryColor: "#0B6AFF",
        titleColor: "#424242",
        alertColor: "#d9534f"
      }
    }
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-white px-0"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "navbar-brand",
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 115.08 67.19",
    className: "applicationLogo"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("style", null, ".prefix__cls-1{fill:none}.prefix__cls-2{fill:#00529c}.prefix__cls-3{fill:#d5a10f}")), /*#__PURE__*/_react.default.createElement("title", null, "Asset 1"), /*#__PURE__*/_react.default.createElement("g", {
    id: "prefix__Layer_2",
    "data-name": "Layer 2"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "prefix__Layer_1-2",
    "data-name": "Layer 1"
  }, /*#__PURE__*/_react.default.createElement("path", {
    className: "prefix__cls-1",
    d: "M100.8 44.95h7.7l-3.85-8.77-3.85 8.77zM80.59 44.95h7.71l-3.86-8.77-3.85 8.77z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "prefix__cls-2",
    d: "M76.37 31.18L70.3 46.71l-6.12-15.99-6.13 15.99-6.06-15.53H36.35v2.47h5.15v19.21h2.7V33.65h5.15v-1.74l8.7 21.81 6.13-15.9 6.12 15.9 9-22.54h-2.93zM104.65 30.26l-10.1 22.06-10.11-22.06-10.35 22.6H77l2.5-5.43h10l2.5 5.43h5.2l2.48-5.43h9.94l2.48 5.43h2.9zM80.59 45l3.85-8.77L88.3 45zm20.21 0l3.85-8.77L108.5 45zM15.31 31.83c2.29-.15 4-2.73 3.79-5.77s-2.21-5.39-4.5-5.25-4 2.77-3.79 5.77S13 32 15.31 31.83z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "prefix__cls-3",
    d: "M32.26 20.58c1.1-1.13 3.13-.72 1.93.12a5.78 5.78 0 01-3.4.8 9.92 9.92 0 01-5.29-2s2.46 3.26 5.78 3.26c4.23 0 5.91-2.37 4.62-3.48s-3.12.46-3.64 1.3zM26.21 18.2l.08.05c-.08-.29-.17-.57-.23-.87a4.77 4.77 0 011.1-4.32c.47-.55 1-1.07 1.47-1.61.21-.22.39-.47.58-.7l.11-.13a.59.59 0 00.06.33 4.75 4.75 0 001.27 2.41c.42.45.9.85 1.34 1.27.21.2.42.4.61.62a1.87 1.87 0 01.27 2.08l-.08.17a2 2 0 00.88-.45 2.52 2.52 0 00.88-1.62 4.25 4.25 0 00-.61-2.76c-.12-.21-.26-.41-.39-.62a.24.24 0 010-.12 12.61 12.61 0 011.45 1.7 4.45 4.45 0 01.73 1.63 3.5 3.5 0 01-.54 2.65 1.46 1.46 0 00-.17.3l.16-.07a3.88 3.88 0 002.12-2.79 4.41 4.41 0 01.09-.62v-.56l-.06-.51a7 7 0 00-.63-2.08A13.21 13.21 0 0034.94 9c-.54-.66-1.11-1.3-1.61-2a6.2 6.2 0 01-1.22-4.4 6.64 6.64 0 01.75-2.48l.06-.12A6.38 6.38 0 0030 5.23a3 3 0 00-1.32-1c0 .07.06.11.08.15a2.8 2.8 0 01.32 1.75 3 3 0 01-.68 1.4A10.5 10.5 0 0127 8.87a12.22 12.22 0 00-1.74 1.71 5.69 5.69 0 00-1.16 2.66 3.47 3.47 0 01-.08.55v.46a1.63 1.63 0 00.09.65 4.71 4.71 0 002.1 3.3z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "prefix__cls-2",
    d: "M16.5 38.58c-12.45.63-1 29.52.76 28.59s-7.06-25.44 1-25.44c3.09 0 0 11.62 0 11.62s-1.53 3.23 2.07 3.23a3.37 3.37 0 003.07-2.51S27.13 38 16.5 38.58zM30 24.58a2.15 2.15 0 00-3 .27 1.09 1.09 0 00-.13.17s-5.3 7.07-10.21 9.22C11 36.71 0 37.26 0 38.58s14.66.36 21.15-3.48c7.27-4.3 9.18-7.73 9.18-7.73s1.17-1.79-.33-2.79z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M45.5 65.31a.43.43 0 010 .16.34.34 0 01-.32.36.33.33 0 01-.34-.25l-.54-1.17h-2.55l-.54 1.17a.37.37 0 01-.7-.1.43.43 0 010-.16l2.15-4.7a.36.36 0 01.35-.22.35.35 0 01.34.22zm-2.45-3.81l-1 2.26h2zM51.76 61.23a.39.39 0 01.11.27.33.33 0 01-.32.34.44.44 0 01-.33-.19A1.83 1.83 0 0049.8 61a2.07 2.07 0 000 4.13 1.78 1.78 0 001.39-.59.44.44 0 01.31-.2.32.32 0 01.35.29.43.43 0 01-.11.28 2.56 2.56 0 01-2 .88 2.76 2.76 0 110-5.52 2.52 2.52 0 012.02.96zM58.36 66.33a.35.35 0 01-.36.33.3.3 0 01-.28-.17l-.46-.81a3.11 3.11 0 01-1 .19A2.76 2.76 0 1159 63.05v.06a2.73 2.73 0 01-1.09 2.24l.47.81a.32.32 0 01-.02.17zM56.23 61a2.07 2.07 0 000 4.13 2.25 2.25 0 00.68-.11l-.4-.71a.49.49 0 010-.17.32.32 0 01.31-.33.3.3 0 01.29.17l.4.7a2.08 2.08 0 00.67-1.61A1.93 1.93 0 0056.45 61zM60.86 63.64v-2.87a.38.38 0 01.37-.39.36.36 0 01.38.34v3.05a1.5 1.5 0 103 0v-3a.36.36 0 01.33-.39.38.38 0 01.4.38v2.87a2.25 2.25 0 01-4.5 0zM68 65.83a.38.38 0 01-.39-.37v-4.69a.38.38 0 01.37-.39.36.36 0 01.37.35v4.71a.38.38 0 01-.35.39zM71.05 65.83a.38.38 0 01-.4-.36v-4.63a.38.38 0 01.36-.4h2.19c1.21 0 1.81.65 1.81 1.57a1.39 1.39 0 01-1.09 1.44l.89 1.83a.49.49 0 010 .17.36.36 0 01-.34.38.35.35 0 01-.35-.21l-1-2.08h-1.7v1.9a.37.37 0 01-.37.39zm.37-4.68v1.72h1.93a.86.86 0 100-1.72zM80.5 65.77h-3a.38.38 0 01-.39-.37v-4.57a.38.38 0 01.39-.39h3a.37.37 0 01.37.36.36.36 0 01-.37.35h-2.67v1.54h1.45a.35.35 0 01.36.34.34.34 0 01-.33.35h-1.48v1.68h2.67a.35.35 0 01.37.33.36.36 0 01-.37.35zM86.63 64.19a1 1 0 111-1 1 1 0 01-1 1zM92.8 65.38v-4.61a.38.38 0 01.37-.39.38.38 0 01.38.36v4.31h2.55a.36.36 0 110 .72h-2.91a.38.38 0 01-.39-.37zM101.72 65.77h-3.07a.38.38 0 01-.39-.37v-4.57a.38.38 0 01.39-.39h2.95a.37.37 0 01.37.36.36.36 0 01-.37.35H99v1.54h1.47a.35.35 0 01.36.34.34.34 0 01-.33.35H99v1.68h2.69a.35.35 0 01.37.33.36.36 0 01-.37.35zM108.5 65.31a.43.43 0 010 .16.34.34 0 01-.32.36.36.36 0 01-.35-.22l-.53-1.17h-2.51l-.52 1.14a.35.35 0 01-.34.22.36.36 0 01-.36-.36.42.42 0 010-.16l2.11-4.7a.37.37 0 01.49-.19.35.35 0 01.19.19zM106 61.5l-1 2.26h2zM112.25 65.77h-1.48a.41.41 0 01-.39-.39v-4.54a.4.4 0 01.39-.4h1.48a2.67 2.67 0 01.33 5.33 1.82 1.82 0 01-.33 0zm0-4.62h-1.08v3.92h1.08a2 2 0 000-3.92z"
  }))))), /*#__PURE__*/_react.default.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-7 dataSearch"
  }, /*#__PURE__*/_react.default.createElement(_reactivesearch.DataSearch, {
    componentId: "nameReactor",
    placeholder: "Search Zara",
    dataField: ["*"] // defaultValue={"Zara"}
    ,
    highlightField: "post",
    autosuggest: true,
    searchInputId: "NameSearch",
    iconPosition: "left",
    showFilter: true,
    showVoiceSearch: true,
    renderError: error => /*#__PURE__*/_react.default.createElement("div", null, "Something went wrong with DataSearch", /*#__PURE__*/_react.default.createElement("br", null), "Error details", /*#__PURE__*/_react.default.createElement("br", null), JSON.stringify(error))
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "links"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "btn twaabluecolor",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fa fa-envelope-open",
    "aria-hidden": "true"
  }), "\xA0Home"), "\xA0\xA0", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/twalineissues",
    className: "btn twaabluecolor",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fa fa-question-circle",
    "aria-hidden": "true"
  }), "\xA0Twaaline"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row bg-white"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-8 col-lg-3 col-md-3 col-sm-4 scroll"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box mt-4"
  }, /*#__PURE__*/_react.default.createElement(_reactivesearch.MultiList, {
    dataField: "creationYear",
    title: "Creation Year",
    componentId: "creationYearReactor",
    placeholder: "Filter by Year",
    showFilter: true,
    showSearch: false,
    selectAllLabel: "All Years",
    filterLabel: "Creation Year",
    react: {
      and: ["nameReactor"]
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "box mt-4"
  }, /*#__PURE__*/_react.default.createElement(_reactivesearch.MultiList, {
    dataField: "creationMonth",
    title: "Creation Month",
    componentId: "creationMonthReactor",
    placeholder: "Filter by Month",
    showFilter: true,
    showSearch: false,
    selectAllLabel: "All Months",
    filterLabel: "Creation Month",
    sortBy: "asc",
    react: {
      and: ["nameReactor"]
    },
    renderItem: (label, count, isSelected) => /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex justify-content-between w-100"
    }, /*#__PURE__*/_react.default.createElement("div", null, _index.MONTH_OF_THE_YEAR[+label]), /*#__PURE__*/_react.default.createElement("div", {
      className: "ml-auto text-muted"
    }, count))
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "box mt-4"
  }, /*#__PURE__*/_react.default.createElement(_reactivesearch.MultiList, {
    dataField: "creationDay",
    title: "Creation Day",
    componentId: "creationDayReactor",
    placeholder: "Filter by Day",
    showFilter: true,
    showSearch: false,
    selectAllLabel: "All Days",
    filterLabel: "Creation Days",
    sortBy: "asc",
    react: {
      and: ["nameReactor"]
    },
    renderItem: (label, count, isSelected) => /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex justify-content-between w-100"
    }, /*#__PURE__*/_react.default.createElement("div", null, _index.DAYS_OF_THE_WEEEK[+label]), /*#__PURE__*/_react.default.createElement("div", {
      className: "ml-auto text-muted"
    }, count))
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-lg-6 col-md-6 col-sm-8 scroll position-relative",
    style: {
      minHeight: "calc(100vh - 80px)"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactivesearch.ReactiveList, {
    componentId: "queryResult",
    dataField: ["*"],
    from: 0,
    size: 6,
    renderItem: onData,
    pagination: true,
    react: {
      and: ["creationYearReactor", "creationMonthReactor", "creationDayReactor", "searchCategoryReactor", "nameReactor"]
    },
    renderError: error => /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column justify-content-center align-items-center"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "py-2 px-4 mx-auto"
    }, "Oops! Something went wrong, try again after sometime."), /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-sm btn_twaablue"
    }, "Timeline")),
    className: "resultsList"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-8 col-lg-3 col-md-3 col-sm-6 scroll position-relative"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box mt-4"
  }, /*#__PURE__*/_react.default.createElement(_reactivesearch.MultiList, {
    dataField: "searchIndex",
    title: "Search Categories",
    componentId: "searchCategoryReactor",
    placeholder: "Filter by Category",
    showFilter: false,
    showSearch: false,
    selectAllLabel: "All Categories",
    filterLabel: "Item Category",
    sortBy: "asc",
    react: {
      and: ["nameReactor"]
    },
    renderItem: (label, count, isSelected) => /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex justify-content-between w-100"
    }, /*#__PURE__*/_react.default.createElement("div", null, _index.ELASTIC_INDICES_FILTERS_MAPPING[+label]), /*#__PURE__*/_react.default.createElement("div", {
      className: "ml-auto text-muted"
    }, count))
  }))))));
};

var _default = SearchWrapper;
exports.default = _default;