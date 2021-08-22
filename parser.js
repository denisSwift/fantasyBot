const cheerio = require('cheerio')
const axios = require('axios')
const { deadlineFormat } = require('./deadlineFormat.js')

const parser = async () =>  {
    const getHTML = async (url) => {
        const { data } = await axios.get(url)
        return cheerio.load(data)
    }
    
    const $ = await getHTML('https://www.sports.ru/epl/table/')
        
    const deadline = $('div.teaser-event__status span').eq(0).text()
    
    
    //console.log(deadlineFormat(deadline))
    return deadlineFormat(deadline)
}

//parser()

module.exports.parser = parser