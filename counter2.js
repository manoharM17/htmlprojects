const h1 = document.getElementsByTagName('h1')
const res = document.getElementById('value')

let count=0;
function incr()
{   
    if(count<25)
    {  
         count++
         
 h1[0].textContent=count

    if (count %2==0)

{
res.innerHTML="Even"
}
else
 {
    res.innerHTML="Odd"
}

    }
   

else
{
alert("Don't increase than 25")
}
}
function decr()
{
    if(count>0)
    {  
         count--
         
    h1[0].textContent=count
   
    if (count %2==0)

{
res.innerHTML="Even"
}
else
 {
    res.innerHTML="Odd"
}

    }
   

else
{
alert("Don't decrease than 0")
}
}

function reset()
{
count=0;
h1[0].textContent=count

if (count %2==0)

{
res.innerHTML="Even"
}
else
 {
    res.innerHTML="Odd"
}

}
