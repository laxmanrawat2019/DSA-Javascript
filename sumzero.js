function getSumPairsZero(array)
{
  for(let number of array)
  {
    console.log(number);
     for(let j=1;j<array.length;j++)
     {
        console.log(array[j]);
        if(number+array[j]===0)
        {
            return [number,array[j]];
        }
     }
  }
}

const result = getSumPairsZero([-5,-4,-3,-2,0,2,4,6,8]);
console.warn(result);