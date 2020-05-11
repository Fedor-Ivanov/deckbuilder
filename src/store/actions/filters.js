export const ACTION_FILTER_SELECT = 'ACTION_FILTER_SELECT';
export function selectFilter(value) {
    return {
        type: ACTION_FILTER_SELECT,
        payload: value
    };
}