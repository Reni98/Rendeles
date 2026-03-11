    if(localStorage.getItem("rendelesek") == null){
    localStorage.setItem("rendelesek", JSON.stringify([]))
}
    
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
     

    function adatTorles(){
        localStorage.removeItem("rendelesek")
        localStorage.setItem("rendelesek",JSON.stringify([]))
        
        alert("Sikeres volt a törlés!")
         table.innerHTML=`
        <tr>
            <th>Megrendelő Neve</th>
            <th>Telefonszám</th>
            <th>Kiszállítási cím</th>
            <th>Étel</th>
            <th>Ár</th>   
        </tr>    
    `
    rendelesek.forEach(rendel => {
        table.innerHTML += `
        <tr>
            <td>${rendel.mnev}</td>
            <td>${rendel.phone}</td>
            <td>${rendel.lakcim}</td>
            <td>${rendel.etel}</td>
            <td>${rendel.ar} Ft</td>
        </tr>        
        `
        
    });

    
    }

    