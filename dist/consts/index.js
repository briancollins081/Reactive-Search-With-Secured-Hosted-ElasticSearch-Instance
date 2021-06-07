"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ELASTIC_INDICES_FILTERS_MAPPING = exports.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME = exports.MONTH_OF_THE_YEAR = exports.DAYS_OF_THE_WEEEK = void 0;
const DAYS_OF_THE_WEEEK = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thurdsy",
  5: "Friday",
  6: "Saturday"
};
exports.DAYS_OF_THE_WEEEK = DAYS_OF_THE_WEEEK;
const MONTH_OF_THE_YEAR = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
}; // These two lists must match to be used in code

exports.MONTH_OF_THE_YEAR = MONTH_OF_THE_YEAR;
const ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME = {
  // from backend mapping
  articles: 1,
  counsellors: 2,
  events: 3,
  forums: 4,
  groupsopen: 5,
  groupsprivate: 6,
  mentees: 7,
  mentors: 8,
  organizations: 9,
  speakers: 10,
  timelineposts: 11,
  tstoreproducts: 12,
  tstoreservices: 13,
  twaabooks: 14,
  users: 15,
  videos: 16
};
exports.ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME = ELASTIC_INDICES_FILTERS_MAPPING_BY_NAME;
const ELASTIC_INDICES_FILTERS_MAPPING = {
  1: "Articles",
  2: "Counsellors",
  3: "Events",
  4: "Forums",
  5: "Open Groups",
  6: "Private Groups",
  7: "Mentees",
  8: "Mentors",
  9: "Organizations",
  10: "Speakers",
  11: "Timeline Posts",
  12: "Tstore Products",
  13: "Tstore Services",
  14: "Books",
  15: "Users",
  16: "Videos"
};
exports.ELASTIC_INDICES_FILTERS_MAPPING = ELASTIC_INDICES_FILTERS_MAPPING;