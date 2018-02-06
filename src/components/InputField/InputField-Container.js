import React from 'react';
import { connect } from 'react-redux';

import { HomeActions } from '../../Actions/PhoneFieldGroup-Actions';
import { InputField } from './InputField';



const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

InputFieldContainer = connect()(InputField);

export default InputFieldContainer
