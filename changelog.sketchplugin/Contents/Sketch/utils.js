//get javascript array from NSArray
function jsArray(array) {
  var length = [array count];
  var jsArray = [];

  while(length--) {
  	jsArray.push([array objectAtIndex: length]);
  }
  return jsArray;
}

//find artboard with name
function getArtboardWithName(name) {
	var artboards = jsArray([doc artboards]);
	for(var i = 0; i < artboards.length; i++) {
	  	var artboard = artboards[i];
	  	//if page matches name
	  	if([artboard name] == name) {
	  		return artboard;
	  	}
	}
	return;
}

//find layer based on layer name and artboard name
function getLayerWithName(layerName, artboardName) {
  var all_layers = getArtboardWithName(artboardName).layers();
    for (x = 0; x < [all_layers count]; x++) {
      if (all_layers.objectAtIndex(x).name() == layerName) {
        return all_layers.objectAtIndex(x);
    }
  }
}

function currentDate() {
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = dd+'/'+mm+'/'+yyyy;
return today;
}

function currentTime() {
var d = new Date()
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
if (h<=9) {h = '0'+h};
if (m<=9) {m = '0'+m};
if (s<=9) {s = '0'+s};

time = h+':'+m+':'+s;
return time;
}

function saveScript(code) {
	    var string = [NSString stringWithFormat: "%@", code],
	      filePath = "/Users/" + NSUserName() + "/Library/Application Support/com.bohemiancoding.sketch3/Plugins/"+fileName+"/Contents/Resources/script.js";
			[string writeToFile: filePath atomically: true
	      encoding: NSUTF8StringEncoding error: nil];
}
