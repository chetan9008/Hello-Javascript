//prime in certain interval

for(let i=1;i<=100;i++)
{
    let isPrime = true;
    if(i == 1)
    {
        console.log(`${i} is prime`);
    }
    else
    {
        for(let j=2;j<i;j++)
        {
            if(i % j == 0)
            {
                isPrime = false;
            }
        }
        if(isPrime)
        console.log(`${i} is prime`);
    }
}