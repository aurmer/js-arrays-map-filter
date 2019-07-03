function show(info) {
  document.getElementById("answers").innerHTML = info
}

function add(info) {
    document.getElementById("answers").innerHTML += "<br><br>" + info
}



show("")


add(`1) The avg price is ${Math.round(items.reduce( (accumulator,element) => accumulator + element.price, 0 ) / items.length * 100) / 100}`)

add(`2) Items which cost between $14 and $18 <br><br>${items.filter( element => element.price >= 14 && element.price <= 18).reduce( function(accumulator,element) { return accumulator + "- " + element.title + "<br>"}, "") }`)

add(`3) The items listed in GBP are<br><br>${items.filter( element => element.currency_code === "GBP").reduce( (accumulator,element) => (accumulator + "- " + element.title + " costs &pound;" + element.price + "<br>"),"") }`)

add(`4) The items made of wood are<br><br>${items.filter( element => element.materials.includes("wood") ).reduce( (accumulator,element) => (accumulator + "- " + element.title + " is made of wood.<br>"),"")}`)

add(`5) The items made of 8 or more materials are<br><br>${items.filter( element => element.materials.length > 7 ).reduce( function(accumulator,element) {
    return accumulator + "- " + element.title + " has " + element.materials.length + " materials:<br>" + element.materials.reduce( (acc2,material) => (acc2 + "- " + material + "<br>"),"") + "<br>"
  },"")}`)

add(`6) ${items.filter( element => element.who_made === "i_did").length} were made by their sellers`)
