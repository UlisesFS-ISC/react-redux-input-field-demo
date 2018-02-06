import React from 'react';
import PropTypes from 'prop-types';

import 'bulma/css/bulma.css';
import './PhoneFieldGroup.css';

import {InputField} from '../InputField/InputField';
import {ResultSet} from '../ResultSet/ResultSet';


export default class PhoneFieldGroup extends React.Component {

    static PropTypes = {
        currentContent: PropTypes.map,
        submitFlag: PropTypes.bool,
        updatePhoneFieldType: PropTypes.func,
        removePhoneField: PropTypes.func,
        setPhoneField: PropTypes.func,
        updateSubmitFlag: PropTypes.func,
        availableTypes: PropTypes.Array
    }

    PhoneFields = (content, availableTypes, updatePhoneFieldType, removePhoneField, setPhoneField) => {
        let elementCounterFlag = 0;
        return content.map((phoneFieldData, i) =>
            (
                <div key={i}>
                    <InputField
                        isRemovable={elementCounterFlag++}
                        hasSelector={true}
                        onSelectorChange={updatePhoneFieldType}
                        onRemove={removePhoneField}
                        onTextChange={setPhoneField}
                        type={i}
                        selectorOptions={availableTypes}
                    />
                </div>
            )
        );
    }


    componentWillUpdate() {
        if (this.props.submitFlag) {
            this.props.updateSubmitFlag();
        }
    }

    render() {
        let {currentContent, submitFlag, updatePhoneFieldType, removePhoneField, setPhoneField, updateSubmitFlag, availableTypes} = this.props;
        let {PhoneFields} = this;
        let logResult = submitFlag ? (<ResultSet data={currentContent} />) : <ResultSet data={null} />;

        return (
            <div className="PhoneFieldGroup">
                {PhoneFields(currentContent, availableTypes, updatePhoneFieldType, removePhoneField, setPhoneField)}
                <div className="column  is-offset-one-quarter">
                    <button className="button is-light" onClick={() => updateSubmitFlag()}>Log</button>
                    <button className="button is-success" onClick={() => setPhoneField(availableTypes[0] ,'')}>Add field</button>
                </div>
                <hr/>
                {logResult}
            </div>
        );
    }
}
