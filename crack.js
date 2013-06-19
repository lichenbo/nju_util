function getElementByAttribute(aAttribute,aValue,aInElement)
  {
	  var ElementVerifier;
		var Elements=new Array();
	  function SearchElement(aElement)
		{ 
		  if(aElement==null||aElement==undefined)return
		  if(ElementVerifier(aElement))
			{ 
			  Elements[Elements.length]=aElement;
			}
			SearchElement(aElement.firstChild);
			SearchElement(aElement.nextSibling);
		}
		
		if(aInElement==undefined)aInElement=document.body;
		str="if(Element."+aAttribute+"=='"+aValue+"'){return true;}else{return false}";
		ElementVerifier=function(aElement)
		{
		  Element=aElement;
			if(aElement.nodeName=='#text')return false;
			var E=new Function(str);
			if(E()){return true;}else{return false};
		}
		SearchElement(aInElement);
		return Elements;
  }
			var trs = document.getElementsByTagName("tr"), item

			var lcb = getElementByAttribute("value","5",document)
			lcb.push(getElementByAttribute("value","0",document).slice(-1)[0])
			lcb.forEach(function(a){a.click()})
			getElementByAttribute("name","sub",document)[0].click()


