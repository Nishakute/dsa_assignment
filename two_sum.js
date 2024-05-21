var twoSum=function(nums,target)
{
 for(i=0;i<=nums.length-1;i++)
 {

   for(j=i+1;j<=nums.length-1; j++)
   {
    const sum=Number(num[i])+Number(num[j]);
    if(sum===target)
    {
        return[i,j];
    }

   }
 }

}