$(function(){
// a szuloelem es a sablonelem meghatarozasa
// a sablonelem klonozasa es a szuloelemhez csatolasa
const szuloElem = $("article");
const sablonElem = $(".lampa");
const lampaTomb=[];
const meret = 9;
const mainWidth = meret*37;
$("main").css("width", mainWidth);
// a asblonelem klonozasa
for (let index = 0; index < meret; index++) {
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const lampa = new Lampa(ujElem, index);
    lampaTomb.push(lampa);
}

sablonElem.remove();
//console.log(lampaTomb);

$(window).on("korreKattint", (event)=>{
    console.log(event.detail);
    let elemID = event.detail.index;
    if (elemID>2){
        lampaTomb[elemID-3].setAllapot();
    }
    if (elemID%3!==0){
        lampaTomb[elemID-1].setAllapot();
    }
    if (elemID<6){
        lampaTomb[elemID+3].setAllapot();
    }
    if ((elemID+1)%3!==0){
        lampaTomb[elemID+1].setAllapot();
    }
});

});