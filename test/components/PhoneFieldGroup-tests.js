import React from 'react';
import { expect } from 'chai';
import  sinon  from 'sinon';
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import { Map } from 'immutable';

import PhoneFieldGroup from '../../src/components/PhoneFieldGroup/PhoneFieldGroup';
//import {InputField} from '../../src/components/InputField/InputField';

configure({ adapter: new Adapter() });

describe('PhoneFieldGroup', function() {
    let currentContent, submitFlag, updatePhoneFieldType, removePhoneField, setPhoneField, updateSubmitFlag, availableTypes;

    beforeEach(() => {
        currentContent = new Map({'Home': ''});
        submitFlag = false;
        updatePhoneFieldType = sinon.spy();
        removePhoneField = sinon.spy();
        setPhoneField = sinon.spy();
        updateSubmitFlag = sinon.spy();
        availableTypes = ['Work', 'Mobile', 'Other'];
    });

    let getPhoneFieldGroupWrapper = () => {
        return shallow(
            <PhoneFieldGroup
                currentContent={currentContent}
                submitFlag={submitFlag}
                updatePhoneFieldType={updatePhoneFieldType}
                removePhoneField={removePhoneField}
                setPhoneField={setPhoneField}
                updateSubmitFlag={updateSubmitFlag}
                availableTypes={availableTypes}
            />
    )};

    describe('<PhoneFieldGroup>', function() {
        context('when there is one phone field entry', function() {
            it('should render one Inputfield with null as data prop', function() {
                let PhoneFieldGroupWrapper = getPhoneFieldGroupWrapper();
                expect(PhoneFieldGroupWrapper.childAt(4).props()).to.be.deep.equals({data: null});
            });
        });
    });
});
