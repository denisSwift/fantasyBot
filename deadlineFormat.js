const { checkDate } = require('./checkDate.js')

const deadlineFormat = (date) => {

    if(date.trim() === 'завершен') {
        date = "Дождитесь завершения тура"
        return date
    }
    
    let matchTime
    let hours
    let matchDay = date.trimStart().trimEnd()
    let matchDate = matchDay.split(' ')
    if (matchDate.length == 2) {
        matchTime = matchDate[1].split(':')
        hours = parseInt(matchTime[0]) - 1
        date = matchDate[0] + ' ' + hours + ':' + matchTime[1]
    } else {
        matchTime = matchDate[0].split(':')
        hours = parseInt(matchTime[0]) - 1
        let currentDate = checkDate()
        date = currentDate[0] + '.' + currentDate[1] + ' ' + hours + ':' + matchTime[1] 
    }
    
    return date
}
 module.exports.deadlineFormat = deadlineFormat