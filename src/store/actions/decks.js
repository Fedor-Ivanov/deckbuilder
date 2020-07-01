export const ACTION_SAVE_DECK = 'ACTION_SAVE_DECK';
export function saveDeck(deck) {
    return {
        type: ACTION_SAVE_DECK,
        payload: deck
    };
}

export const THUNK_LOCAL_DECKS = 'THUNK_LOCAL_DECKS';
export function setlocal(deck) {
    return function (dispatch, getState) {
        dispatch(saveDeck(deck));
        const state = getState().decks.decks;
        localStorage.setItem("decksStorage", JSON.stringify(state));
    };
}