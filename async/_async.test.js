const Ajax = require('./async');

describe('Ajax: echo', () => {
 it('should return value async', async () => {
   const result = await Ajax.echo('This is result');

   expect(result).toBe('This is result');
 });

 it('should return value with Promise', () => {
    return Ajax.echo('This is result').then(data => {
       expect(data).toBe('This is result');
    })
 });

 it('should catch error with Promise', () => {
    return Ajax.echo().catch(err => {
       expect(err).toBeInstanceOf(Error);
    })
 });

});