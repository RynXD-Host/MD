import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
let teks = `
👥:𝗗𝗶 𝗚𝗿𝘂𝗯 𝗠𝘂 𝗕𝗮𝗻𝘆𝗮𝗸 𝘆𝗴 𝘀𝗵𝗮𝗿𝗲 𝗹𝗶𝗻𝗸?
👥:𝗛𝗮𝗽𝘂𝘀 𝘁𝗲𝗸𝘀 𝗰𝗮𝗽𝗲?

👥:𝗟𝗮𝗻𝗴𝘀𝘂𝗻𝗴 𝗮𝗷𝗮 𝗦𝗲𝘄𝗮 𝗕𝗼𝘁𝘇
🗣️: 𝗞𝗲𝘂𝗻𝘁𝘂𝗻𝗴𝗮𝗻 𝗦𝗲𝘄𝗮 𝗕𝗼𝘁?

❏ 𝗞𝗲𝘂𝗻𝘁𝘂𝗻𝗴𝗮𝗻 𝗦𝗲𝘄𝗮 𝗕𝗼𝘁𝘇 🍃
❏ 𝗕𝗼𝘁 𝗢𝗻 𝟮𝟰 𝗝𝗮𝗺 𝗡𝗼 𝗘𝗿𝗼𝗿
❏ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝗼𝘁 𝗔𝗻𝘁𝗶 𝗣𝗮𝘀𝗮𝗿𝗮𝗻
❏ 𝗙𝗶𝘁𝘂𝗿 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗜𝗺𝗮𝗴𝗲
❏ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸 𝗛𝗮𝗽𝘂𝘀 𝗧𝗲𝗸𝘀
❏ 𝗧𝗼𝘁𝗮𝗹 𝗙𝗶𝘁𝘂𝗿 𝗔𝗱𝗮 𝟰𝟮𝟴

🗣️:𝗛𝗮𝗿𝗴𝗮 𝗘𝗺𝗮𝗻𝗴 𝗯𝗿𝗽 𝗯𝗮𝗻𝗴?
👥:𝗛𝗮𝗿𝗴𝗮 𝘁𝗲𝗻𝘁𝘂𝗻𝘆𝗮 𝗠𝘂𝗿𝗮𝗵

❏ 𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮 𝗦𝗲𝘄𝗮 𝗕𝗼𝘁𝘇 🌱
❏ 𝗥𝗽 7000 = SEWA 30 HARI
❏ 𝗥𝗽 7000= PREM 30 HARI
❏ 𝗥𝗽 4000 = PREM 15 HARI

❏ Gas Lah Apalagi
❏ *Murah bet coy*

Minat? Silahkan Chat Nomor Owner Dibawah
https://wa.me/${owner[0][0]}
`.trim()
await conn.sendFile(m.chat, fs.readFileSync('./media/qris.jpg'), 'qris.jpeg', teks, m, false)
}
handler.help = ['sewa', 'premium']
handler.tags = ['info', 'main']
handler.command = /^(sewa|sewabot|premium|prem)$/i

export default handler