import { expect } from 'chai';
import { sinon } from 'sinon';

import { Map } from 'immutable';

import PhoneFieldGroupReducer from '../../src/Reducers/PhoneFieldGroup-Reducer';

describe('PhoneFieldGroupReducer', function() {
    let state;

    beforeEach(() => {
        state = {
                submitFlag: false,
                content: new Map({'Home': ''})
        };
    });


    describe('SET_PHONE_FIELD action', function() {
        it('should set a new phone field', function() {

            let action = {
                type: 'SET_PHONE_FIELD',
                fieldType: 'Work',
                fieldContent: ''
            };
            let returnState = PhoneFieldGroupReducer(state, action);
            expect(returnState.content.size).to.be.equals(2);
        });
    });
    describe('REMOVE_PHONE_FIELD action', function() {
        it('should remove a phone field', function() {

            let action = {
                type: 'REMOVE_PHONE_FIELD',
                fieldType: 'Home'
            };
            let returnState = PhoneFieldGroupReducer(state, action);
            expect(returnState.content.isEmpty()).to.be.equals(true);
        });
    });
    describe('UPDATE_FIELD_TYPE action', function() {
        it('should update a phone field', function() {
            let action = {
                type: 'UPDATE_FIELD_TYPE',
                previousFieldType: 'Home',
                newFieldType: 'Work',
                previousTypeContent: ''
            };
            let returnState = PhoneFieldGroupReducer(state, action);
            expect(returnState.content.get('Work')).to.be.equals(state.content.get('Home'));
        });
    });
    describe('UPDATE_SUBMIT_FLAG action', function() {
        context('when phone fields content are valid for submit', function() {
            it('should set submit flag to true', function() {
                state = {
                    submitFlag: false,
                    content: new Map({'Home': '5555555555'})
                };
                let action = {
                    type: 'UPDATE_SUBMIT_FLAG'
                };
                let returnState = PhoneFieldGroupReducer(state, action);
                expect(returnState.submitFlag).to.be.equals(true);
            });
        });
    });
    describe('UPDATE_SUBMIT_FLAG action', function() {
        context('when phone fields content are valid for submit', function() {
            it('should set submit flag to true', function() {
                state = {
                    submitFlag: false,
                    content: new Map({'Home': ''})
                };
                let action = {
                    type: 'UPDATE_SUBMIT_FLAG'
                };
                let returnState = PhoneFieldGroupReducer(state, action);
                expect(returnState.submitFlag).to.be.equals(false);
            });
        });
    });
});