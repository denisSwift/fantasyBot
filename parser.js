const cheerio = require('cheerio')
const axios = require('axios')

const parser = async () =>  {
    const getHTML = async (url) => {
        const { data } = await axios.get(url)
        return cheerio.load(data)
    }
    
    const $ = await getHTML('https://www.sports.ru/fantasy/football/team/points/2328608.html')
        
    const deadline = $('.team-info-block .profile-table').eq(0).text()
    
    deadline.trim()
    
    //console.log(deadline)
    return deadline
}



module.exports.parser = parser