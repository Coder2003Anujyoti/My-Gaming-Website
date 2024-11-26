var j=1;
function roc()
{ let a=[1,2,3,4,5,6,7];
  var k= document.getElementById("i"+j);
  k.style.display="block";
  a.splice(j-1,1);
  for(let i=0;i<a.length;i++)
    {  
   document.getElementById("i"+a[i]).style.display="none";
    }
  if(j==7)
  { j=1;
  }
  else
  { j++;
  }
  
  
}
setInterval(roc,500);
roc();
