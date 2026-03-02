const listaPA = ["1001", "1002", "1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", "1011", "1012", "1013", "1014", "1015"];

for (let contador = 0; contador < listaPA.length; contador++) {
    pm.environment.set("listaPa" + contador, listaPA[contador]);
}

console.log("Total de itens processados:", listaPA.length);