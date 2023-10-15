import { getAge } from './../../src/plugins/get-age.plugin';

describe('GetAge plugin', () => {

    test('Should return the age of a person', () => {

        const birthdate = '1998-09-24';

        const age = getAge(birthdate);

        expect(typeof age).toBe('number');
    }),

    test('getAge should return the current age', () => {

        const birthdate = '1998-09-24';
        const age = getAge(birthdate)

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculatedAge);
    })
})