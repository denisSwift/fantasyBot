const commands = `
/start - Приветствие
/help - Помощь
/deadline - Дата дэдлайна
/pointspertour - Очков за прошедший тур
/totalpoints - Всего очков
/currentteams - Текущие составы
`

const pointsPerTour = [
    {name:`<b>Senya</b>`, points: 77},
    {name:`<b>Valdis</b>`, points: 27},
    {name:`<b>Denis</b>`, points: 37}
]

const totalPoints = [
    {name:`<b>Senya</b>`, points: 77},
    {name:`<b>Valdis</b>`, points: 27},
    {name:`<b>Denis</b>`, points: 37}
] 

module.exports.commands = commands
module.exports.pointsPerTour = pointsPerTour
module.exports.totalPoints = totalPoints