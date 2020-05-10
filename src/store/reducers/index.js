import { combineReducers } from 'redux';
import cards from './cards';
import deck from './deck';
import filters from './filters'

export default combineReducers({
    cards: cards,
    deck: deck,
    filters: filters
});