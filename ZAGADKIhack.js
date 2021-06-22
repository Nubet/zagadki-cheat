var i = 1;

while (i<=4)
{
 if (document.querySelector("#zagzagadka > div.zagodpowiedzi > span:nth-child"+"("+i+")").innerHTML.indexOf(zagodpgood, 0) >= 0)  
 {
  document.querySelector("#zagzagadka > div.zagodpowiedzi > span:nth-child"+"("+i+")").style.backgroundColor = "purple";
 }
 i++;
}
