class Lampa{
    constructor(elem, index){
        this.elem = elem;
        this.allapot = false;
        this.index = index;
        this.setSzin();

        // esemenykezelo
        this.elem.on("click", ()=>{
            //console.log(this);
            this.setAllapot();
            this.kattintasTrigger();
        });

        // ha rakattintunk az elemre, az allapotot meg kell valtoztatni 
        // meghivhi a setSzin-t
    }

    setSzin(){
        if(this.allapot){
            this.elem.css("background-color", "black");
        }else{
            this.elem.css("background-color", "white");
        }
    }

    setAllapot(){
        this.allapot=!this.allapot;
        this.setSzin();
    }

    kattintasTrigger(){
        //let esemeny = new  Event("kartyaKattintas");
        let esemeny = new CustomEvent("korreKattint", {detail:this});
        //ugya hozzuk letre az esemenyt, hogy azt is megmondjuk mely objektum valtotta ki
        console.log("Esemeny kivaltva!");
        window.dispatchEvent(esemeny);
    }


}