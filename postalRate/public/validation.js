function validate() {
    var doc = document.getElementById("wt")
    var reg2 = /\d+[.]?/
    if (reg2.test(doc.value) != true) {
        document.getElementById("bad").innerHTML = "* This needs to be a number."
        return false
    }
}