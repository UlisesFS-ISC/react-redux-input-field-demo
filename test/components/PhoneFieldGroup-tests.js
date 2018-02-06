
import { expect } from 'chai';
import { sinon } from 'sinon';
import { shallow } from 'enzyme';

import { Map } from 'immutable';

import PhoneFieldGroup from '../../src/components/PhoneFieldGroup/PhoneFieldGroup';
import {InputField} from '../../src/components/InputField/InputField';

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
            it('should render one Inputfield', function() {
                let PhoneFieldGroupWrapper = getPhoneFieldGroupWrapper();
                expect(PhoneFieldGroupWrapper).to.have.exactly(1).type(InputField);
            });
        });
    });
});
