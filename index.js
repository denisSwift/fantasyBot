const { Telegraf, Markup } = require('telegraf')
const { pointsPerTour, totalPoints } = require('./const')
const { parser } = require('./parser')
const { sortArray } = require('./sortArray')
const text = require('./const')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)



bot.start(async (ctx) => {
    try {
        await ctx.replyWithSticker('https://cdn.tlgrm.app/stickers/35a/cc3/35acc3d9-6859-4b58-923e-bcb3d8779314/256/6.webp')
        await ctx.reply(`Добро пожаловать, ${ctx.message.from.first_name}, что тебя интересует?`, Markup.inlineKeyboard(
        [
            [Markup.button.callback('Deadline', 'btn_1'), Markup.button.callback('Current Teams', 'btn_2')], 
            [Markup.button.callback('Points per tour', 'btn_3'),Markup.button.callback('Total points', 'btn_4')]
        ]
    ))
    } catch(e) {
        console.error(e)
    }  
})

bot.help((ctx) => ctx.reply(text.commands))

bot.action('btn_1', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.reply('------------Deadline----------')
        ctx.replyWithHTML(`<b>Deadline:</b> ${await parser()}`)
    } catch(e) {
        console.error(e)
    }
})

bot.action('btn_2', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.reply('------------Current teams----------')
        await ctx.replyWithPhoto({
            source: './img/senya.jpg'
        })
        await ctx.replyWithPhoto({
            source: './img/denis.jpg'
        })
        await ctx.replyWithPhoto({
            source: './img/valdis.jpg'
        })
    } catch(e) {
        console.error(e)
    }
})

bot.action('btn_3', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.reply('------------Points per tour----------')
        await sortArray(pointsPerTour)
        await pointsPerTour.map(el => {
        ctx.replyWithHTML(el.name + ':' + el.points)
    })} catch(e) {
        console.error(e)
    }
})

bot.action('btn_4', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.reply('------------Total points----------')
        await totalPoints.map(el => {
        ctx.replyWithHTML(el.name + ':' + el.points)
    })} catch(e) {
        console.error(e)
    }
})

bot.command('deadline',async (ctx) => {
     ctx.replyWithHTML(`<b>Deadline:</b> ${await parser()}`)
})

bot.command('pointspertour', async (ctx) => {
    await ctx.reply('------------Points per tour----------')
    await sortArray(pointsPerTour)
    await pointsPerTour.map(el => {
        ctx.replyWithHTML(el.name + ':' + el.points)
    })
})

bot.command('totalpoints', async (ctx) => {
        await ctx.reply('------------Total points----------')
        await totalPoints.map((el) => {
            ctx.replyWithHTML(el.name + ':' + el.points)
    })
})

bot.command('currentteams', (ctx) => {

})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))