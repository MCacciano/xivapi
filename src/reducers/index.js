import { combineReducers } from 'redux';

import fetchCharacterReducer from './fetchCharacterReducer';
import lodestoneReducer from './lodestoneReducer';
import freeCompanyReducer from './freeCompanyReducer';

export default combineReducers({
  searchResults: fetchCharacterReducer,
  lodestone: lodestoneReducer,
  freeCompany: freeCompanyReducer
});
