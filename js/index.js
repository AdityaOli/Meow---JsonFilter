var containsList = [];
var separatorStack = [];
$("#customSearch").on("click",
  function()
  {
    var jsonString = $("#inputJson").val();
    var json = JSON.parse(jsonString);
    setKeys(json);
  }
);

function setKeys(jsonData)
{
  var text = "";
  var jsonKeys = Object.keys(jsonData);
  for(var key in jsonKeys)
  {
    if(isObject(jsonData[jsonKeys[key]]))
    {
      if(containsList.indexOf(jsonKeys[key])<0)
      {
        separatorStack.push(jsonKeys[key]);
        console.log(separatorStack);
        $("#Output").append("<a class='btn btn-primary' id="+separatorStack.join("/")+">"+separatorStack.join("/")+"</a>");
        //containsList.push(jsonKeys[key]);
      }
      setKeys(jsonData[jsonKeys[key]]);
    }
    else if(isArray(jsonData[jsonKeys[key]]))
    {
      var array = jsonData[jsonKeys[key]];
      if(containsList.indexOf(jsonKeys[key])<0)
      {
        separatorStack.push(jsonKeys[key]);
        console.log(separatorStack);
        $("#Output").append("<a class='btn btn-primary' id="+separatorStack.join("/")+">"+separatorStack.join("/")+"</a>");
        //containsList.push(jsonKeys[key]);
      }

      if(isObject(array[0]))
      {
          setKeys(array[0]);
          //separatorStack.push(jsonKeys[key]);
          console.log(separatorStack);
      }
    }
    else
    {
      if(containsList.indexOf(jsonKeys[key])<0)
      {
        separatorStack.push(jsonKeys[key]);
        console.log(separatorStack);
        $("#Output").append("<a class='btn btn-primary' id="+separatorStack.join("/")+">"+separatorStack.join("/")+"</a>");
        //containsList.push(jsonKeys[key]);
      }
    }
  }
  //console.log(separatorStack);
  //separatorStack.pop();
}

//===================================== Check Fields ==================================================================
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
};
function isArray(value) {
  return value && typeof value === 'object' && value.constructor === Array;
};
//================================================End Check Fields=======================================================
