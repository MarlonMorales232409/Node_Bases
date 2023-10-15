import { characters } from '../../src/js-foundation/02-destructuring';

describe('Testing destructuring file', () => {

    test('Should contain "Batman" and "Flash"', () => {
        expect(characters).toContain('Batman');
        expect(characters).toContain('Flash');
    })

    test('Should contain "Batman" and "Flash" in the two first position', () => {

        const [ batman, flash ] = characters;

        expect(characters).toContain(batman);
        expect(characters).toContain(flash);
    })
})