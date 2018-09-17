describe('Bubble Sort', function(){
    it ('is a function', function () {
        expect(typeof bubbleSort).toBe('function')
    });
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it ('handles a single-element array', function () {
        expect (bubbleSort([3])).toEqual([3]);
    });
    it ('handles multiple-element arrays', function () {
        expect (bubbleSort([3,4,1,3,2,7])).toEqual([1,2,3,3,4,7]);
    });
  });