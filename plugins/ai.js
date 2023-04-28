/**let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, text, command }) => {
  if (!args[0]) throw `masukkan teks`
  let res = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=berkahbot&text=${encodeURIComponent(text)}`)
  if (!res.ok) throw 'error'
  let json = await res.json()
  if (!json.status) throw json
  m.reply(json.result)
}
handler.help = ['ai']
handler.tags = ['fun']
handler.command = /^((open)?ai)$/i
module.exports = handler**/

let { Configuration, OpenAIApi } = require("openai")
let fetch = require("node-fetch")
let { generateWAMessageFromContent } = require("@adiwajshing/baileys")

let fs = require('fs')
let handler = async (m, { conn, text }) => {
if (!text) throw "Hai ada yang bisa saya bantu?"
const configuration = new Configuration({
    apiKey: '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'
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
m.reply(response.data.choices[0].text)
    }
handler.help = ['ai']
handler.tags = ['fun']
handler.command = /^(yus|ai|openai)$/i
module.exports = handler