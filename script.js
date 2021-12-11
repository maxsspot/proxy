const element = document.getElementById('find')

element.addEventListener("click", () => {
       //document.getElementById ("nowebsite").style.display = "none";
       var value = document.getElementById ("website_url").value;
       var newSite = document.createElement("iframe");
       newSite.setAttribute("src", document.getElementById ("website_url").value);
       newSite.style.width = "300px";
       newSite.style.height = "500px";
       document.body.appendChild(newSite);
});
