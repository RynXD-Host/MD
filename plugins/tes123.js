import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author);
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    throw stiker.toString();
}

handler.help = ['ngawi'];
handler.tags = ['main'];
handler.alias = ['jomok', 'ngawi'];
handler.command = /^(jomok|ngawi|sjawir|jawa)$/i;

export default handler;

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}

let stikerhuuu = [
    "https://telegra.ph/file/607b6f8764da2f36d79cb.png",
    "https://telegra.ph/file/42d594c9459466e0de7a3.mp4",
    "https://telegra.ph/file/11f1f79bd5abfe481d374.mp4",
    "https://telegra.ph/file/d202b6a4fa7e40ca787f9.mp4",
    "https://telegra.ph/file/daf7ca8ad34bfe73572b1.mp4",
    "https://telegra.ph/file/8cb2ac20a9c93f57f8137.mp4",
    "https://telegra.ph/file/05453f9b7ce0c9816eb83.png",
    "https://telegra.ph/file/1bf93bdc4d8c7ebf45c48.png",
    "https://telegra.ph/file/2983e981229d8f34c8bc1.png",
    "https://telegra.ph/file/a536480fef3a2c740342e.png",
    "https://telegra.ph/file/1bf93bdc4d8c7ebf45c48.png",
    "https://telegra.ph/file/b0fef8c4563d4dd4aa50b.png",
    "https://telegra.ph/file/42d2df6bf09739c14b676.mp4",
    "https://telegra.ph/file/0b8a5d81fe3b27b53cbe3.mp4",
    "https://telegra.ph/file/d183edfd1ac787bcbcf10.png",
    "https://telegra.ph/file/c619d147c4eed9bf3233c.mp4",
    "https://telegra.ph/file/feada84231db9e2c8f807.png",
    "https://telegra.ph/file/e70d56267d6b4b6cbc0f3.mp4",
    "https://telegra.ph/file/2398548e8b822b4e91145.mp4",
    "https://telegra.ph/file/a830aba49890f0d83a6c1.png",
    "https://telegra.ph/file/b64e1bd837c2c5dfa0123.png",
]