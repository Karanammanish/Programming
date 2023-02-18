function check()
{
    u = document.getElementById("Username").value;
    p = document.getElementById("Password").value;
    let n = u.length;
    console.log(n);
    if(n > 6)
    {
        if(u === p)
        {
            console.log("Logging in");
            window.open("C:/Users/manish%20reddy/Desktop/Front%20end/New%20folder/banking_site/home.htm")
        }
        else
        {
            document.getElementById("output").innerHTML = "Password and username are not matching";
        }
    }
    else
    {
        document.getElementById("output").innerHTML = "Password is worng"
    }
}