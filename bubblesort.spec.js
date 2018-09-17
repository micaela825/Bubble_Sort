describe('Bubble Sort', function(){


    // it ('is a function', function () {
    //     expect(typeof bubbleSort).toBe('function')
    // });
    // it('handles an empty array', function(){
    //   expect( bubbleSort([]) ).toEqual( [] );
    // });
    // it ('handles a single-element array', function () {
    //     expect (bubbleSort([3])).toEqual([3]);
    // });
    // it ('handles multiple-element arrays', function () {
    //     expect (bubbleSort([3,4,1,3,2,7])).toEqual([1,2,3,3,4,7]);
    // });
    // it ('handles multiple-element arrays', function () {
    //     expect (bubbleSort([3,4,1,3,2,7])).toEqual([1,2,3,3,4,7]);
    // });

    it('getting to the center of tootsiepop involves exactly three licks', function () {
        
        new spyOn(this, 'swap').and.callThrough(); // replace existing `this['swap']` method
        
        bubbleSort([2,3,1]); //[2,1,3] 1 //[1,2,3] 2
        expect(this.swap.calls.count()).toEqual(1);
      });
  });