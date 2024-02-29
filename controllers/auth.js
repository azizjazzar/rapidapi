const axios = require('axios');
const cheerio = require('cheerio');

exports.getPage = async (req, res, next) => {
  try {
    const response = await axios.get("https://www.eurosport.fr/football/score-center.shtml");

    if (response.status === 200) {
      const $ = cheerio.load(response.data);
      const matches = [];
      const matchElements = $("div[data-testid='organism-match-card']");
      matchElements.each((index, element) => {
        const teamNames = $(element).find("div.lines-3").map((i, el) => $(el).text().trim()).get();
        const matchTime = $(element).find("span.block[data-testid='atom-match-card-content-info']").text().trim();
        
        if (teamNames.length === 2  ) {
          const matchStatus = matchTime.match(/^\d{2}:\d{2}$/) ? matchTime : "Finished or still playing";
          matches.push({
            teamA: teamNames[0],
            teamB: teamNames[1],
            hour: matchStatus
          });
        }
      });
      res.status(200).json(matches);
    } else {
      res.status(response.status).json({ error: 'Erreur lors de la récupération du HTML de la page' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du HTML de la page : ' + error.message });
  }
};
