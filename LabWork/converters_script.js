function tempconv() {
    var c = document.getElementById("c").value;
    var f = (c * 9/5) + 32;
    document.getElementById("f").value = f

    // if (c.value == undefined) {
    //     alert("Please enter temperature in celcius");
    //     c.focus();
    //     return false;
    // }
}