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
    var lMS = JSON.stringify(MS);
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
    date: " (01.01.2001) (08:00)",
}

for(let ii=0;ii<count;ii++)
{
    M.push(JSON.parse(localStorage.getItem(ii)));
    addbutton(M[ii]);
}
//console.log(location.hash.slice(1));
var trans = function(text)
{
    var res = text.replace(" ", "_");
    return res;
}
var untrans = function(text)
{
    var res = text.replace("_", " ");
    return res;
}
//console.log(decodeURIComponent(location.hash).slice(1));
//DEF
if(document.getElementById(decodeURIComponent(location.hash).slice(1))!=null)
{
    hashchange();
}
else location.hash="null";
function localsave()
{
    const current = document.getElementsByClassName("tablinks");
    let i;
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
        document.getElementById('h3').value="";
        document.getElementById('p').value="";
        location.hash="null";
    }
}
function hashchange()
{
    if(document.getElementsByName(decodeURIComponent(location.hash).slice(1))!=null)
    {
        var current = document.getElementsByClassName("active");
        if (current.length === 1) current[0].className = current[0].className.replace(" active", "");
        current = document.getElementsByName(untrans(decodeURIComponent(location.hash).slice(1)));
        if(current[0]!=null)
        {
            //console.log(current[0]);
            current[0].className += " active";
            document.getElementById('h3').value=M[current[0].id].name;
            document.getElementById('p').value=M[current[0].id].text;
        }
    }
}

function OpenTab(evt)
{
    location.hash=trans(evt.currentTarget.name);
}
function changeh()
{
    const current = document.getElementsByClassName("active");
    if(current.length===1)
    {
        M[current[0].id].name=document.getElementById('h3').value;
        localsave();
    }
}
function oninp(evt)
{
    const current = document.getElementsByClassName("active");
    if(current.length===1)
    {
        M[current[0].id].date = gettime();
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
    var newM =
    {
        id: ""+count,
        name: "Заметка",
        text: "Текст...",
        date: gettime(),
    }
    addbutton(newM);
    location.hash=newM.id;
    M.push(newM);
    count++;
    localsave();
}
function addbutton(M)
{
    var btn = document.createElement ('button');
    btn.setAttribute("class", "tablinks");
    btn.setAttribute('onclick', 'OpenTab(event)')
    btn.name = M.name+M.date;
    btn.type = 'button';
    btn.id = M.id;
    //btn.con = M.name+M.date;
    btn.textContent = M.name+M.date;
    document.getElementById ('tabs').appendChild (btn);
    const current = document.getElementsByClassName("active");
}

var gettime = function ()
{
    var d = new Date();
    var result=" (";
    if(d.getDate()>9) result += d.getDate() + ".";
    else result+="0"+d.getDate()+".";
    if(d.getMonth()>9) result += d.getMonth() + ".";
    else result+="0"+d.getMonth()+".";
    result += d.getFullYear() + ") (";
    if(d.getHours()>9) result += d.getHours() + ":";
    else result+="0"+d.getHours()+":";
    if(d.getMinutes()>9) result += d.getMinutes() + ")";
    else result+="0"+d.getMinutes()+")";
    return result;
}