require('./settings')
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, PhoneNumber, process, moment, ms, speed, syntaxerror, util, openai } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const ntilink2 = JSON.parse(fs.readFileSync("./lib/antilink2.json"))
const jpm = JSON.parse(fs.readFileSync("./database/autojpm.json"))
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
//=================================================//
module.exports = hyuuxyz = async (hyuuxyz, m, msg, chatUpdate, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectmyReply.selectedRowId : (m.mtype == 'templateButtonmyReplyMessage') ? m.message.templateButtonmyReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectmyReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonmyReplyMessage') && m.message.templateButtonmyReplyMessage.selectedId ? m.message.templateButtonmyReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectmyReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectmyReply.selectedRowId : ''
const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
const messagesC = pes.slice(0).trim()
const content = JSON.stringify(m.message)
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await hyuuxyz.decodeJid(hyuuxyz.user.id)
const isDev = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isHyuu = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiLink2 = m.isGroup ? ntilink2.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const AutoJpm = from && isCmd ? jpm.includes(from) : false
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isGroup = from.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]
const groupMetadata = m.isGroup ? await hyuuxyz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const banUser = await hyuuxyz.fetchBlocklist()
const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
const isAsu = body.startsWith(pric)
const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
const isBanned = banUser ? banUser.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionBymyReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
const usernya = mentionBymyReply ? mentionBymyReply : mentionByTag[0]
const Input = mentionByTag[0] ? mentionByTag[0] : mentionBymyReply ? mentionBymyReply : q ? numberQuery : false
const isEval = body.startsWith('=>')
const userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
//=================================================//
const hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))
//=================================================//
const nharii = moment.tz('Asia/Jakarta').format('dddd')
const ntanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz("Asia/Jakarta").format("DD MMMM YYYY");
const barat = moment.tz("Asia/Jakarta").format("HH:mm:ss");
const tengah = moment.tz("Asia/Makassar").format("HH:mm:ss");
const timur = moment.tz("Asia/Jayapura").format("HH:mm:ss");
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
if (time2 < "23:59:00") {
  var ucapanWaktu = `Selamat Malam ${pushname} 🌌`;
}
if (time2 < "19:00:00") {
  var ucapanWaktu = `Selamat Sore ${pushname} 🌃`;
}
if (time2 < "18:00:00") {
  var ucapanWaktu = `Selamat Sore ${pushname} 🌅`;
}
if (time2 < "15:00:00") {
  var ucapanWaktu = `Selamat Siang ${pushname} 🏙`;
}
if (time2 < "11:00:00") {
  var ucapanWaktu = `Selamat Pagi ${pushname} 🌄`;
}
if (time2 < "05:00:00") {
  var ucapanWaktu = `Selamat Pagi ${pushname} 🌉`;
}
const tahunBaru = new Date("January 1, 2024 00:00:00");
const sekarang = new Date().getTime();
const Selisih = tahunBaru - sekarang;
const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor(
  (Selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
const jmenit = Math.floor((Selisih % (1000 * 60 * 60)) / (1000 * 60));
const jdetik = Math.floor((Selisih % (1000 * 60)) / 1000);
const ulngthn = new Date("October 31, 2023 00:00:00");
const ayeuna = new Date().getTime();
const ceIroh = ulngthn - ayeuna;
const hahari = Math.floor(ceIroh / (1000 * 60 * 60 * 24));
const hajam = Math.floor(
  (ceIroh % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
const hamenit = Math.floor((ceIroh % (1000 * 60 * 60)) / (1000 * 60));
const hadetik = Math.floor((ceIroh % (1000 * 60)) / 1000);
const idulAdha = new Date("Juni 29, 2023 00:00:00");
const nembe = new Date().getTime();
const ceDadah = idulAdha - nembe;
const hihari = Math.floor(ceDadah / (1000 * 60 * 60 * 24));
const hijam = Math.floor(
  (ceDadah % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
const himenit = Math.floor((ceDadah % (1000 * 60 * 60)) / (1000 * 60));
const hidetik = Math.floor((ceDadah % (1000 * 60)) / 1000);

async function loading () {
var fload = [
"_Hello My Name is Bot Zuro-Emde_",
"_Created By Zuro_",
"_Buy Script Chat My Owner_",
"_Thank you for waiting_",
]
let { key } = await hyuuxyz.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < fload.length; i++) {
await hyuuxyz.sendMessage(from, {text: fload[i], edit: key });//PESAN LEPAS
}
}
if (autodelete) {
hyuuxyz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: mek.key.id,
participant: mek.key.participant
}
})
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

// ========================================= \\
if (!hyuuxyz.public) {
if (!isDev && !m.key.fromMe) return
}

if (autoread) {
hyuuxyz.readMessages([m.key])
}

if (autobio) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await hyuuxyz.updateProfileStatus(`${namaowner} | Aktif Selama ${uptime} ⏳ | Mode : ${hyuuxyz.public ? 'Public' : 'Self'}`).catch(_ => _)
}
if (from === 'status@broadcast') {
hyuuxyz.chatRead(from)
}

if (isCommand) {
let titida = ['composing', 'recording']
yte = titida[Math.floor(titida.length * Math.random())]
hyuuxyz.sendPresenceUpdate(yte, from)
}
        
//=================================================//
if (isCommand) {
console.log(`<================>`)
console.log(chalk.black(chalk.bgWhite(!isCommand ? '<\> MESSAGE </>' : '<\> COMMAND </>')), chalk.black(chalk.bgGreen(hariini)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
console.log(`<================>`)
const cmdadd = () => {
hit[0].hit_cmd += 1
fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
}
cmdadd()
const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
}

//=================================================//
const ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: -99999,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: namaowner, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: namaowner,jpegThumbnail: thumb}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': namaowner, 'jpegThumbnail': thumb}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': namaowner, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namaowner},;;;\nFN:${namaowner}\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": thumb,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
//=================================================//

const myReply = (teks) => {
hyuuxyz.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : fdoc })
}
if (isCmd && isBanned) {
return
}

