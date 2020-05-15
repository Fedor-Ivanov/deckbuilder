import { combineReducers } from 'redux';
import cards from './cards';
import deck from './deck';
import filters from './filters'
import modal from './modal'

export default combineReducers({
    cards: cards,
    deck: deck,
    filters: filters,
    modal: modal
});