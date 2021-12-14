//creating the table
var table = document.createElement('table');
table.setAttribute('class','table');
var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');

var tr=document.createElement('tr');
var th1=createelement('th','first');
var th2=createelement('th','last');
tr.append(th1,th2);
thead.append(tr);

//1
var tbody=document.createElement('tbody');
var tr=document.createElement('tr');
var td1=createelement('td','john');
var td2=createelement('td','man');
tr.append(td1,td2);
tbody.append(tr);

//2
var tr=document.createElement('tr');
var td1=createelement('td','vignesh');
var td2=createelement('td','raaj');
tr.append(td1,td2);
tbody.append(tr);

//3
var tr=document.createElement('tr');
var td1=createelement('td','mohan');
var td2=createelement('td','kumar');
tr.append(td1,td2);
tbody.append(tr);

table.append(thead,tbody);

//table execution
document.body.append(table);

function createelement(elename,value)
{
    //ele:div
    //value=content
    var element=document.createElement(elename);
    element.innerHTML=value;
    return element;
}


