const commands = `
/start - Приветствие
/help - Помощь
/deadline - Дата дэдлайна
/pointspertour - Очков за прошедший тур
/totalpoints - Всего очков
/currentteams - Текущие составы
`

const pointsPerTour = [
    {name:`<b>Senya</b>`, points: 42},
    {name:`<b>Valdis</b>`, points: 44},
    {name:`<b>Denis</b>`, points: 51}
]

const totalPoints = [
    {name:`<b>Senya</b>`, points: 119},
    {name:`<b>Valdis</b>`, points: 88},
    {name:`<b>Denis</b>`, points: 71}
] 

module.exports.commands = commands
module.exports.pointsPerTour = pointsPerTour
module.exports.totalPoints = totalPoints