let TitlesModel = require("../model/TitlesModel");
let CardContentModel = require("../model/CardContentModel");

class TitleService {
    constructor() { }
    getTitles(callback) {
        let titlesModel = new TitlesModel();
        let cardContentModel = new CardContentModel();

        titlesModel.getAllTitles(function (titles) {
            for (let i = 0; i < titles.length; i++) {
                let titles_id = titles[i].id;
                cardContentModel.getAllCardContents(titles_id, function (cardContent) {
                    titles[i].cardContent = cardContent;
                    if (i == titles.length - 1) {
                        callback(titles);
                    }
                });
            }
        });
    }
}
module.exports = TitleService;