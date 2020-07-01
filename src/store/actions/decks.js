export const ACTION_SAVE_DECK = 'ACTION_SAVE_DECK';
export function saveDeck(deck) {
    return {
        type: ACTION_SAVE_DECK,
        payload: deck
    };
}

// вот тут нужно писать санку