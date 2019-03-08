import axios from 'axios';

const API_KEY = "NWEAy7aTnHfxbtqrGEvJ33hV95EhiQFn3rrUg9pf"
// const AccountID = "ee6231a6-4a0f-4989-ae59-8f1a5f57b32e";

export default axios.create({
  baseURL: "https://api.nal.usda.gov/ndb",
    params: {
    format: "json",
    max: 10,
    api_key: API_KEY
  }
});

// https://api.nal.usda.gov/ndb/V2/reports?ndbno=01009&ndbno=45202763&ndbno=35193&type=f&format=json&api_key=DEMO_KEY"


// ?format=json&q=butter&sort=n&max=25&offset=0&api_key=DEMO_KEY 