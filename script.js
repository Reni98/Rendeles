let rendelesek = JSON.parse(localStorage.getItem("rendelesek")) || [];

function megrendeles(){
    let mnev =document.getElementById("mnev").value
    let phone=document.getElementById("phone").value
    let lakcim = document.getElementById("cim").value
    let etel=document.getElementById("etlap").value
    let ar=0

    if (etel=="pizza"){
        ar+=3200
    }
    else if(etel=="hamburger"){
        ar+=4200
    }
    else if(etel=="bolognai"){
        ar+=2800
    }
    else if(etel=="paradicsomleves"){
        ar+=1800
    }
    let megrendelo={
        mnev:mnev,
        phone:phone,
        lakcim:lakcim,
        etel:etel,
        ar:ar
    }

    rendelesek.push(megrendelo)
    console.log(rendelesek);
    localStorage.setItem("rendelesek",JSON.stringify(rendelesek))
    alert("Sikeres volt a rendelés!")
    
}

function megrendelesekMegjelnitese(){
    window.location.href="megrendelesek.html"
    
}