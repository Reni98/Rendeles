    if(localStorage.getItem("rendelesek") == null){
    localStorage.setItem("rendelesek", JSON.stringify([]))
}

function adatKiir(){
     let table=document.getElementById("rendeleskiir")

    let orders=JSON.parse(localStorage.getItem("rendelesek"))
 
    console.log("Az első rendelés adatai:", orders[0]);
    table.innerHTML=`
        <tr>
            <th>Megrendelő Neve</th>
            <th>Telefonszám</th>
            <th>Kiszállítási cím</th>
            <th>Étel</th>
            <th>Ár</th>   
        </tr>    
    `
    orders.forEach(order => {
        table.innerHTML += `
        <tr>
            <td>${order.mnev}</td>
            <td>${order.phone}</td>
            <td>${order.lakcim}</td>
            <td>${order.etel}</td>
            <td>${order.ar} Ft</td>
        </tr>        
        `
    });
     
}
   adatKiir()

    function adatTorles(){
        
        localStorage.removeItem("rendelesek")
        localStorage.setItem("rendelesek",JSON.stringify([]))
        
        alert("Sikeres volt a törlés!")
       
        adatKiir()
    }

    function rendelésTorlése(){
        let orders=JSON.parse(localStorage.getItem("rendelesek"))

        let torlendo=document.getElementById("t_nev").value
              
        // orders.forEach(r =>{
        //     if (r.mnev == torlendo){
        //         localStorage.removeItem(torlendo)
        //     }

        //     else{
        //         localStorage.setItem("orders",JSON.stringify(orders))
        //         }            
        // })

        for (let i=0; i < orders.length; i++){
            if (orders[i] != torlendo){
                localStorage.removeItem(orders[i])
            }
        }
        alert("Sikeres volt a törlés!")
       
        adatKiir()
    }
