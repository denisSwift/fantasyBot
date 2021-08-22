const checkDate = () => {
    let now = new Date()
    let month = now.getMonth()
    let day = now.getDate()
    if (month<10) {
            month = '0' + month
        }
    if (day < 10) {
            day = '0' + day
        } 
    return [day, month]
}

module.exports.checkDate = checkDate