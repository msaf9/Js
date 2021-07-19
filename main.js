function snap(){
    var win
    for (let i = 0; i < 5; i++) {
        win = window.open('', '_blank');    
    }
    
    win.close();
}

function testSnap(windowInfoArray) {
    var some = window.name();
    console.log(some);
}
  
chrome.windows.getAll({populate:true}, getAllOpenWindows);

function getAllOpenWindows(winData) {

  var tabs = [];
  for (var i in winData) {
    if (winData[i].focused === true) {
        var winTabs = winData[i].tabs;
        var totTabs = winTabs.length;
        for (var j=0; j<totTabs;j++) {
          tabs.push(winTabs[j].url);
        }
    }
  }
  console.log(tabs);
}