let globalDiv = document.createElement("div");
globalDiv.className = "variant";
for(let i = 0; i < shirts.length; i++){
    let div = document.createElement("div");
    let img = new Image;
    let h2 = document.createElement("h1");
    let p = document.createElement("p");
    let div1 = document.createElement("button");
    let div2 = document.createElement("button");
    div1.textContent = "Quick View";
    div2.textContent = "See page";
    if(shirts[i].colors.white.front != null)
        img.src = shirts[i].colors.white.front;
    else
        img.src = shirts[i].default.front;
    h2.textContent = shirts[i].name;
    p.textContent = "Available in " + Object.keys(shirts[i].colors).length + " colors";
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(div1);
    div.appendChild(div2);
    globalDiv.appendChild(div);
}
document.body.appendChild(globalDiv);