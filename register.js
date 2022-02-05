var xmlDoc
var xmlFile = 'register.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            xmlDoc = xmlReq.responseXML
            displayTable();
            myFunction();
        }
    }
    xmlReq.open('GET', xmlFile, true)
    xmlReq.send()
}

//function to display html table from xml data
function displayTable()
{
    var i;
    var table = "<tr><th>Name</th><th>University</th></tr>"

    var x = xmlDoc.getElementsByTagName("computerscience")
    for (i = 0; i < x.length; i++)
    {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("university")[0].childNodes[0].nodeValue + "</td><td>"             }
    document.getElementById("table").innerHTML = table
}

//function to add new record to xml
function addNewRecord()
{
    var i
    var emp = []
    var x = document.getElementById("addRecordForm")
    computerscience = xmlDoc.createElement("computerscience")
    emp[0] = xmlDoc.createElement("name")
    emp[1] = xmlDoc.createElement("university")
    emp[2] = xmlDoc.createElement("phone")
    emp[3] = xmlDoc.createElement("email")
    for(i = 0; i < 4; i++)
    {
        
        emp[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        computerscience.appendChild(emp[i])
    }
    xmlDoc.documentElement.appendChild(computerscience);
    console.log("Record added: " + x.elements[0].value)
    displayTable()
}