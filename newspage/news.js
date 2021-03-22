function tableOpenAll() {
    var allgames = document.getElementById('allgames');
    var todaymgames = document.getElementById('todaygames');
    var yesterdaygames = document.getElementById('yesterdaygames');
    var tomorrowgames = document.getElementById('tomorrowgames');

    allgames.style.display = 'block';
    todaymgames.style.displayc = 'block';
    yesterdaygames.style.display = 'block';
    tomorrowgames.style.display = 'block'

}

function tableOpenToday() {
    var allgames = document.getElementById('allgames');
    var todaymgames = document.getElementById('todaygames');
    var yesterdaygames = document.getElementById('yesterdaygames');
    var tomorrowgames = document.getElementById('tomorrowgames');

    allgames.style.display = 'none';
    todaymgames.style.displayc = 'block';
    yesterdaygames.style.display = 'none';
    tomorrowgames.style.display = 'none'

}