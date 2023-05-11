const {prohibido} = require ('../utils/for_testing')

describe('caracteres', () => {

    test('no se permite la palabra "mal"', () => {
        const result = prohibido('')
    
        expect(result).not.toBe('mal')
    });
    
    test('empty', () => {
        const result = prohibido('')
    
        expect(result).toBe('')
    });
    
    test('undefined', () => {
       const result = prohibido()
    
       expect(result).toBeUndefined()
    });

})
