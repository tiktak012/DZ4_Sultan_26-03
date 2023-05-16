var data = [null,null, 123, undefined, null, "qwerty",'opopp', 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, "uiui"];

var typeObj = {}

for  (var item of data) {
    var itemType = typeof item;

    if  (!typeObj[itemType]){
        typeObj[itemType] =[];
    }

    typeObj[itemType].push(item);

}
var sortedArray = Object.values(typeObj).sort((a, b)=> b.length - a.length)
for (var a of sortedArray){
    console.log(a)
}



