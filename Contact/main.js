const reveal = () => {
    let variable = document.getElementById("myemail")
    if (variable.style.display === "block")
    {
        variable.style.display = "none";
    }
    else
    {
        variable.style.display = "block";
    }
}

const thanks = () => {
    document.getElementById("main").innerHTML = "Thanks for the message! I'll get back to you as soon as I can."

}