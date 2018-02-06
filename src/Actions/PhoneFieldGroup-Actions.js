

export const setPhoneFieldAction = (fieldType, fieldContent) =>{
    return {
        type: 'SET_PHONE_FIELD',
        fieldType,
        fieldContent
    }
}

export const updateSubmitFlagAction = () =>{
    return {
        type: 'UPDATE_SUBMIT_FLAG',
    }
}

export const removePhoneFieldAction = (fieldType) =>{
    return {
        type: 'REMOVE_PHONE_FIELD',
        fieldType
    }
}

export const updatePhoneFieldTypeAction = (newFieldType, previousFieldType, newFieldContent) =>{
    return {
        type: 'UPDATE_FIELD_TYPE',
        newFieldType,
        previousFieldType
    }
}

