import { getUserById } from '../../src/js-foundation/04-arrow';


describe('Testing callback file', () => {
    test('getUserById should fail if does not have a valid Id', (done) => {
        const id = 10;

        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
        })

        done();
    }),


        test('getUserById should return user John Doe with id 1', () => {
            const id = 1;

            getUserById(id, (err, user) => {

                expect(err).toBeUndefined();

                expect(user).not.toBeUndefined();

                expect(user?.name).toBe('John Doe')

                expect(user?.id).toBe(1)

                // Fernando's way;

                // expect(err).toBeUndefined();

                expect(user).toEqual(
                    {
                        id: 1,
                        name: 'John Doe',
                    },
                )
            })
        })
})