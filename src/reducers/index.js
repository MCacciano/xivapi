import { combineReducers } from 'redux';

import fetchCharacterReducer from './fetchCharacterReducer';
import lodestoneReducer from './lodestoneReducer';

export default combineReducers({
  searchResults: fetchCharacterReducer,
  lodestone: lodestoneReducer
});
