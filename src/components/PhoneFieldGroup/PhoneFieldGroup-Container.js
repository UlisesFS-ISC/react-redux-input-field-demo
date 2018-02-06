import React from 'react';
import { connect } from 'react-redux';

import { removePhoneFieldAction, setPhoneFieldAction, updatePhoneFieldTypeAction, updateSubmitFlagAction } from '../../Actions/PhoneFieldGroup-Actions';
import PhoneFieldGroup from './PhoneFieldGroup';
import {TYPE_LIST} from '../../util/component-constants'


let availableTypes = (content) => {
    let typesInUse = [...content.keys()];
    let availableTypes = TYPE_LIST.slice(0);
    typesInUse.forEach(type => {
        let indexOfType = availableTypes.indexOf(type);
        availableTypes.splice(indexOfType, 1);
    });
    return availableTypes;
};



const mapStateToProps = (state) => {
    return {
        availableTypes: availableTypes(state.PhoneFieldGroupReducer.content),
        currentContent: state.PhoneFieldGroupReducer.content,
        submitFlag: state.PhoneFieldGroupReducer.submitFlag
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePhoneField: (fieldType) => dispatch(removePhoneFieldAction(fieldType)),
        setPhoneField: (fieldType, fieldContent) => dispatch(setPhoneFieldAction(fieldType, fieldContent)),
        updatePhoneFieldType: (newFieldType, previousFieldType)  => dispatch(updatePhoneFieldTypeAction(newFieldType, previousFieldType)),
        updateSubmitFlag: () => dispatch(updateSubmitFlagAction())
    }
}

const PhoneFieldGroupContainer = connect(mapStateToProps, mapDispatchToProps)(PhoneFieldGroup);

export default PhoneFieldGroupContainer