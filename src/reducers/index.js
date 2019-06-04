import { combineReducers } from 'redux';

import fetchCharacterReducer from './fetchCharacterReducer';
import lodestoneReducer from './lodestoneReducer';
import freeCompanyReducer from './freeCompanyReducer';
import searchAllReducer from './searchAllReducer';
import itemDetailReducer from './itemDetailReducer';

export default combineReducers({
  searchResults: fetchCharacterReducer,
  lodestone: lodestoneReducer,
  freeCompany: freeCompanyReducer,
  searchAllResults: searchAllReducer,
  itemDetails: itemDetailReducer
});
