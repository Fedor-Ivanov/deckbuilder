export const ACTION_ADD_CARD_TO_DECK = 'ACTION_ADD_CARD_TO_DECK';
export function cardAdd(card) {
    return {
        type: ACTION_ADD_CARD_TO_DECK,
        payload: card
    };
}