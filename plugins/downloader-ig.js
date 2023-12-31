import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
    if (!text) throw `Linknya?\nExample: *.ig https://www.instagram.com/reel/CoHlCrNrO0L/?igshid=NTc4MTIwNjQ2YQ=='`
    m.reply('*Sebentar Ya Kak......😸*')
    try {
        let res = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=gatadios&url=${text}`)
        let json = await res.json()
        let cap = '_© 2023 Silvia X Malix_'
        if (json.status) {
            let url = json.result[0]
            conn.sendFile(m.chat, url, null, cap, m)
        } else {
            conn.sendMessage(m.chat, { image: { url } })
        }
    } catch (e) {
        m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari Url/Link Yang Kamu Masukan`)
    }
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagram|igdl|ig|instagramdl)$/i
handler.limit = true

export default handler