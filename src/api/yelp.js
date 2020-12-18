import axios from 'axios';

export default axios.create({
    // root url we want to make the request to
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer pfswWigR9Zx1-qroTb80x3l2onjxh2XHScBN_smXGSoYvXAHbL2hAyQ0YUtnaFU-u6iOc9JRBM4-rTAhv8RksfuzS-WvFtijsMQ9orPgx4XlI0cVm6gmh5ZCP8HbX3Yx',
    }
});