let list = []
for (let i of owner) {
list.push({
displayName: await hyuuxyz.getName(i),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await hyuuxyz.getName(i)}\nFN:${await hyuuxyz.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}

async function getFile(media) {
let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
if (!data) return new Error("Result is not a buffer")
let type = await FileType.fromBuffer(data) || {
  mime: "application/octet-stream",
  ext: ".bin"
}
return {
  data,
  ...type
}
}

async function sendFile(jid, media, options={}) {
let file = await getFile(media)
let mime = file.ext, type
if (mime == "mp3") {
type = "audio"
options.mimetype = "audio/mpeg"
options.ptt = options.ptt || false
}
else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
else if (mime == "webp") type = "sticker"
else if (mime == "mp4") type = "video"
else type = "document"
return hyuuxyz.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
}
//=================================================//
if (isCmd && m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); 
}

if (isCmd && !m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); 
}

hyuuxyz.sendPresenceUpdate('unavailable', from)

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

async function sendHyuuMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await hyuuxyz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

//=================================================//
 // Auto Jpm
if (AutoJpm) {
if (budy.includes('https://')) {
bvl = `${global.teksjpm}`
hyuuxyz.sendMessage(m.chat, {
text: bvl,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namabot,
body: ``,
thumbnailUrl: global.thumb,
sourceUrl: global.ownergc,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fdoc
})
}
}
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return myReply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await hyuuxyz.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return hyuuxyz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return hyuuxyz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isDev) return hyuuxyz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await hyuuxyz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
hyuuxyz.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
if (AntiLink2) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return myReply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
if (isAdmins) return myReply('Admin Mah Bebas')
if (!isDev) return myReply('Owner Mah Bebas')
hyuuxyz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
hyuuxyz.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Kamu Terdeteksi Mengirim Link Group WhatsApp Lain, Maaf Kamu Akan Di Kick`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
//=================================================//
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"
//=================================================//
switch (command) {
case 'menu':
let totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
let timestampe = speed();
let latensie = speed() - timestampe
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let menunya = `${ucapanWaktu}

