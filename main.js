/*
localStorage.clear();
localStorage.setItem('count',4);
for(let ii=0;ii<localStorage.getItem('count');ii++)
{
    var MS = 
    {
        id: ii,
        name: "Button " + ii,
        text: ii + ' LaLaLa ' + ii,
    }
    var lMS = JSON.stringify(MS); //сериализуем его
    //MM.push(MS)
    localStorage.setItem(ii,lMS);
    //var rMS = JSON.parse(localStorage.getItem(ii))
    //console.log(rMS.name);
}
*/
let count=localStorage.getItem("count");

var M = [];
MS = 
{
    id: '0',
    name: "Заметка",
    text: "Текст...",
    date: " 01.01.2001 8:0",
}
if(count==0 || count==null)
{
    count = 1;
    var lMS = JSON.stringify(MS); //сериализуем его
    localStorage.setItem('0',lMS);
    localStorage.setItem('count', 1);
}

for(let ii=0;ii<count;ii++)
{
    M.push(JSON.parse(localStorage.getItem(ii)));
    addbutton(M[ii]);
}
//DEF
//document.getElementById("0").className += " active";
//document.getElementById('h3').value=M[document.getElementById("0").id].name;
//document.getElementById('p').value=M[document.getElementById("0").id].text;
//

function localsave()
{
    const current = document.getElementsByClassName("tablinks");
    let i;
    //console.log(current.length);
    for(i=0;i<current.length;i++) 
    {
        var newM = M[current[i].id];
        newM.id=""+i;
        localStorage.setItem(newM.id,JSON.stringify(newM));
    }
    localStorage.setItem("count",i);
}
function del()
{
    var current = document.getElementsByClassName("active");
    if (current.length === 1) 
    {
        localStorage.clear();
        current[0].remove();
        localsave();
        current = document.getElementById("tabs").lastChild;
        current.className += " active";
        document.getElementById('h3').value=M[current.id].name;
        document.getElementById('p').value=M[current.id].text;
    }
}
function OpenTab(evt)
{
    const current = document.getElementsByClassName("active");
    if (current.length === 1) current[0].className = current[0].className.replace(" active", "");
    evt.currentTarget.className += " active";
    document.getElementById('h3').value=M[current[0].id].name;
    document.getElementById('p').value=M[current[0].id].text;
}
// function oninputh()
// {
//     const current = document.getElementsByClassName("active");
//     current.textContent=document.getElementById('h3').value;
//     current.name=document.getElementById('h3').value;
//     console.log(current.textContent);
// }
function changeh()
{
    const current = document.getElementsByClassName("active");
    if(current.length===1)
    {
        M[current[0].id].name=document.getElementById('h3').value;
        //current[0].textContent=M[current[0].id].name;
        localsave();
    }
}
function oninp(evt)
{
    const current = document.getElementsByClassName("active");
    if(current.length===1)
    {
        var d = new Date();
        M[current[0].id].date = " ("+ d.getDate() + "." + d.getMonth() + "." + d.getFullYear() + ") ("+d.getHours()+":"+d.getMinutes()+")";
        current[0].textContent=document.getElementById('h3').value + M[current[0].id].date;
    }
}
function changep()
{
    const current = document.getElementsByClassName("active");
    if(current.length===1)
    {
        M[current[0].id].text=document.getElementById('p').value;
        localsave();
    }
}
function add()
{
    var d = new Date();
    var newM =
    {
        id: ""+count,
        name: "Заметка",
        text: "Текст...",
        date: " ("+ d.getDate() + "." + d.getMonth() + "." + d.getFullYear() + ") ("+d.getHours()+":"+d.getMinutes()+")",
    }
    addbutton(newM);
    M.push(newM);
    count++;
    localsave();
}
function addbutton(M)
{
    var btn = document.createElement ('button');
    btn.setAttribute("class", "tablinks");
    btn.setAttribute('onclick', 'OpenTab(event)')
    btn.name = M.name;
    btn.type = 'button';
    btn.id = M.id;
    btn.textContent = M.name+M.date;
    document.getElementById ('tabs').appendChild (btn);
}
