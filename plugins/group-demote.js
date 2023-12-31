import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let user = m.mentionedJid && m.mentionedJid[0]
    if (!user) return m.reply('Tag orang yang mau di Demote!')
            await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
        
    m.reply('Succes')

}
handler.help = ['demote @tag']
handler.tags = ['group', 'adminry']
handler.command = /^(demote)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler