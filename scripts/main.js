var Serie = /** @class */ (function () {
    // -----------
    // Constructor
    // -----------
    function Serie(pId, pName, pChannel, pSeasons, pResume, pLink, pBanner) {
        this.id = pId;
        this.name = pName;
        this.channel = pChannel;
        this.seasons = pSeasons;
        this.resume = pResume;
        this.link = pLink;
        this.banner = pBanner;
    }
    return Serie;
}());
var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "../images/bb.jpeg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "../images/oitnb.jpeg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "../images/got.jpeg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "../images/tbbt.jpeg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "../images/sk.jpeg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "../images/aves.jpeg"),
];
var body = document.querySelector('body');
var tableBody = document.querySelector('tbody');
var sum = 0;
series.forEach(function (serie) {
    // new row
    var tr = document.createElement('tr');
    // new columns
    var idTd = document.createElement('td');
    var nameTd = document.createElement('td');
    var nameAnch = document.createElement('a');
    var channelTd = document.createElement('td');
    var seasonsTd = document.createElement('td');
    // add text to columns
    idTd.innerText = serie.id.toString();
    nameAnch.innerText = serie.name.toString();
    nameAnch.setAttribute("href", "#");
    channelTd.innerText = serie.channel.toString();
    seasonsTd.innerText = serie.seasons.toString();
    // add classes to elements
    idTd.classList.add('center');
    idTd.classList.add('bold');
    channelTd.classList.add('center');
    seasonsTd.classList.add('center');
    // add click event
    nameAnch.addEventListener('click', function () {
        var cardImg = document.querySelector('.card-img-top');
        cardImg.setAttribute('src', serie.banner);
        var cardTitle = document.querySelector('.card-title');
        cardTitle.innerText = serie.name;
        var cardResume = document.querySelector('.card-text');
        cardResume.innerText = serie.resume;
        var cardBtn = document.querySelector('.btn');
        cardBtn.setAttribute('href', serie.link);
    });
    // add columns to row
    tr.appendChild(idTd);
    nameTd.append(nameAnch);
    tr.appendChild(nameTd);
    tr.appendChild(channelTd);
    tr.appendChild(seasonsTd);
    // add row to table body
    tableBody.appendChild(tr);
    // adds seasons to var
    sum += serie.seasons;
});
var avgDiv = document.querySelector('.avg');
avgDiv.innerText = "Seasons average: " + (sum / series.length);
