let arr = [[0,0,0],[0,0,0],[0,0,0]];

let f=true;
let v;
    for(let i=1;i<=9;i++)
    {

        let v=document.getElementById(""+i);

        v.addEventListener("click",function()
        {   
            let r=Math.floor((i-1)/3);
            let c=Math.floor((i-1)%3);
            if(f)
            {
                v.textContent="1";
                arr[r][c]=1;
                if(win(r,c))
                {
                    document.getElementById("tik").innerHTML="Player -1 is Winner";
                }
                else if(draw())
                {
                    alert("Match Draw");
                }
            }
            else
            {
                v.textContent="2";
                arr[r][c]=2;
                if(win(r,c))
                {
                    
                    document.getElementById("tik").innerHTML="Player -2 is Winner";
                }
                else if(draw())
                {
                    alert("Match Draw");
                }
            }
            
            

            f=!f;
        });
    }
   function win(r,c)
   { let ro=true,co=true,cross=true;
    if(r!=c){
       for(let i=0;i<2;i++)
       {
           if(arr[r][i]!=arr[r][i+1])
           ro=false;
       }
       for(let i=0;i<2;i++)
       {
           if(arr[i][c]!=arr[i+1][c])
           co=false;
       }
       if(ro||co)
       return true;
    }
    else
    {
        for(let i=0;i<2;i++)
       {
           if(arr[r][i]!=arr[r][i+1])
           ro=false;
       }
       for(let i=0;i<2;i++)
       {
           if(arr[i][c]!=arr[i+1][c])
           co=false;
       }
       for(let i=0;i<2;i++)
       {
           if(arr[i][i]!=arr[i+1][i+1])
           cross=false;
       }

       if(ro||co||cross)
       return true;
    }
   }
function draw(){
    
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            if(arr[i][j]==0)
            return false;
        }
    }
    return true;
}
  document.getElementById("btn").addEventListener("click",function(){
    location.reload();
  }) 
