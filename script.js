function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number!");
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="<b>If</b> you deposit <mark>"+principal+"</mark>,<br><b>at</b> an interest rate of <mark>"+rate+"%</mark>,<br><b>you</b> will receive an amount of <mark>"+amount+"</mark><br><b>in</b> the "+year+".";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}