const cheerio = require('cheerio')
const axios = require('axios')

const parserPoints = async () =>  {
    const getHTML = async (url) => {
        const { data } = await axios.get(url)
        return cheerio.load(data)
    }
    
    const $ = await getHTML('https://www.sports.ru/fantasy/football/league/165872.html')
        
    const pointsFirst = $('#branding-layout > div > div.contentLayout > div > div > div.mainPart > div.stat.mB6.players-rank > table > tbody > tr:nth-child(1)').text()
    const pointsSecond = $('#branding-layout > div > div.contentLayout > div > div > div.mainPart > div.stat.mB6.players-rank > table > tbody > tr:nth-child(2)').text()
    const pointsThird = $('#branding-layout > div > div.contentLayout > div > div > div.mainPart > div.stat.mB6.players-rank > table > tbody > tr:nth-child(3)').text()

    
    const table = {
        firstPlace : getArray(pointsFirst),
        secondPlace : getArray(pointsSecond),
        thirdPlace : getArray(pointsThird)
    }
    

   return table
    
}

const getArray = (value) => {
    const someArr = value.trim().split('\n')
    someArr.splice(1,1)
    someArr.splice(2,2)
    return someArr
}



module.exports.parserPoints = parserPoints