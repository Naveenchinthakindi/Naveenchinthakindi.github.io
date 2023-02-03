function handleSubmit() {
    var name = document.getElementById("name").value;
    document.getElementById("display-name").innerHTML = name;
    document.getElementById("display-name").style.fontSize = "30px";
    document.getElementById("display-name").style.color = "pink";
    document.getElementById("display-name").style.textAlign = "center";
    document.getElementById("name").value = '';

    var email = document.getElementById("email").value;
    document.getElementById("email-name").innerHTML = email;
    document.getElementById("email-name").style.fontSize = "10px";
    document.getElementById("email-name").style.color = "blue";
    document.getElementById("email-name").style.textAlign = "center";
    document.getElementById("email").value = '';


    var phone = document.getElementById("phone").value;
    document.getElementById("phone-name").innerHTML = phone;
    document.getElementById("phone-name").style.fontSize = "10px";
    document.getElementById("phone-name").style.color = "blue";
    document.getElementById("phone-name").style.textAlign = "center";
    // document.getElementById("phone-name").style.flexDirection = "inline-block"
    document.getElementById("phone").value = '';

    var github = document.getElementById("github").value;
    document.getElementById("github-name").innerHTML = github;
    document.getElementById("github-name").style.fontSize = "10px";
    document.getElementById("github-name").style.color = "blue";
    document.getElementById("github-name").style.textAlign = "center";
    document.getElementById("github").value = '';

    document.getElementById('hd').innerHTML = "Heading";

}