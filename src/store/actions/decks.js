export const ACTION_SAVE_DECK = 'ACTION_SAVE_DECK';
export function saveDeck(deck) {
    return {
        type: ACTION_SAVE_DECK,
        payload: deck
    };
}

export const ACTION_UPDATE_DECK = 'ACTION_UPDATE_DECK';
export function updateDeck(deck) {
    return {
        type: ACTION_UPDATE_DECK,
        payload: deck
    };
}

export const ACTION_DELETE_DECK = 'ACTION_DELETE_DECK';
export function deleteDeck(deckId) {
    return {
        type: ACTION_DELETE_DECK,
        payload: deckId
    };
}


export const THUNK_LOCAL_DECKS_ADD = 'THUNK_LOCAL_DECKS_ADD';
export function setLocalSave(deck) {
    return function (dispatch, getState) {
        dispatch(saveDeck(deck));
        const state = getState().decks.decks;
        localStorage.setItem("decksStorage", JSON.stringify(state));
    };
}

export const THUNK_LOCAL_DECKS_UPDATE = 'THUNK_LOCAL_DECKS_UPDATE';
export function setLocalUpdate(deck) {
    return function (dispatch, getState) {
        dispatch(updateDeck(deck));
        const state = getState().decks.decks;
        localStorage.setItem("decksStorage", JSON.stringify(state));
    };
}


export const THUNK_LOCAL_DECKS_REMOVE = 'THUNK_LOCAL_DECKS_REMOVE';
export function setLocalRemove(deckId) {
    return function (dispatch, getState) {
        dispatch(deleteDeck(deckId));
        const state = getState().decks.decks;
        localStorage.setItem("decksStorage", JSON.stringify(state));
    };
}

