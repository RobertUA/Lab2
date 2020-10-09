function one(N)
{
    var M = [];
    for(let i=0;i<N;i++)
    {
        M[i]=i;
    }
    return M;
}
function two(A,B,C)
{
    if(A%B==0 && A%C==0) return true;
    else return false;
}
function three(str)
{
    return str[0].toUpperCase()+str.slice(1);
}
console.log(one(10));
console.log(two(10, 20, 2));
console.log(three("laba"));