I Am An Automated System (Whatsap Bot) That Can Help To Do Something, Search And Get Data / Information Only Through Whatsapp.
 
   ┏━━━━━━━━━━⚏
   ┃ Uptime : ${uptime}
   ┃ Hari : ${nharii}
   ┃ Tanggal: ${hariini}
 ┏━━━━━━━━━◆
 ┃ Wib ${barat}
 ┃ Wita ${tengah}
 ┃ Wit ${timur}
 ┗━━━━━━━━━◆

 •═══════════════════•

If you find an error or want to upgrade premium plan contact the owner.
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
┌  *DOWNLOADER*
│  ◦ .tiktok
│  ◦ .ttslide
│  ◦ .tthd
│  ◦ .play
│  ◦ .gdrive
│  ◦ .mediafire
└  ◦ .gitclone

┌  *BROADCAST*
│  ◦ .bcgc
│  ◦ .bchide
└  ◦ .bcimage

┌  *RANDOM*
│  ◦ .owner
│  ◦ .remini
└  ◦ .runtime

– Note :
_Script Masih Dalam Pengembangan_
menemukan bug?
.report *bugnya*

ꜱɪᴍᴘʟᴇ ʙᴏᴛ `
hyuuxyz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 15000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: menunya,
contextInfo: {
externalAdReply: {
showAdAttribution: false
}}}}}}, {})
break

// =================[ GROUP ] ================= \\
case 'antieoink': {
if (!isDev) return myReply('*khusus Premium*')
if (!m.isGroup) return myReply('Buat Di Group Bodoh')
if (!isBotAdmins) return myReply('Bot Bukan Admin Cuy')
if (!isAdmins) return myReply('Lah Dikira Admin Group Kali')
if (args.length < 1) return myReply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "ondj") {
if (AntiLink) return myReply('Sudah Aktif')
ntilink.push(from)
myReply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return myReply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
myReply('Succes mematikan antilink di group ini 🌷')
} else {
myReply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antili': {
if (!isDev) return myReply('*khusus Premium*')
if (!m.isGroup) return myReply('Buat Di Group Bodoh')
if (!isBotAdmins) return myReply('Bot Bukan Admin Cuy')
if (!isAdmins) return myReply('Lah Dikira Admin Group Kali')
if (args.length < 1) return myReply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink2) return myReply('Sudah Aktif')
ntilink2.push(from)
myReply('Succes menyalakan antilink 2 di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink2) return myReply('Sudah Mati')
let off = ntilink2.indexOf(from)
ntilink2.splice(off, 1)
myReply('Succes mematikan antilink 2 di group ini 🌷')
} else {
myReply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'autojpm': {
if (!isDev) return myReply('Features *Only For Owner*')
if (args.length < 1) return myReply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AutoJpm) return myReply('Sudah Aktif')
jpm.push(from)
myReply('Succes menyalakan autojpm ✅')
} else if (args[0] === "off") {
if (!AutoJpm) return myReply('Sudah Mati')
let off = jpm.indexOf(from)
jpm.splice(off, 1)
myReply('Succes mematikan autojpm ✅')
} else {
myReply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'tdkgall': {
if (!m.isGroup) return
let teks = `*👥 Tag All*
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `☍ . @${mem.id.split('@')[0]}\n`
}
hyuuxyz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
case 'hidag':
if (!m.isGroup) return myReply(mess.group)
if (!isAdmins && !isGroupOwner && !isDev) return myReply(mess.admin)
if (!isBotAdmins) return myReply('Bot Bukan Admin Nich')
hyuuxyz.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, {
quoted: m
})
break
case 'remini': {
if (!quoted) return myReply(`Where is the picture?`)
if (!/image/.test(mime)) return myReply(`Send/myReply Photos With Captions ${prefix + command}`)
myReply(mess.wait)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
hyuuxyz.sendMessage(m.chat, { image: proses, caption: ``}, { quoted: m})
}
break

