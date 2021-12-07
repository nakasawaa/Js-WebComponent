function recherche() {
    let input = document.getElementById('barrerecherche').value
    input = input.toLowerCase();
    let mot = document.getElementsByClassName('mots');
      
    for (i = 0; i < mot.length; i++) { 
        if (!mot[i].innerHTML.toLowerCase().includes(input)) {
            mot[i].style.display="none";
        }
        else {
            mot[i].style.display="list-item";                 
        }
    }
}