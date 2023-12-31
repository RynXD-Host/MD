import fs from 'fs'
let handler = async (m, { conn }) => {
    try {
        let image = API('zein', '/randomimage/cosplay', null, 'apikey')
        conn.sendFile(m.chat, image, 'cosplay.jpg', 'Ini Dia Kak >///<', m)
    } catch {
        let src = JSON.parse(fs.readFileSync('./json/cosplay.json', 'utf-8'))
        let image = src.getRandom()
        conn.sendFile(m.chat, image, 'cosplay.jpg', 'Ini Dia Kak >///<', m)
    }
}
handler.tags = ['anime']
handler.help = ['cosplay']
handler.command = /^(cosplay)$/i
handler.limit = true
export default handler