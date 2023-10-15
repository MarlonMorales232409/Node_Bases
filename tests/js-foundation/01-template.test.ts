import { emailTemplate } from '../../src/js-foundation/01-template';

describe('Testing template file', () => {

    test('Should contain a Hi,', () => {
        expect(emailTemplate).toContain('Hi,');
    })

    test('shoud contain with a name and orderId', () => {
        expect(emailTemplate).toMatch(/{{name}}/)
        expect(emailTemplate).toMatch(/{{orderId}}/)
    })
})