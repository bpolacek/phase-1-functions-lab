// Code your solution in this file
function distanceFromHqInBlocks(startBlock) {
    if(startBlock>42) {
    return(startBlock - 42);
    }else{
        return(42 - startBlock);
    }
};

function distanceFromHqInFeet(startBlock) {
   return (distanceFromHqInBlocks(startBlock)*264);
};

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs((endBlock - startBlock)*264);
};

/*it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
      // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
      expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    });*/

    //let feet = Math.abs((endBlock - startBlock)*264);

    //let feet = distanceTravelledInFeet(startBlock,endBlock);

function calculatesFarePrice(startBlock, endBlock){
    if(distanceTravelledInFeet(startBlock,endBlock)<=400) {
        return 0;
    } else if(distanceTravelledInFeet(startBlock, endBlock)>400 && distanceTravelledInFeet(startBlock, endBlock)<=2000) {
        return ((distanceTravelledInFeet(startBlock,endBlock)-400)*.02);
    } else if(distanceTravelledInFeet(startBlock,endBlock)>2000 && distanceTravelledInFeet(startBlock, endBlock)<2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}





