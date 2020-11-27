import produce from "immer";
import { HackerNewsStoriesAvailable } from "./hacker-news-actions";

export const hackerNewsReducer = (state, action) => {
    return produce(state || { items: [] }, draft => {
        switch (action.type) {
            case HackerNewsStoriesAvailable: {
                console.log('DYNAMIC REDUCER TRIGGERED');
                draft.items = action.payload.items;
                break;
            }
            default: {
                //do nothing
            }
        }
    });
};
