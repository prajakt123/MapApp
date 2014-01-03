//if the key is stored in the device db then navigate user to frmOptions.
//else 	navigate user to  frmAPIKey if no key is stored in the device.
/*****************************************************************
* Name    : checkStorage
* Author  : Kony 
* Purpose : The below function is to check the storage of the key in the device db.
******************************************************************/
function checkStorage(key1)
{
	tmp=0;
	tmp1=0;
	key = kony.store.getItem(key1);
	if(key==null)
	{
		frmAPIKey.show();
	}
	else
	{
		frmOptions.show();
	}
}
function onLinkClick()
{
	kony.application.openURL("https://code.google.com/apis/console/");
}
/*****************************************************************
* Name    : saveKey
* Author  : Kony 
* Purpose : The below function is to check the checkbox whether it is checked or not.
******************************************************************/
function saveKey()
{
	if(tmp==0)
		tmp=1;
	else
		tmp=0;
}
function openNowCall()
{
	if(tmp1==0)
		tmp1=1;
	else
		tmp1=0;
}
/*****************************************************************
* Name    : checkKey
* Author  : Kony 
* Purpose : The below function is to check the Google API key intered by the user.
******************************************************************/
function checkKey()
{
	//key=frmAPIKey.txtAPIKey.text;
	key="AIzaSyDg1m_croyAxo67tRJSEEClBIwDUM_qUio";
	if(key==""|| key==null)
		{alert("Please enter the Google API Key.");}
	else
		{
			//key=key.trim();
			if(tmp==1)
			{
				kony.store.setItem("mapKey", key);
			}
			else
			{
				//alert("key is not saved");
			}
			frmOptions.show();
		}
}
/*****************************************************************
* Name    : errorcallback
* Author  : Kony 
* Purpose : The below function is the error call back of 'kony.location.getCurrentPosition' API,Used to get current location details .
******************************************************************/
function errorcallback(positionerror)
{
	kony.print("in error callback of getCurrentPosition");
	kony.application.dismissLoadingScreen();
	alert("in error callback");
	var errorMesg = "Error code: " + positionerror.code;
	errorMesg = errorMesg  + " message: " + positionerror.message
	alert(errorMesg);
}
/*****************************************************************
* Name    : geoSuccessCallBack
* Author  : Kony 
* Purpose : The below function is the success call back of 'kony.location.getCurrentPosition' API,Used to get current location details .
******************************************************************/
function successcallback(position)
{
	kony.print("in succes callback of getcurrentPosition");
	latitude=position.coords.latitude;
	longitude=position.coords.longitude;
	kony.print("latitude:"+latitude+","+"longitude:"+longitude);
	var radius;
	radius=frmOptions.txtDistance.text;
	openNow=" ";
	if(radius==""||radius==null)
		radius="5000";
	if(tmp1==0)
		openNow="";
	else
		openNow=true;	
	atmUrl="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+","+longitude+"&radius="+radius+"&types=atm&openNow="+openNow+"&sensor=false&key="+key;
	//atmUrl="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=atm&sensor=false&key=AIzaSyDg1m_croyAxo67tRJSEEClBIwDUM_qUio";
	kony.print("#####################"+atmUrl);
	try
    {
	   var myhttpheaders={authkey:"myauthkey", authtoken:"myauthtoken"};
	   var inputParamTable={};
	   if(kony.os.deviceInfo().name=="iPhone"|| kony.os.deviceInfo().name=="iPad")
	  	inputParamTable={appID:"Map",serviceID:"accountLogin",channel:"rc",httpheaders:myhttpheaders};
		else
		{
			inputParamTable["httpconfig"]={method: "get"};
	   		inputParamTable["httpheaders"]=myhttpheaders;
		}
	    var connHandle = kony.net.invokeServiceAsync(atmUrl,inputParamTable,callbackfunction);
	}catch(err)
     {
     	kony.application.dismissLoadingScreen();
     	alert("Error"+err);
     }
}
/*****************************************************************
* Name    : callbackfunction
* Author  : Kony 
* Purpose : The below function is the success call back of 'kony.net.invokeServiceAsync' API,Used to get ATMs  location details .
******************************************************************/
function callbackfunction(status, resulttable)
{
	kony.print("in callbackfunction of invokeServiceAsync");
    if(status == 400)
    {
    	if (resulttable["results"]== undefined)
        {
        	alert("Service not available.Please check your network connections and try again.");
            kony.application.dismissLoadingScreen();
            return;
        }
		locationList= new Array();
    	var len=resulttable["results"].length;
    	for(i=0;i<len;i++)
    	{
    		var location=new Object();
    		location={	"lat":resulttable["results"][i]["geometry"]["location"]["lat"].toString(),
    					"lon":resulttable["results"][i]["geometry"]["location"]["lng"].toString(),
    					"image":"atm.png",
    					"name":resulttable["results"][i]["name"].toString(),
    					"desc":resulttable["results"][i]["vicinity"].toString(),
    					"calloutData": {"key1":resulttable["results"][i]["name"].toString(),"key2":resulttable["results"][i]["vicinity"].toString()},
    					"showcallout":false};
    		locationList.push(location);
    	}
    	var location=new Object();
    	location={"lat":latitude.toString(),"lon":longitude.toString(),"image":"pin.png","name":"current position","desc":" ","showcallout":false};
    	locationList.push(location);
    	frmMap.mapAtms.widgetDataMapForCallout={lblName:"key1",lblAddress:"key2"};
    	frmMap.mapAtms.locationData=locationList;
    	kony.application.dismissLoadingScreen();
    	frmMap.show();
    }
}
/*****************************************************************
* Name    : getAtms
* Author  : Kony 
* Purpose : The below function is to call the 'kony.location.getCurrentPosition' API,Used to get current location details .
******************************************************************/
function getAtms()
{
	var positionoptions = {}; // 15 secs
	kony.print("in getAtms"); 
	try{
		kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false,null);
		kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions );
	}catch(err)
	{
		kony.application.dismissLoadingScreen();
		//alert("api error");
		alert(err.message);
	}
}
/*****************************************************************
* Name    : onPinClickCallBack
* Author  : Kony 
* Purpose : The below function is the call back of onPinClick event of map,used to display current location details .
******************************************************************/
function onPinClickCallBack(locations)
{
	//var parentTable =[];
	targetLat=locations["lat"].toString();
	targetLng=locations["lon"].toString();
	//kony.print(targetLat+":"+targetLat);
	frmDetails.lblAtmName.text=locations["name"].toString();
	frmDetails.lblAtmAddress.text=locations["desc"].toString();
	frmDetails.show();
	/*popUpDetails.lblName.text = locations["name"].toString();
	popUpDetails.lblDetails.text = locations["desc"].toString();
	parentTable["widget"] = eventObj;
	parentTable["anchor"] = "top";
	popUpDetails.setContext(parentTable);
	popUpDetails.show();*/
}
/*****************************************************************
* Name    : getDirection
* Author  : Kony 
* Purpose : The below function is to give the direction of the selected ATM from the current location.
******************************************************************/
function getDirection()
{
		/*frmDirection.brwsrDirection.url="https://maps.google.com/maps?saddr="+latitude+","+longitude+"&daddr="+targetLat+","+targetLng;
		frmDirection.show();*/
		var drctnUrl;
		if(kony.os.deviceInfo().name=="iPhone"||kony.os.deviceInfo().name=="iPad")
			drctnUrl="https://maps.apple.com?saddr="+latitude+","+longitude+"&daddr="+targetLat+","+targetLng;
		else
			drctnUrl="https://maps.google.com/maps?saddr="+latitude+","+longitude+"&daddr="+targetLat+","+targetLng;
		kony.application.openURL(drctnUrl);
}
/*****************************************************************
* Name    : setViewMode
* Author  : Kony 
* Purpose : The below function is to set the view mode of the map.
******************************************************************/
function setViewMode(radio)
{
    var id=radio.selectedKey;
	switch(id)
	{
		case "1": frmMap.mapAtms.mode=constants.MAP_VIEW_MODE_HYBRID;break;
		case "2": frmMap.mapAtms.mode=constants.MAP_VIEW_MODE_SATELLITE;break;
		case "3": frmMap.mapAtms.mode=constants.MAP_VIEW_MODE_NORMAL;
	}
	viewSelector.dismiss();
}
/*****************************************************************
* Name    : sliderCallBack
* Author  : Kony 
* Purpose : The below function is to set the zoom level of the map.
******************************************************************/
function sliderCallBack(event)
{
	frmMap.mapAtms.zoomLevel=event.selectedValue;
}

/*function showPopUp(eventObj){
	var parentTable = [];
	parentTable["widget"] = eventObj;
	parentTable["anchor"] = "bottom";
	viewSelector.setContext(parentTable);
	viewSelector.show();
}*/