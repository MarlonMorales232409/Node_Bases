import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('Testing factory', () => {

    const getAge = () => 35;
    const getUUID = () => '1234';

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({ getAge, getUUID });
        expect(typeof makePerson).toBe('function');
    })

    test('makePerson should return a person', () => {
        const makePerson = buildMakePerson({ getAge, getUUID });
        const johnDoe = makePerson({ name: 'John Doe', birthdate: '1998-24-09' })

        expect(johnDoe).toEqual({ id: '1234', name: 'John Doe', birthdate: '1998-24-09', age: 35 })

    })
})