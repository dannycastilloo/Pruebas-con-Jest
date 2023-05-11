const {caracteres} = require ('../utils/for_testing')


describe('caracteres', () => {

    test('duplicar palabra', () => {
        const result = caracteres('hola')

        expect(result).toBe('holahola')
    });


    test('empty string', () => {
        const result = caracteres('')

        expect(result).toBe('')
    });


    test('undefined', () => {
        const result = caracteres()

        expect(result).toBeUndefined()
    });
})
