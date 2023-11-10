function approch()
{
    let array = [
        [1, 2, 3],
        [2, 3, 4]
    ]

    console.log(array[1][1]);
}

function approch1()
{
    function make2d(row,col)
    {
        let arr = [];
        for(let i=0;i<row;i++)
        {
            arr[i] = [];
        }
        for(let i=0;i<row;i++)
        {
            for(let j=0;j<col;j++)
            {
                arr[i][j] = j;
            }
        }
        return arr;
    }

    let twoDArray = make2d(2,3);
    console.log(twoDArray);
}
approch1();