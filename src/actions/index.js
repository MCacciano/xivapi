import { GET_CHARACTER, FETCH_LODESTONE } from '../actions/types';

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
