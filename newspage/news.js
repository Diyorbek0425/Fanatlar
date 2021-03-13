function selectTeam() {
    var chempionat = document.getElementById('chempionat').value;
    if (chempionat === "Premier") {
        document.getElementById('teams2').style.display = "block"
        document.getElementById('teamshead').style.display = "none"

    } else {
        alert('oxwamadi')
        document.getElementById('teams2').style.display = "none"
        document.getElementById('teamshead').style.display = "block"
    }
}