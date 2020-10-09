function OnClick()
{
    document.getElementById("div").textContent = three(document.getElementById ("inp").value);
}
function three(str)//прост захотілось
{
    return str[0].toUpperCase()+str.slice(1);
}