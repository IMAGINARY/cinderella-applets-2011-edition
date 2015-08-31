function showInfo()
{
document.getElementById("info").style.height="auto";
document.getElementById("info").style.overflow="auto";
document.getElementById("applet").style.height="0px";
document.getElementById("applet").style.overflow="hidden";
}

function showApplet()
{
document.getElementById("applet").style.height="auto";
document.getElementById("applet").style.overflow="auto";
document.getElementById("info").style.height="0px";
document.getElementById("info").style.overflow="hidden";
}