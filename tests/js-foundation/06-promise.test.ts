import { getPokemonById } from './../../src/js-foundation/06-promises';

describe('Testing promise', () => {

    test('getPokemonById should return a Pokemon', async () => {
        
        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);

        expect(pokemonName).toBe('bulbasaur');
    })

    test('getPokemonById should fail with if id does not exist', async () => {

        const pokemonId = 99999999;

        try {
            await getPokemonById(pokemonId);
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toContain(pokemonId.toString());
        }

    })
})