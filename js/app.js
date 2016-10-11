
document.addEventListener("DOMContentLoaded",function(){
  var hash={
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4",
    key5:"value5",
    key6:"value6",
    key7:"value7",
    key8:"value8",
    key9:"value9",
    key10:"value10",
  };
  var arr=[];
  var array=[1,2,3,4,5,6,7,8,9,0];
  var res = array.some(function(number,index){// al menos uno
    return number < 10;
  });
  console.log(res);
  var res1 = array.every(function(number,index){//todos
    return number < 10;
  });
    console.log(res1);
  for(var i in hash){
    arr.push(i+":"+hash[i]);
  }
  console.log(arr.reverse());
});
console.log("JS File Cargado");
