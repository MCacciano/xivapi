import {
  GET_CHARACTER,
  FETCH_LODESTONE,
  FETCH_FREE_COMPANY,
  FREE_COMPANY_SEARCH,
  SEARCH_ALL,
  FETCH_ITEM_DETAIL
} from '../actions/types';

///////////////////////////////////////////////
////////////// CHARACTER ACTIONS //////////////
///////////////////////////////////////////////
export const fetchCharacter = (name, server) => async dispatch => {
  const res = await fetch(
    `https://xivapi.com/character/search?name=${name}&server=${server}`,
    { mode: 'cors' }
  );
  const data = await res.json();

  dispatch({
    type: GET_CHARACTER,
    payload: data.Results
  });
};

///////////////////////////////////////////////
////////////// NEWS ACTIONS //////////////
///////////////////////////////////////////////

export const fetchLodestone = () => async dispatch => {
  try {
    const res = await fetch(`https://xivapi.com/lodestone`);
    let data = await res.json();

    const top5News = data.News.filter((item, i) => i < 5);

    data = {
      ...data,
      top5News
    };

    dispatch({
      type: FETCH_LODESTONE,
      payload: data
    });
  } catch (err) {
    console.error(err);
  }
};

///////////////////////////////////////////////
//////////// FREE COMPNAY ACTIONS ////////////
///////////////////////////////////////////////

export const freeCompanySearch = (name = '', server = '') => async dispatch => {
  try {
    const res = await fetch(
      `https://xivapi.com/freecompany/search?name=${name}&server=${server}`
    );

    const data = await res.json();

    dispatch({
      type: FREE_COMPANY_SEARCH,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchFreeCompany = (id = '') => async dispatch => {
  try {
    const res = await fetch(
      `https://xivapi.com/freecompany/${id}?extended=1&data=FCM`
    );
    const data = await res.json();

    dispatch({
      type: FETCH_FREE_COMPANY,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};

///////////////////////////////////////////////
//////////// SEARCH ACTIONS ////////////
///////////////////////////////////////////////
export const searchAll = (searchString = '') => async dispatch => {
  try {
    const res = await fetch(`https://xivapi.com/search?string=${searchString}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_ALL,
      payload: data.Results
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchItemDetail = (url = '') => async dispatch => {
  console.log(url);
  try {
    const res = await fetch(`https://xivapi.com${url}`);
    const data = await res.json();

    console.log(data);

    dispatch({
      type: FETCH_ITEM_DETAIL,
      payload: data.Results
    });
  } catch (err) {
    console.error(err);
  }
};
