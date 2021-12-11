const element = document.getElementById('find')

element.addEventListener("click", () => {
       //document.getElementById ("nowebsite").style.display = "none";
       var value = document.getElementById ("website_url").value;
       var newSite = document.createElement("iframe");
       newSite.setAttribute("src", value);
       newSite.style.width = "100%";
       newSite.style.height = "100%";
       document.body.appendChild(newSite);
});
