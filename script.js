function compute() //Responsible for computing the main task
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0 || principal == '') {
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="<b>If</b> you deposit <mark>"+principal+"</mark>,<br> <b>at</b> an interest rate of <mark>"+rate+"%</mark>,<br><b>you</b> will receive an amount of <mark>"+amount+"</mark><br><b>in</b> the <mark>"+year+"</mark>.";
}

function updateRate() //Makes sliding bar readable
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}