case 'toimage': case 'toimg': {
if (!quoted) throw 'myReply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await hyuuxyz.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
hyuuxyz.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

// =================[ SEARCH ] ================= \\
case 'play': case 'ytplay': {
if (!text) return myReply(`Example : ${prefix + command} karena kamu`)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let caption = `*❏ YOUTUBE SEARCH ❒*

⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}

Wait for the audio to be sent!!`
hyuuxyz.sendMessage(from, { image: { url: anu.thumbnail }, caption: caption }, { quoted: fdoc })
hyuuxyz.sendMessage(from, { audio: { url: anu.url }, mimetype: 'audio/mp4', fileName: `${anu.title}.mp3` }, {quoted: m})
}
break
case 'spotifysearch': case 'spotify': {
if (!text) return myReply(`Example : ${prefix + command} Rewrite The Stars`)
let spotify = await fetchJson(`https://api.caliph.biz.id/api/search/spotify?query=${text}&apikey=HyuuXyzz`)
let teks = '乂 Spotify Search\n\nResult From '+text+'\n\n'
let no = 1
for (let i of spotify.result) {
teks += `No : ${no++}\nTitle : ${i.title}\nArtist : ${i.artist}\nAlbum : ${i.album}\nUrl : ${i.url}\n\n─────────────────\n\n`
}
hyuuxyz.sendMessage(m.chat, { image: { url: spotify.result[0].thumbnail },caption: teks }, { quoted: ftroli })
}
break
// =================[ DOWNLOADER ] ================= \\
case 'tthd':
case 'tiktokhd':{
if (!q) return myReply('link?')
if (!text) return myReply('text?')
let tt = await fetchJson(`https://skizo.tech/api/tiktok?url=${q}&apikey=${global.skizo}`)
await hyuuxyz.sendMessage(from, { video: { url: tt.data.hdplay }, caption: `${text}` }, { quoted: m})
}
break
case 'ttt': {
if (!text) return myReply(`Example : ${prefix + command} link`)
let data = await fetchJson(`https://api.caliph.biz.id/api/tiktok?url=${text}&apikey=HyuuXyzz`)
hyuuxyz.sendMessage(m.chat, { caption: ``, video: { url: data.data.video.noWatermark }}, {quoted:m})
}
break
case 'tt': case 'ttdl': case 'tiktok':{ 
if (!text) return myReply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return myReply(`Link Invalid!!`)
myReply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
hyuuxyz.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'gdrive': {
if (!args[0]) return myReply(`Enter the Google Drive link`)
const fg = require('api-dylux')
try {
let res = await fg.GDriveDl(args[0])
await myReply(`≡ *Google Drive DL*

▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
hyuuxyz.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
} catch {
myReplyMsg('Error: Check link or try another link') 
}
}
break
case 'git': case 'gitclone':
if (!args[0]) return myReply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return myReply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
hyuuxyz.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: fkontak }).catch((err) => myReply(mess.error))
break

case 'tiktokslide':
case 'ttslide': {
if (!isPremium) return myReply(mess.prem)
if (!q) return myReply('Link?')
let tt = await fetchJson(`https://skizo.tech/api/tiktok?url=${q}&apikey=${xzn}`)
if (tt.data.duration == 0) {
for (let i of tt.data.images) {
await hyuuxyz.sendMessage(from, {
image: {
url: i
},
caption: ''
}, { quoted: m })
}
} else {
myReply(`please use features .tiktokdl for _*free user*_`)
}
}
break
   
case 'mediafire': {
if (args.length == 0) return myReply(`Mana Link Nya Ajg`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return myReply(`The link you provided is invalid`)
let { mediafireDl } = require('./HyuuMedia/scrape/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return myReply('Ajg, File nya gede bet -_-')
const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
myReply(`${result4}`)
hyuuxyz.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break

case 'spotifydl': {
if (!text) return myReply(`Example : ${prefix + command} https://open.spotify.com/track/65fpYBrI8o2cfrwf2US4gq`)
myReply(mess.wait)
let z = await fetchJson(`https://api.caliph.biz.id/api/download/spotify?url=${text}&apikey=HyuuXyzz`)
let spofdl = `乂 Spotify Download\n\n*Title : ${z.result.title}*\n*Artist : ${z.result.artist}*\n*Id : ${z.result.id}*\n*Release Date : ${z.result.release_date}*\n*Duration : ${z.result.duration}*`
await hyuuxyz.sendMessage(m.chat, { image: { url: z.result.thumbnail }, caption: spofdl }, { quoted: m })
hyuuxyz.sendMessage(m.chat, { audio: { url: z.result.mp3 }, mimetype: 'audio/mp4'}, { quoted: m })
}
break

case 'ai': 
case 'ask':
case 'openai': {
if (!q) return myReply(`Example : ${prefix + command} Apa Itu Rumah`)
var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
var isi = isiai.result
await myReply(isi)
}
break
			   
case 'bingimg': {
if (!q) return myReply(`Usage: ${prefix}bingimg <prompt>`);
hyuuxyz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=${text}&apiKey=Kikyy`);
try{
for (let bing of ini.result) {
await sleep(1500)
await hyuuxyz.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
hyuuxyz.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
}
} catch (e) {
hyuuxyz.sendMessage(m.chat, { react: { text: `❎`, key: m.key }})
}
}
break
// =================[ CONVERTER ] ================= \\
case 'sticker':
case 'stiker':
case 's': {
if (!quoted) return myReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hyuuxyz.sendImageAsSticker(m.chat, media, m, {
packname: packname,
author: author
})
await fs.unlinkSync(encmedia)
} else if (isVideo || /video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return myReply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await hyuuxyz.sendVideoAsSticker(m.chat, media, m, {
packname: packname,
author: author
})
await fs.unlinkSync(encmedia)
} else {
return myReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'smeme': {
let respond = `Kirim/Reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return myReply(respond)
if (!text) return myReply(respond)
myReply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await hyuuxyz.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPh(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let pop = await hyuuxyz.sendImageAsSticker(m.chat, smeme, m, {
packname: packname,
author: author
})
fs.unlinkSync(pop)
}
break
case 'swm': {
let [teks1, teks2] = text.split`|`
if (!teks1) return myReply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (!teks2) return myReply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
myReply(mess.wait)
if (/image/.test(mime)) {
let media = await hyuuxyz.downloadMediaMessage(qmsg)
let encmedia = await hyuuxyz.sendImageAsSticker(m.chat, media, m, {
packname: teks1,
author: teks2
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return myReply('Maksimal 10 detik!')
let media = await hyuuxyz.downloadMediaMessage(qmsg)
let encmedia = await hyuuxyz.sendVideoAsSticker(m.chat, media, m, {
packname: teks1,
author: teks2
})
await fs.unlinkSync(encmedia)
} else {
return myReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) newReply(`*Send/myReply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) newReply(`*Send/myReply the Video/Image Caption* ${prefix + command}`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await hyuuxyz.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
newReply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
newReply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
// =================[ OTHERS ] ================= \\
case 'report':{
if (!text) throw 'Silahkan masukkan laporan'
if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
const laporan = `*「 REPORT 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != hyuuxyz.user.jid && v != '6285876059135@s.whatsapp.net'))
myReply(laporan, jid)
myReply(laporan, m.sender) // Mwehehehehe
myReply('✔️Masalah telah di laporkan ke Owner Bot, laporan palsu/main2 tidak akan ditanggapi!')
}
break
case 'creator':
case 'owner': {
const kontak = {
"displayName": 'My Owner',
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: Hyuu Not Sepuh\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:\nButuh Script Bot? Chat Dia Ajah 😁\nURL;Email Owner:puki@gmail.com\nORG: Ga Usah Spam Ya Anj\nEND:VCARD`
}
await hyuuxyz.sendMessage(from, {
contacts: { contacts: [kontak] },
contextInfo:{ forwardingScore: 999, isForwarded: true, mentionedJid:[sender],
"externalAdmyReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Need Script? Chat Hyuu`, 
"containsAutomyReply": true,
"mediaType": 1, 
"thumbnail": 'https://telegra.ph/file/254e27320f24856396b7c.jpg',
"mediaUrl": `https://youtube.com/@ImHyuu`,
"sourceUrl": `https://youtube.com/@ImHyuu`
}}}, { quoted: fkontak })
}
break
case 'runtime':
let fakeload2 = [
"_ʟᴏᴀᴅɪɴɢ ʀᴇᴋᴋ_",
"_sʜɪᴍɪᴢᴜ ᴍᴅ ʙʏ ʜʏᴜᴜ_",
"_ʙᴜʏ sᴄʀɪᴘᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ_",
"_ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇᴅ !!_",
`_RunTime : ${runtime(process.uptime())}_`
]
let { key } = await hyuuxyz.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < fakeload2.length; i++) {
await hyuuxyz.sendMessage(m.chat, {text: fakeload2[i], edit: key });//PESAN LEPAS
}
break
// =================[ OWNER ] ================= \\

case 'bcgc': case 'jpm': {
if (!isDev) return myReply('Lu Siapa?')
if (!text) myReply(`Text mana?\n\nExample : ${prefix + command} Need Vps? Cet hyuuxyz`)
let getGroups = await hyuuxyz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
myReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
hyuuxyz.sendMessage(i, {text: `${text}`}, {quoted:fdoc})
    }
myReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case "bchidetag": case "bchide": {
if (!isDev) return myReply(`Jir Lu Siapa Cok`)
if (!text) return myReply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
let getGroups = await hyuuxyz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await hyuuxyz.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await hyuuxyz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await hyuuxyz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await hyuuxyz.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
myReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case "bcimg": case "jpm3": {
if (!isDev) return myReply(`Lu Siapa Anj`)
if (!text) return myReply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
let getGroups = await hyuuxyz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
if (/image/.test(mime)) {
media = await hyuuxyz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await hyuuxyz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await hyuuxyz.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
myReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'public': {
if (!isDev) return XeonStickOwner()
hyuuxyz.public = true
myReply('*Successful in Changing To Public Usage*')
}
break
case 'self': {
if (!isDev) return mess.owner
hyuuxyz.public = false
myReply('*Successful in Changing To Self Usage*')
}
break
case 'delsesi':
case 'clearsession': {
if (!isDev) return myReply(mess.owner)
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return myReply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return myReply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
myReply(teks)
await sleep(2000)
myReply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
myReply("Berhasil menghapus semua sampah di folder session")
});
}
break
case 'setppbot': case 'setbotpp': {
if (!isDev) return myReply(mess.owner)
if (!quoted) return myReply(`Send/myReply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return myReply(`Send/myReply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return myReply(`Send/myReply Image With Caption ${prefix + command}`)
var medis = await hyuuxyz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
var { img } = await generateProfilePicture(medis)
await hyuuxyz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
myReply(`Success`)
}
break;
//=================================================//
default:

if (budy.startsWith("=>")) {
  if (!isDev)
return myReply(
  `Maaf Command Tersebut Khusus Developer Bot WhatsApp`
);
  function Return(sul) {
sat = JSON.stringify(sul, null, 2);
bang = util.format(sat);
if (sat == undefined) {
  bang = util.format(sul);
}
return myReply(bang);
  }
  try {
myReply(
  util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
);
  } catch (e) {
myReply(String(e));
  }
}
if (budy.startsWith(">")) {
  if (!isDev)
return myReply(
  `Maaf Command Tersebut Khusus Developer Bot WhatsApp`
);
  try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== "string")
  evaled = require("util").inspect(evaled);
await myReply(evaled);
  } catch (err) {
await myReply(String(err));
  }
}
if (budy.startsWith("$")) {
  if (!isDev)
throw `Maaf Command Tersebut Khusus Developer Bot WhatsApp`;
  exec(budy.slice(2), (err, stdout) => {
if (err) return myReply(err);
if (stdout) return myReply(stdout);
  });
}
if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
hyuuxyz.sendMessage("6283852830879@s.whatsapp.net", { text: "Hello developer, terdapat fitur error " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
