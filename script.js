const element = document.getElementById('find')

element.addEventListener("click", () => {
       //document.getElementById ("nowebsite").style.display = "none";
       var valueForSite = document.getElementById ("website_url").value;
       var newSite = document.getElementById ("iframe");
       newSite.setAttribute("src", valueForSite);
       newSite.style.width = "500px";
       newSite.style.height = "500px";
       document.body.appendChild(newSite);
});
