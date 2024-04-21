
let imagearray=[
    "https://images-static.nykaa.com/uploads/bd167b45-78ef-4e49-9e0f-d765e20ffdb8.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/0601a874-6319-4deb-9bda-11bf44a54859.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/fe1ed0b3-5fc3-487f-8aab-652a3e47d253.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/9de4dd45-2bc7-4d93-823c-853a3f65c739.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/edc1369e-4f71-4690-93c5-0dfa7655dabc.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/11a44678-5022-4845-b699-4c053b9b07ad.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/c625b059-0540-4b3d-b4b9-22b42642e035.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/61ce5ad2-49c0-4956-a6c1-6df0e8988605.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/4ff2fe48-f061-48de-859d-3625156f2fb6.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/89634389-5978-45ab-a428-3040a99f9238.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/1c29f6b0-aed4-428a-813c-f6453eff5468.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/3ed263fe-082b-44da-acb2-d501f2d08911.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/507a39d9-d91d-45af-80b5-435c20c7fb54.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/261c2b42-d20c-49dd-a5e6-a3edfaac646c.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/639e7435-c2c8-4bae-a7e6-262e4986d93d.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/6ca5ce0a-0023-48c5-a5cd-907e4eedf173.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/3cbb6e82-d384-404b-b32e-9bc5430df64f.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/bedc020b-a862-4b0d-b468-5727100b9563.gif?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/fd495c56-6c47-40c3-9f98-535242d39fc6.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/81e2d613-fad5-48ea-bca4-03e6a547a6a6.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/4311803f-3d42-4a74-a823-241a2a3e1b71.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/178908fb-cd48-4f44-ba1f-f20a33a1d00e.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/663e5211-1bcc-49dc-9af5-4c129ebc038c.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/5431d0aa-cc55-4652-a6ba-5148553a7b25.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/476e8c8e-5a36-4c72-94c4-ea23844b9783.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/e747bd97-61a0-4df8-bea5-b414994a67c6.jpg?tr=w-2400,cm-pad_resize",

];


window.addEventListener("load",startimageslider); // load event occure and function call

var idt;
let index;
function startimageslider(){
    let image=document.getElementById("img"); // catch img tag under child div
    index=0;
    idt=setInterval(function (){
        if(index==imagearray.length){
            index=0;
        }
    
      image.src=imagearray[index];
      index++;
    },1200)
}

function Time(){
    this.cleartime=function (){
        clearInterval(idt);
    }
    this.cleartime();
}
function Previous(){
    this.time=new Time();
    this.time.cleartime();
    let image=document.getElementById("img");
    index--;
    if(index<0){
        index=imagearray.length-1;
    }
    image.src=imagearray[index];

}

function Next(){

    let image=document.getElementById("img");
    this.time=new Time();
    this.time.cleartime();
  
  index++;
  if(index==imagearray.length){
    index=0;
  }
  image.src=imagearray[index];
  console.log(index)
}