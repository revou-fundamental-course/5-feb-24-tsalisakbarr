function celciusKonversi() {
    let data = parseFloat(document.getElementById("inputCelcius").value);
    let fahrenheit = (data * 9/5) + 32;
    document.getElementById("hasilKonversi").innerHTML = fahrenheit;
    document.getElementById("caraKalkulasi").innerHTML = data + "℃ * (9/5) + 32 = " + fahrenheit + "℉"; 
    console.log(fahrenheit)
}

function resetForm() {
    let form = document.getElementById("form1");
    form.reset();
   

}