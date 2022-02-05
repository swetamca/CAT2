var xmlDoc

function loadXML() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;
            showTable();
        }
    };
    xmlhttp.open("GET", "submissions.xml", true);
    xmlhttp.send();
}

function showTable() {
    var i;
    var table = "<tr><th>Name</th><th>University</th></tr>";
    var x = xmlDoc.getElementsByTagName("computer-science");
    for (i = 0; i < x.length; i++) {

        table += "<tr><td>" + x[i].getElementsByTagName("stu-name")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("stu-university")[0].childNodes[0].nodeValue + "</td></tr>";
    }

    document.getElementById("table").innerHTML = table;
}