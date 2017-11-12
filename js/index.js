var containsList = [];
var parentChildStack = "";
$("#customSearch").on("click",
  function()
  {
    var jsonString = $("#inputJson").val();
    var json = JSON.parse(jsonString);
    var text = setKeys(json);
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
          $("#Output").append("<a class='btn btn-primary' id="+jsonKeys[key]+">"+jsonKeys[key]+"</a>");
          containsList.push(jsonKeys[key]);
          //parentChildStack += jsonKeys[key] + "->";
          //console.log(parentChildStack);
      }
      setKeys(jsonData[jsonKeys[key]]);
    }
    else if(isArray(jsonData[jsonKeys[key]]))
    {
      var array = jsonData[jsonKeys[key]];
      if(containsList.indexOf(jsonKeys[key])<0)
      {
          $("#Output").append("<a class='btn btn-primary' id="+jsonKeys[key]+">"+jsonKeys[key]+"</a>");
          containsList.push(jsonKeys[key]);
          //parentChildStack += jsonKeys[key] + "->";
          //console.log(parentChildStack);
      }
      for(var i=0;i<array.length;i++)
      {
        if(isObject(array[i]))
        {
          //if(containsList.indexOf(array[i])<0)
          //    $("#Output").append("<a class=btn btn-primary' id="+array[i]+">"+array[i]+"</a>");
          setKeys(array[i]);
        }
      }
    }
    else
    {
      if(containsList.indexOf(jsonKeys[key])<0)
      {
          $("#Output").append("<a class='btn btn-primary' id="+jsonKeys[key]+">"+jsonKeys[key]+"</a>");
          containsList.push(jsonKeys[key]);
          //parentChildStack += jsonKeys[key] + "->";
          //console.log(parentChildStack);
      }
    }
  }
  var tempList = parentChildStack.split("->");
  tempList.r
  //parentChildStack = tempList.join("->");
  ///console.log(parentChildStack);
}
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
};

function isString(value) {
  return typeof value === 'string' || value instanceof String;
};

function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
};

function isArray(value) {
  return value && typeof value === 'object' && value.constructor === Array;
};

function isFunction(value) {
  return typeof value === 'function';
};

function isNull(value) {
  return value === null;
};

function isUndefined(value) {
  return typeof value === 'undefined';
};

function isBoolean(value) {
  return typeof value === 'boolean';
};

function isRegExp(value) {
  return value && typeof value === 'object' && value.constructor === RegExp;
};

function isError(value) {
  return value instanceof Error && typeof value.message !== 'undefined';
};

function isDate(value) {
  return value instanceof Date;
};

function isSymbol(value) {
  return typeof value === 'symbol';
};
