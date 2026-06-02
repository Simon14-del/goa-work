let names = ["Nika", "Gio", "Luka", "Ana", "Mari"];

let index = names.findIndex(function(name) {
    return name === "Luka";
});

console.log(index);