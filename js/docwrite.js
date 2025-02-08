document.write("hello js")
document.write("<h1>Hello world</h1>")
document.write(`<table>
    
    
    <tr><th>Title</th></tr>
    <tr><td>Saurabh</td></tr>
    </table>`
)



let multiplicant = prompt("enter a multiplicant")



let tbody = "";

let product = 1;
for(let i = 1; i<=10;i++) {
    product = multiplicant*i;

    tbody += `<tr>
            <td> ${multiplicant}</td>
            <td>${i}</td>
            <td>${multiplicant} * ${i} =  ${product}</td>
            </tr>`


}




    let table = `<table>
    <tr>
    <th>Multiplicant</th>
    <th>Multipier</th>
    <th>Product</th>
    </tr>
    ${tbody}

    </table>`;



    document.write(table)