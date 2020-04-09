/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USERNAME,  CHANGE_FORM, RESET_FORM, SELECT_SET} from './constants';
import messages from './messages';
import serialize from "./serialize";
// The initial state of the App
export const initialState = {
    username: '',
    answers: new Array(10),
    selected: "",
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
        case CHANGE_USERNAME:
            // Delete prefixed '@' from the github username
            draft.username = action.username.replace(/@/gi, '');
            break;
        case CHANGE_FORM:
            let ans = action.formanswer.split("_");
            draft.answers.splice(ans[0],1,ans[1]);
            break;
        case RESET_FORM:
            draft.answers = [];
            break;
        case SELECT_SET:
            let set = messages.quiz.answerMap.filter(function(obj){
                return obj[action.set];
            });
            let selected = action.set;
            if (set.length > 0) {
                draft.answers = set[0][selected].map(obj => {
                    return obj[0];
                });
            }
            break;
    }
  });



export default homeReducer;
