/*$("#customSearch").click(
   function()
   {
      var filterString = $("#inputbox").val();
      var jsonString = $("#textbox").val();
      var jsonList = jsonString.split("\n");
      var finalString = "";
      for(var i = 0;i < jsonList.length;i++)
      {
         if((jsonList[i].indexOf(filterString) >= 0))
         {
            finalString += jsonList[i];
            finalString += '<br/>';
         }
      }
      $("#jumbotron2").html(finalString);
   }
);*/
$("#customSearch").on("click",
  function()
  {
    var jsonString = $("#inputJson").val();
    var json = JSON.parse(jsonString);
    //$("#Output").html(json.keys());
    var text = setKeys(json);
    console.log(text);
  });

function setKeys(jsonData)
{
  var text = "";
  var jsonKeys = Object.keys(jsonData);
  for(var key in jsonKeys)
  {
    //console.log(jsonKeys[key]);
    if(isObject(jsonData[jsonKeys[key]]))
    {
      text += jsonKeys[key] + "\n" + setKeys(jsonData[jsonKeys[key]]) +"\n";
    }
    else if(isArray(jsonData[jsonKeys[key]]))
    {
      var array = jsonData[jsonKeys[key]];
      text += "\n" + jsonKeys[key] + "\n";
      for(var i=0;i<array.length;i++)
      {
        if(isObject(array[i]))
          text += setKeys(array[i]);
      }
    }
    else
    {
      text += "\n" + jsonKeys[key] + "\n";
    }
  }
  return text;
}
function isObject (value)
{
   return value && typeof value === 'object' && value.constructor === Object;
};
/*
function jsonFilter(json)
{
  var txt = '';
  for (var key in json)
  {
    if (json.hasOwnProperty(key))
    {
      if ('object' == typeof(json[key]))
      {
        txt += jsonFilter(json[key]);
      }
    }
    else
    {
      txt += key;
    }
  }
  return txt;
}
*/
function isString (value) {
return typeof value === 'string' || value instanceof String;
};
function isNumber (value) {
return typeof value === 'number' && isFinite(value);
};
function isArray (value) {
return value && typeof value === 'object' && value.constructor === Array;
};
function isFunction (value) {
return typeof value === 'function';
};
function isNull (value) {
return value === null;
};

// Returns if a value is undefined
function isUndefined (value) {
return typeof value === 'undefined';
};
function isBoolean (value) {
return typeof value === 'boolean';
};
function isRegExp (value) {
return value && typeof value === 'object' && value.constructor === RegExp;
};
function isError (value) {
return value instanceof Error && typeof value.message !== 'undefined';
};
function isDate (value) {
return value instanceof Date;
};
function isSymbol (value) {
return typeof value === 'symbol';
};
