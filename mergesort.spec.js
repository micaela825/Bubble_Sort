describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect(split([1,2,3,4])).toEqual([1,2],[3,4]);
        expect(split([1,2,3,4,5])).toEqual([1,2,3],[4,5]);
    });
 
    describe('Merge function', function(){
        it('is able to merge two sorted arrays into one sorted array', function(){
            expect(merge([1,2,3,4],[5,6,7,8])).toEqual([1,2,3,4,5,6,7,8]);
            expect(merge([1,4,6,7],[2,3,5,8])).toEqual([1,2,3,4,5,6,7,8]);
            expect(merge([1,4,6,7],[2,3,5])).toEqual([1,2,3,4,5,6,7]);
            expect(merge([1,4,6],[2,3,5,8])).toEqual([1,2,3,4,5,6,8]);
        });
    });
 
    describe('Merge sort function', function() {
        it('sorts an array', function() {
            expect(mergeSort([5,2,7,9,10,3,2,1])).toEqual([1,2,2,3,5,7,9,10]);
            expect(mergeSort([4,16,12,0,-1,3,20])).toEqual([-1,0,3,4,12,16,20]);
            expect(mergeSort([21,109,14,34,-5,200,1,-20])).toEqual([-20,-5,1,14,21,34,109,200]);
        })
 
        it ('uses the split function to divide the arrays', function() {
            spyOn(window, 'split').and.callThrough();
            mergeSort([5,1]);
            expect(split.calls.count()).toEqual(1);
        })
 
        it ('uses the merge function to merge the sorted arrays', function() {
            spyOn(window, 'merge').and.callThrough();
            mergeSort([5,1]);
            expect(merge.calls.count()).toEqual(1);
        })
    })
 });