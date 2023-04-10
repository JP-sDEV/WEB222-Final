function Review(_name, _date, _rating, _reviewText) {
    this.name = _name;
    this.date = _date;
    this.rating = _rating;
    this.reviewText = _reviewText;
}

function History(_year, _historyText, _img, _alt) {
    this.year = _year;
    this.historyText = _historyText;
    this.img = _img
    this.alt = _alt
}

function GameMode(_title, _description, _img, _alt) {
    this.title = _title;
    this.description = _description;
    this.img = _img;
    this.alt = _alt
}


function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

window.reviewData = [
    new Review("Joel", randomDate(new Date(2023, 1, 4), new Date()), 3, "Played my entire life, but lost to the Raptors in 2019."),
    new Review("Kyle", randomDate(new Date(2023, 1, 4), new Date()), 5, "Great game! Won the championship in 2019!"),
    new Review("Lebron", randomDate(new Date(2023, 1, 4), new Date()), 4, "Been playing this game since I was born, going to retire soon."),
    new Review("Michael", randomDate(new Date(2023, 1, 4), new Date()), 2, "Been the best, will always be the best - no one can top me."),
    new Review("Larry", randomDate(new Date(2023, 1, 4), new Date()), 1, "This game has been a part of my life for a while, will always see Michael in the finals."),  
];

window.historyData = [
    new History("1891", "Invention of Basketball", "./media/inventionBasketball.avif", "basketball"),
    new History("1898", "First pro Basketball league created","./media/firstProLeague.avif", "people playing basketball"),
    new History("1906", "Invention of modern hoop", "./media/modernHoop.avif", "basketball hoop"),
    new History("1949", "NBA is formed", "./media/nbaFormed.avif", "basketball stadium"),
    new History("1958", "Implementation of modern basketball", "./media/modernBasketball.avif", "basketball hoop"),
    new History("1976", "ABA-NBA merger", "./media/nbaMerger.avif", "basketball player shooting ball"),
]

window.playModes = [
    new GameMode("5v5", "Classic 5v5, 5 players for each team - NBA Standard Rules", "./media/5v5.avif", "people playing basketball"),
    new GameMode("3v3", "Park Play 3v3, 3 players each time, played half court - first to 11 points", "./media/3v3.avif", "playing basketball outside"),
    new GameMode("1v1", "1v1, First player to 11 points wins, played half court", "./media/1v1.avif", "person shooting basketball"),
    
]