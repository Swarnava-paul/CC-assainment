let minute;
let second;
let check=0;
let timeid;

    function start(){
        if(check==0){
            check+=1;
    
        minute=document.getElementById("inputminute").value;
        second=document.getElementById("inputsecond").value;

            

            timeid=setInterval(function(){
                
               if(second==0){
                minute--;
                document.getElementById("outputminute").innerText=`${minute} m`;
                second=60;
                document.getElementById("outputsecond").innerText=`${second} s`;
            
               }
               else{
                second--;
                document.getElementById("outputsecond").innerText=`${second} s`;
                document.getElementById("outputminute").innerText=`${minute} m`;
        
               }
               
        
            },1000);
        }
       
    }
function pause(){
    clearInterval(timeid);
    check=0;

}

function reset(){
    clearInterval(timeid);
    check=0;
    document.getElementById("outputsecond").innerText=`00 s`;
    document.getElementById("outputminute").innerText=`00 m`;
}