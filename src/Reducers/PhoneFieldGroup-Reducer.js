import {Map} from 'immutable';
import {TYPE_LIST, PHONE_REGEX} from '../util/component-constants'

const initialState = {
        submitFlag: false,
        content: new Map({'Home': ''})
    };

let PhoneFieldReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_PHONE_FIELD':
        {
            let content;
            if (TYPE_LIST.indexOf(action.fieldType) > -1){
                content = state.content.set(action.fieldType, action.fieldContent);
                return {...state, content: content};
            }
            return state;
        }

        case 'UPDATE_SUBMIT_FLAG':
        {
            let submitFlag = false;
            state.content.forEach(fieldData => {
                if (fieldData) {
                    submitFlag = PHONE_REGEX.test(fieldData);
                }
            });

            return {...state, submitFlag: submitFlag};
        }

        case 'REMOVE_PHONE_FIELD':
        {
            let content = state.content.remove(action.fieldType);
            return {...state, content: content};
        }

        case 'UPDATE_FIELD_TYPE':
        {
            let content = state.content;
            let previousTypeContent = content.get(action.previousFieldType);
            content = content.set(action.newFieldType, previousTypeContent).delete(action.previousFieldType);
            return {...state, content: content};
        }

        default:
            return state
    }
}

export default PhoneFieldReducer
