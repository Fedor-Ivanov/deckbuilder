export const ACTION_FILTER_SELECT = 'ACTION_FILTER_SELECT';
export function selectFilter(value, filter) {
    return {
        type: ACTION_FILTER_SELECT,
        payload: { name: filter, value: value }
    };
}