window.onload = function setFocus(){
    document.getElementById("loadbox").setAttribute('style','opacity:0;pointer-events: none;')
    document.getElementById("input").focus();
}

function listTitles(){
  var title = document.getElementById("input").value;
  var titleRE = new RegExp("\\n(.*?"+title+".*?)\\n","gi");
  var response = abbrevlist.match(titleRE).join("<br />");
      document.getElementById("responselist").innerHTML = response;

}
