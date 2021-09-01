//Bot By ConfuMods


const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const { addMetadata } = require('./lib/exif.js')


const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')


const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const { nsfwmenu } = require('./src/nsfwmenu')
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const user2 = JSON.parse(fs.readFileSync('./database/json/user2.json'))

const { ind } = require('./language')
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))

const {
	limitawal,
	memberlimit,
	cr,
	BotPrefix,
	author,
	pack
} = settingan

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

prefix = '#'
blocked = []
fake = '𝐒𝐎𝐅𝐈•𝐁𝐎𝐓 𝐕2'
fakeimage = fs.readFileSync(`./media/confu.jpeg`)
numbernye = '10'
join = '𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐱 7𝐮7, 𝐬𝐨𝐲 𝐒𝐨𝐟𝐢 𝐮𝐧𝐚 𝐛𝐨𝐭𝐬𝐢𝐭𝐚 𝐮𝐰𝐮, 𝐄𝐬𝐩𝐞𝐫𝐨 𝐪𝐮𝐞 𝐭𝐞 𝐬𝐢𝐞𝐧𝐭𝐚𝐬 𝐜𝐨𝐦𝐨 𝐞𝐧 𝐜𝐚𝐬𝐚 𝐛𝐞𝐛𝐮'
public = true

const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:𝑪𝒐𝒏𝒇𝒖𝒔𝒊𝒐𝒏\n' 
            + 'ORG:SofiBot2;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=50254371795:+50254371795\n' 
            + 'END:VCARD' 




const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')


const {
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser
} = require('./lib/register.js')

               const addRegisteredUser2 = (userid, sender) => {
            const obj = { id: userid, name: sender }
            user2.push(sender)		
            fs.writeFileSync('./database/json/user2.json', JSON.stringify(_registered))
        } 			           
/*[-> ATM & Limit <-]*/
const {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	limitAdd
} = require('./lib/limitatm.js')


        
    

const BarBarKey = 'IDxO1TFYnKADlX4pxcHa'
const VhtearKey = '1BlnApiIkyPake'
const XteamKey = 'd39b4b3fc7dba'
const TobzApi = 'Bidmzz1sJ2L1TKyqaMEU'
const ZeksApi = '𝐒𝐎𝐅𝐈•𝐁𝐎𝐓2'
const LolKey = 'save123'
lolkey = '682aeab645ed61cf137cf971'
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minuto ${pad(seconds)} Segundo`
}
function tanggal(){
myMonths = ["Enero","Febrero","marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Deciembre"];
			myDays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const cnf = new WAConnection()
	cnf.version = [2, 2119, 6]
	cnf.logger.level = 'warn'
	console.log(banner.string)
	cnf.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el Qr 7u7'))
	})

	fs.existsSync('./cnf.json') && cnf.loadAuthInfo('./cnf.json')
	cnf.on('connecting', () => {
		start('2', 'Cargando UwU')
	})
	cnf.on('open', () => {
		success('2', 'Listo 7u7')
	})
	await cnf.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./cnf.json', JSON.stringify(cnf.base64EncodedAuthInfo(), null, '\t'))

cnf.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await cnf.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await cnf.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/Rgn07Kt/20210702-082122.jpg'
				}
				teks = `・✦▭▭▭✧◦✦◦✧▭▭▭✦・				
┃⁃ৎ❥̤֟٭ۣۜ *Usuario*
┃⁃꩖࿆͜͡𖡜•↣ @${num.split('@')[0]}
・✦▭▭▭✧◦✦◦✧▭▭▭✦・
┃ 𝐒𝐎𝐅𝐈•𝐁𝐎𝐓 𝐕2
・✦▭▭▭✧◦✦◦✧▭▭▭✦・
 ${join}
・✦▭▭▭✧◦✦◦✧▭▭▭✦・ `
				let buff = await getBuffer(ppimg)
				cnf.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

cnf.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        cnf.sendMessage(callerId, "Sistema de bloqueo automático, nada de llamadas! (・–・;)ゞ", MessageType.text)
        await sleep(4000)
        await cnf.blockUser(callerId, "add") 
})
	cnf.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	
	

	cnf.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		//if (!mek.key.fromMe) return
		global.prefix
			global.blocked
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message 
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey 
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
      const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
				const command = body.trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				wait: 'Soy lenta, espera (╥﹏╥)',
				nsfwoff: 'La Funcion De Nsfw No Está Activa :c',
				success: 'Listo',
				wrongFormat: 'Escribe Bien porfavor :c',
				waitmusic: 'Espera, Estoy buscando tu musica 7w7',
				waitimg: 'Soy lenta, espera (╥﹏╥)',
				musica: 'Espera un momento, estoy buscando tu musica 7u7',
			imageoff: 'No tengo permitido enviar fotos (╥﹏╥) sorry',
				error: {
					stick: 'No pude :c',
				errostick: 'Error al crear tu sticker :c',
				Iv: 'Tu link ya no sirve :c al parecer'
				},
				only: {
					group: 'Este Comando Solo Puede Ser Usado En Grupos UwU',
					ownerG: 'Este Comando Solo Puede Ser Usado Por El Dueño Del Grupo (◍•ᴗ•◍)',
					ownerB: 'Este comando solo lo puede utilizar mi creador, tu no (・–・;)ゞ',
					admin: 'No Eres Admin (╥﹏╥)',
					Badmin: 'Necesito Ser Admin Primero :3'
				}
			}



				
			
			const botNumber = cnf.user.jid
			const ownerNumber = [`50254371795@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const tescuk = ["0@s.whatsapp.net"]
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await cnf.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isAntilink = isGroup ? antilink.includes(from) : false
            const senderme = mek.participant
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
		    const isUser2 = user2.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
				    

			const totalchat = await cnf.chats.all()			
	 	const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isLevelingOn = isGroup ? _leveling.includes(from) : false						
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
			const isMe = botNumber.includes(senderme)
			let pushname = cnf.contacts[sender] != undefined ? cnf.contacts[sender].vname || cnf.contacts[sender].notify: undefined
			const q = args.join(' ')
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				cnf.sendMessage(from, teks, text, {quoted: mek})
			}
			const sendMess = (hehe, teks) => {
				cnf.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? cnf.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : cnf.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
					    const costum = (pesan, tipe, target, target2) => {
			cnf.sendMessage(from, pesan, tipe, { contextInfo: { forwardingScore: 400, isForwarded: true } , quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) },message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			cnf.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}


        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    cnf.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 									
			 	           /*[-- funcion dinero --]*/
 	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)	     
	        }
			/*[-- funcion barra de nivel --]*/
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 50 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
				
			
			
			/*[-- funcion ranking --]*/
			const levelRole = getLevelingLevel(sender)
   	       var role = 'Dicipulo'
        if (levelRole <= 2) {
            role = 'Dicipulo'
        } else if (levelRole <= 4) {
            role = 'Dicipulo Dia 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Dicipulo Dia 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Dicipulo Dia 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Dicipulo Dia 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Avanzado mes 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Avanzado mes 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Avanzado mes 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Avanzado mes 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Avanzado mes 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Aventurero novato dia 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Aventurero novato dia 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Aventurero novato dia 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Aventurero novato dia 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Aventurero novato dia 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Aventurero experimentado año 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Aventurero experimentado año 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Aventurero experimentado año 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Aventurero experimentado año 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Aventurero experimentado año 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Aventurero profesional año 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Aventurero profesional año 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Aventurero profesional año 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Aventurero profesional año 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Aventurero profesional año 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Maestro mes 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Maestro mes 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Maestro mes 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Maestro mes 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Maestro mes 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = 'Elite mes 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = 'Elite mes 2 ♢²'
        } else if (levelRole <= 66) {
            role = 'Elite mes 3 ♢³'
        } else if (levelRole <= 68) {
            role = 'Elite mes 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = 'Elite mes 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = 'Elite año 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = 'Elite año 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = 'Elite año 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = 'Elite año 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = 'Elite año 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Elite de la elite dia 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Elite de la elite dia 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Elite de la elite dia 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Elite de la elite dia 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Elite de la elite dia 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Escolta dia 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Escolta dia 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Escolta dia 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Escolta dia 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Escolta dia 5 ✷✷⁵'
        } else if (levelRole <= 102) {                   
            role = 'Leyenda I 忍'
        } else if (levelRole <= 154) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 156) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 158) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 160) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 162) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 164) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 166) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 168) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 170) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 172) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 174) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 176) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 178) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 180) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 182) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 184) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 186) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 188) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 190) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 192) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 194) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 196) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 198) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 200) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 210) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 220) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 230) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 240) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 250) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 260) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 270) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 280) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 290) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 300) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 310) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 320) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 330) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 340) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 350) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 360) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 370) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 380) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 390) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 400) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 410) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 420) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 430) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 440) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 450) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 460) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 470) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 480) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 490) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 500) {
            role = 'Leyenda VI 忍'
        } else if (levelRole <= 666) {
            role = 'Leyenda VII 忍'
        } else if (levelRole <= 700) {
            role = 'Leyenda VIII 忍'
        } else if (levelRole <= 800) {
            role = 'Leyenda IX 忍'
        } else if (levelRole <= 900) {
            role = 'Leyenda X 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythical Glory 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythical Glory x1000帝'
        } else if (levelRole <= 8000) {
            role = 'Mythical Glory 1100 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythical Glory 2000 上帝'
        } else if (levelRole <= 10000) {
            role = 'Despertar Mythical Glory 特尔邦贡'
	    } else if (levelRole <= 66666666) {
   	         role = 'MATA DIOSES❗'
   	     }
   		 
				
				
	        /*[-- funcion nivel --]*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 500 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                     addKoinUser(sender, 20)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))            
 	               
 	              
	               
 
                  }
            } catch (err) {
                console.error(err)
            }
        }
         

          /*[-- funcion check limit --]*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return cnf.sendMessage(from,`Su límite de solicitudes ha expirado`, text,{ quoted: mek})
                            cnf.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        cnf.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			/*[-- limit end --]*/
            const isLimit = (sender) =>{ 
          	if (isOwner ) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    cnf.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}


const fakethumb = (teks, yes) => {
            cnf.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./sticker/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakestatus = (teks) => {
            cnf.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Don da ¡Yo! ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./sticker/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./sticker/thumb.jpeg`)
					},
					"title": `Hola ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	cnf.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}
        const fakegroup = (teks) => {
            cnf.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./sticker/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/cnf.jpeg')}}}
            


const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/cnf.jpeg`)} } }

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/cnf.jpeg`)
					},
					"title": fake,
					"description": "𝐒𝐎𝐅𝐈•𝐁𝐎𝐓",
					"currencyCode": "USD",
					"priceAmount1000": "1000000000",
					"retailerId": "Confu",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const uploadImages = (buffData, type) => {
    
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 


   if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       cnf.sendMessage(from, `Success`, `ESTADO : UNO MISMO`)
     }
     if (chats.toLowerCase() == 'status'){
       cnf.sendMessage(from, `STATUS : ${public ? 'PUBLICO' : 'UNO MISMO'}`)
     }
   }
   
  if (!public){
    if (!mek.key.fromMe) return
  }
  

			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVADO ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GRUPO  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMANDO ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMANDO ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = cnf.contacts[from] != undefined ? cnf.contacts[from].vname || cnf.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
               
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			
			
			switch(command) {
			
							case prefix+'registrar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('La edad debe ser un número!!')
                if (namaUser.length >= 30) return reply(`¿Por qué tu nombre es tan largo? Es un nombre o un tren xd`)
                if (umurUser > 40) return reply(`tu edad es demasiado mayor, máximo 40 años`)
                if (umurUser < 12) return reply(`su edad es demasiado joven mínimo 12 años`)
                try {
					ppimg = await cnf.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
					daftarimg = await getBuffer(ppimg)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await cnf.sendMessage(from, daftarimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await cnf.sendMessage(from, daftarimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
				break

			  
			
			     case prefix+'menu':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    wew = fs.readFileSync(`./media/cnf.jpeg`)
                    lzain = `╭❍ *𝐒𝐎𝐅𝐈•𝐁𝐎𝐓 𝐕2*
│
│Prefix : ⌜ ${prefix} ⌟
│Creador : ConfuMods
│
│✎_𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬.
│
│๛ ${prefix}sticker
│๛ ${prefix}attp texto
│
│✎_𝐂𝐨𝐧𝐟𝐮.
│
│๛ ${prefix}creador
│
│✎_𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐝𝐨𝐫𝐞𝐬.
│
│๛ ${prefix}toimg
│๛ ${prefix}tomp3
│
│✎_𝐎𝐭𝐚𝐤𝐮.
│
│๛ ${prefix}loli
│๛ ${prefix}waifu
│๛ ${prefix}yaoi
│๛ ${prefix}muslos
│
│✎_𝐀𝐮𝐝𝐢𝐨.
│
│๛ ${prefix}tts es texto
│
│✎_𝐍𝐬𝐟𝐰.
│
│๛ ${prefix}nsfwmenu
│
│✎_𝐋𝐞𝐯𝐞𝐥.
│
│๛ ${prefix}level
│๛ ${prefix}leveling
│๛ ${prefix}lb
│
│✎_𝐋𝐢𝐦𝐢𝐭.
│
│๛ ${prefix}limit
│๛ ${prefix}buylimit
│
│✎_𝐂𝐮𝐞𝐧𝐭𝐚.
│
│๛ ${prefix}cartera
│๛ ${prefix}transferir @ | cantidad
│
│✎_𝐄𝐯𝐞𝐧𝐭𝐨𝐬.
│
│๛ ${prefix}event
│๛ ${prefix}minar
│๛ ${prefix}trabajar
│
│✎_𝐉𝐮𝐞𝐠𝐨𝐬.
│
│๛ ${prefix}charlie
│๛ ${prefix}juego
│๛ ${prefix}slot
│๛ ${prefix}gay
│๛ ${prefix}ruleta
│๛ ${prefix}apostar
│
│✎_𝐂𝐫𝐞𝐚𝐝𝐨𝐫.
│
│๛ ${prefix}sticker
│๛ ${prefix}halloween
│๛ ${prefix}vampire
│๛ ${prefix}codetxt
│๛ ${prefix}matrixgoogletxt
│๛ ${prefix}spiderman
│๛ ${prefix}express
│๛ ${prefix}dance
│๛ ${prefix}blackbird
│๛ ${prefix}text3d
│๛ ${prefix}warrior
│
│✎_𝐆𝐫𝐮𝐩𝐨.
│
│๛ ${prefix}kick @
│๛ ${prefix}getpic @
│๛ ${prefix}getbio @
│๛ ${prefix}listadmin
│๛ ${prefix}promote @
│๛ ${prefix}hidetag texto
│๛ ${prefix}linkgc
│๛ ${prefix}tagall
│๛ ${prefix}tagall2
│๛ ${prefix}tagall3
│๛ ${prefix}tagall4
│๛ ${prefix}tagall5
│๛ ${prefix}kick @
│๛ ${prefix}salir
│๛ ${prefix}gay
│๛ ${prefix}mute
│๛ ${prefix}unmute
│๛ ${prefix}chatlist
│๛ ${prefix}blocklist
│๛ ${prefix}linkgroup
│๛ ${prefix}nsfw [1/0]
│๛ ${prefix}antilink [1/0]
│๛ ${prefix}welcome [1/0]
│๛ ${prefix}grupo [abrir/cerrar]
│
│✎_𝐎𝐭𝐫𝐨𝐬.
│
│๛ ${prefix}gay
│๛ ${prefix}wame
│๛ ${prefix}frases
│๛ ${prefix}piropos
│๛ ${prefix}getpic @
│๛ ${prefix}getbio @
│๛ ${prefix}wallpaper
│
│✎_𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬_
│
│ Confu : https://youtube.com/c/confumods
│ Confu : wa.me/+50254371795
│ Confu : instagram.com/confumods
│
╰❏ *𝐁𝐎𝐓 𝐁𝐘 𝐂𝐎𝐍𝐅𝐔𝐌𝐎𝐃𝐒*

╭❍ *𝐍𝐎𝐓𝐀*
│
│✎_ *Para ganar dinero*
│✎_ *Puedes jugar*
│✎_ *Puedes*
│✎_ *Puedes minar*
│
╰❏ *𝐍𝐎𝐓𝐀*`                  
cnf.sendMessage(from, wew, image,{contextInfo: {forwardingScore : 508, isForwarded: true},sendEphemeral: true, quoted:ftoko, caption:lzain})
     break
                    
           case prefix+'trabajar':
           if (isUser2) return reply('Ya trabajaste mucho vuelve mañana')
           cnf.updatePresence(from, Presence.composing)       		                			      		
           user2.push(sender)					
           fs.writeFileSync('./database/json/user2.json', JSON.stringify(user2))	
           addKoinUser(sender, 100)
           reply(`Gracias por tu trabajo ten tu pago

-Recibiste 100 soficoins`)
break

case prefix+ 'nsfwmenu':
if (!isNsfw) return reply(mess.nsfwoff)
cnf.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
break
  


case prefix+'avatar':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				cnf.sendMessage(from, avatars, image, {quoted: mek, caption: 'Linda foto no?' })
			break
			    
			    case prefix+'mute':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨')
                cnf.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*silenciadozzzzzzz*')
                console.log('succes mute chat = ' + from)
                break
            case prefix+'unmute':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar el desarrollador <3*')
                cnf.modifyChat(from, ChatModification.unmute)
                reply('*Ù.Ú sus mensajes me caen denuevo*')
                console.log('succes unmute chat = ' + from)
                break
                case prefix+'antilink':
  
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                	
					if (args.length < 1) return reply('Escribe 1 para activar')

					if (Number(args[0]) === 1) {

						if (isAntiLink) return reply('Ya está activo')

						antilink.push(from)

						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))

						reply('Activado correctamente✔️')

						cnf.sendMessage(from,`Ha sido activado antilink, si mandan link serán baneados`, text)

					} else if (Number(args[0]) === 0) {

						if (!isAntiLink) return reply('Desactivado')

						var ini = antilink.indexOf(from)

						antilink.splice(ini, 1)

						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))

						reply('Desactivar correctamente ✔️')

					} else {

						reply('Escribe 1 para activar o 0 para desactivar')

					}

					break
			    case prefix+'unpin':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                cnf.modifyChat(from, ChatModification.unpin)
                reply('*abajo UnU*')
                console.log('unpin chat = ' + from)
                break
            case prefix+'pin':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                cnf.modifyChat(from, ChatModification.pin)
                reply('*Fijados UvU*')
                console.log('pinned chat = ' + from)
                break
case prefix+'anime':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            cnf.sendMessage(from,media,image,{quoted:mek,caption:'𝐒𝐎𝐅𝐈•𝐁𝐎𝐓'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break


case prefix+ 'pussy':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkapolurru = checkATMuser(sender)
const jmomoio = [`${uaangkapolurru}`]
if (jmomoio < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
						reply('Se te cobraron 30 soficoins')
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'pussyimage':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkaukayrru = checkATMuser(sender)
const jmokuro = [`${uaangkaukayrru}`]
if (jmokuro < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				cnf.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
						reply('Se te cobraron 30 soficoins')
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			break

				case prefix+ 'admin':
         	   case prefix+ 'owner':
         	   case prefix+ 'creator':
         	   case prefix+ 'creador':
         	   case prefix+ 'creadores':
                  cnf.sendMessage(from, {displayname: "Confu", vcard: vcard}, MessageType.contact, { quoted: mek})
                            cnf.sendMessage(from, 'El es mi creador 🥵 re secsi ᕙ( : ˘ ∧ ˘ : )ᕗ',MessageType.text, { quoted: mek} )
					break    


case prefix+ 'solog':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
       const uaangkaurrkiu = checkATMuser(sender)
const jmokoio = [`${uaangkaurrkiu}`]
if (jmokoio < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

			anu = await axios.get('https://nekos.life/api/v2/img/solog')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
						reply('Se te cobraron 30 soficoins')
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'yuri':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkakoiurru = checkATMuser(sender)
const jmokiuo = [`${uaangkakoiurru}`]
if (jmokiuo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

			yuriz = await axios.get('https://nekos.life/api/v2/img/tits')
			bupyuri = await getBuffer(yuriz.data.url)
			cnf.sendMessage(from, bupyuri, image, { quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			break
	case prefix+ 'anal':
	if (!isNsfw) return reply(mess.nsfwoff)
	 const uaangkkkaurru = checkATMuser(sender)
const jmobonoo = [`${uaangkkjaurru}`]
if (jmobonoo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/anal')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('E-error ⊙﹏⊙')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				reply('Se te cobraron 30 soficoins')
				fs.unlinkSync(rano)
			})
			break		
case prefix+ 'pwankg':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkauruiru = checkATMuser(sender)
const jmocoo = [`${uaangkauruiru}`]
if (jmocoo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('E-error ⊙﹏⊙')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				reply('Se te cobraron 30 soficoins')
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'eron':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkaumrru = checkATMuser(sender)
const jmuoo = [`${uaangkaumrru}`]
if (jmuoo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			eronz = await axios.get('https://nekos.life/api/v2/img/eron')
			buferon = await getBuffer(eronz.data.url)
			cnf.sendMessage(from, buferon, image, { quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			break

case prefix+ 'ero':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkaurmru = checkATMuser(sender)
const jmomo = [`${uaangkaurmru}`]
if (jmomo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			cnf.sendMessage(from, bufero, image, { quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			.catch(err => {
			return('E-error vuelve a intentar ⊙﹏⊙')
			})
			break
case prefix+ 'erok':
if (!isNsfw) return reply(mess.nsfwoff)
 const uamangkaurru = checkATMuser(sender)
const jmoDo = [`${uamangkaurru}`]
if (jmoDo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

			eroz = await axios.get('https://nekos.life/api/v2/img/erok')
			bufero = await getBuffer(eroz.data.url)
			cnf.sendMessage(from, bufero, image, { quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			.catch(err => {
			return('E-error vuelve a intentar ⊙﹏⊙')
			})
			break


	



  case prefix+ 'pinterest':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			goblog = args.join(" ")
			anu = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${query}`)
			sasu = JSON.parse(JSON.stringify(anu));
			ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			cnf.sendMessage(from, nye, image, { caption: ' 𝐈𝐭𝐚𝐜𝐡𝐢', quoted: mek })
			.catch(err => {
				return('de nuevo genial? qué estás buscando?')
			})
			break
case prefix+ 'holoero':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkaullu = checkATMuser(sender)
const joda = [`${uaangkaullu}`]
if (joda < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
		holox = await axios.get('https://nekos.life/api/v2/img/holoero')
			bufholox = await getBuffer(holox.data.url)
			cnf.sendMessage(from, bufholox, image, { quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			.catch(err => {
			return('Error 7-7..')
			})
			break
case prefix+ 'cum':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkaukku = checkATMuser(sender)
const jodas = [`${uaangkaukku}`]
if (jodas < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
			case prefix+'nsfw':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (args.length < 1) return reply('「 ❗ 」 1 Para Activar, 0 Para Desactivar')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply(`「 ❗ 」La Funcion De Nsfw Ya Esta Activada En El Grupo!!`)
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Activó con éxito la función NSFW en este grupo [Los comandos Hentai tienen un costo de 30 soficoins]`)
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Deshabilitó Con Éxito La Función De Nsfw En Este Grupo`)
				} else {
				reply('「 ❗ 」 1 Para Habilitar Y 0 Para Desactivar')
				}
				break
            case prefix+'unreadall':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                var chats = await cnf.chats.all()
                chats.map( async ({ jid }) => {
                await cnf.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Marcados sin leer ${chats.length} chats !\`\`\``
		    await cnf.sendMessage(from, teks, text, {quoted: freply})
		    console.log(chats.length)
	        break
            case prefix+'readall':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                var chats = await cnf.chats.all()
                chats.map( async ({ jid }) => {
                await cnf.chatRead(jid)
                })
		var teks = `\`\`\`Han sido leidos ${chats.length} chats !\`\`\``
	        await cnf.sendMessage(from, teks, text, {quoted: freply})
		console.log(chats.length)
		break
            case prefix+'unarchiveall':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                reply('*éxito desarchivar todo el chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await cnf.chats.all()
                for (let _ of anu) {
                cnf.modifyChat(_.jid, ChatModification.unarchive)
                }
                break

					case prefix+ 'antilink':
if (!isGroup) return reply(mess.only.group)	 
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Ya estaba activo (◍•ᴗ•◍)')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se activo con exito(◍•ᴗ•◍)️')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se desactivo con éxito la función de bienvenida en este grupo (・o・)️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
                    break

            case prefix+'archive':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                reply('*okey wait..*')
                console.log('chat de archivo de éxito = ' + from)
                await sleep(3000)
                cnf.modifyChat(from, ChatModification.archive)
                break
            case prefix+'delthischat':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                reply('*éxito eliminar este chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                cnf.modifyChat(from, ChatModification.delete)
                break
                
case prefix+'del':  
case prefix+'d':  
case prefix+'delete':  
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	
				    Satanica.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
case prefix+'toimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			if (!isQuotedSticker) return reply('Responde a un sticker!')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await cnf.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Hubo un fallo, por favor intentalo de nuevo ')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'𝐒𝐎𝐅𝐈•𝐁𝐎𝐓 𝐕2')
			fs.unlinkSync(ran)
			})
			break
case prefix+ 'setthumb':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
		      if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await cnf.downloadMediaMessage(boij)
			fs.writeFileSync(`./sticker/thumb.jpeg`, delb)
			fakestatus('Aqui ta onichan ')
        	} else {
            reply(`envia imagen con comando ${prefix}sethumb`)
          	}
			break
                
                case prefix+'setfakeimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
	    if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await cnf.downloadMediaMessage(boij)
			fs.writeFileSync(`./sticker/fake.jpeg`, delb)
			fakestatus('Hecho mi amo 7~7')
        	} else {
            reply(`Envía una imagen con ${prefix}sethumb`)
          	}
			break
                case prefix+'shutdown':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
	        await cnf.sendMessage(from, `Bye...\n_✨𝐁𝐨𝐭 𝐒𝐎𝐅𝐈•𝐁𝐎𝐓 apagandose..._`, text,{quoted : freply})
		await sleep(3000)
                cnf.close()
		break
                
           
			
			
case prefix+'clone':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
					if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply(' *Tag a quien quieres clonar!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await cnf.getProfilePicture(id)
						buffer = await getBuffer(pp)
						cnf.updateProfilePicture(botNumber, buffer)
						mentions(`Foto de perfil actualizada correctamente usando foto de perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
  case prefix+'setleave':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			    if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(10)
					cnf.sendMessage(from,`\`\`\`Leave cambiado exitosamente a : ${body.slice(10)}\`\`\``, text,{quoted : freply})
				break 
				
				case prefix+'setpromote':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					promote = body.slice(11)
					cnf.sendMessage(from,`\`\`\`La promoción se ha cambiado correctamente a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
					case prefix+'setdemote':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					demote = body.slice(11)
					cnf.sendMessage(from ,`\`\`\`Degradar cambiado correctamente a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
				case prefix+'setbodymenu':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				  if (args.length < 1) return reply('*_EJEMPLO :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Ejemplos de uso : .setbodymenu *')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					f = body.slice(13)
					cnf.sendMessage(from ,`\`\`\`Body menu cambiado exitosamente a : ${body.slice(13)}\`\`\``, text,{quoted : freply})
				break 
				
					case prefix+'setwelcome':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					cnf.sendMessage(from ,`\`\`\`Bienvenida se ha cambiado con éxito a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
			  case prefix+'setreply':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			    if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					fake = body.slice(10)
					cnf.sendMessage(from, `reply cambiado exitosamente a : ${fake}`,text,{quoted : freply})
				break 
				
				case prefix+'setthumb':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await cnf.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./media/cnf.jpeg`, delb)
				fs.writeFileSync('./media/img.json', JSON.stringify(imagenye))
				cnf.sendMessage(from, `\`\`\`Cambiar miniaturas con éxito\`\`\``, MessageType.text, { quoted: freply })
				break
				
				case prefix+'getbio':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await cnf.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("No tiene Biografía /.\ ")
                }
                break
				
				case prefix+'getpic':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await cnf.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					cnf.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: `𝐒𝐎𝐅𝐈•𝐁𝐎𝐓 𝐕2`})}
				break
				
				  case prefix+'join':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                           if (!q) return reply('Ingrese el enlace del grupo')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakegroup ('asegúrese de que el enlace sea correcto!')
                           var response = await cnf.acceptInvite(codeInvite);
                           console.log(response);
                           break
                           
                                
       case prefix+'neko':

    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
cnf.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
cnf.sendMessage(from, pok, image, {
  quoted: mek, caption: `𝐁𝐨𝐭 𝐒𝐎𝐅𝐈•𝐁𝐎𝐓`
})

} catch {
  reply(mess.ferr)
}
break


				
				case prefix+'block':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				 cnf.updatePresence(from, Presence.composing) 
				 cnf.chatRead (from)
				if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar mi creadora*')
					if (!isGroup) return reply(mess.groupo())
					cnf.blockUser (`${body.slice(7)}@c.us`, "add")
					cnf.sendMessage(from, `*Se bloqueo a* ${body.slice(7)}@c.us`, text)
					break
				
				case prefix+'blocklist':
				  case prefix+'listblock':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					teks = 'Personas que intentaron llamarme oh que mi dueño quiso bloquear\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					cnf.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					
			
					case prefix+'exif':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
	        if (!mek.key.fromMe) return reply('*Solo mi creador puede usar ese comando UwU*')
	        if (args.length < 1) return reply(`Usar ${prefix}exif nama|autho`)
		if (!arg.split('|')) return reply(`Usar ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('Listo UvU')
	        break
	        
	        case prefix+'colong':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await cnf.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
	        
					case prefix+'take':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isQuotedSticker) return reply(`Responder a un sticker con *${prefix}takestick nama|author*`)
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await cnf.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
					
					case prefix+'fdeface':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					var nn = body.slice(9)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					//imgbbb = require('imgbb-uploader')
					//run = getRandom('.jpeg')
					//encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
					//media = await lolteam.downloadAndSaveMediaMessage(encmedia)
					ddatae = await imageToBase64(JSON.stringify('./media/cnf.jpeg').replace(/\"/gi, ''))

					cnf.sendMessage(from, {

						text: `${urlnye}`,

						matchedText: `${urlnye}`,

						canonicalUrl: `${urlnye}`,

						description: `${descnye}`,

						title: `${titlenye}`,

						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
					
					
					
case prefix+'attp':
				if (args.length < 1) return reply(`_Y el texto? Ù.ú_\n*ejemplo ${prefix}attp satan Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				cnf.sendMessage(from, attp2, sticker, {quoted: freply})
				break
				
		
                    
                    case prefix+'swm':
                    case prefix+'stickerwm':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} Confu|Mods`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await cnf.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            cnf.sendMessage(from, ini_buff, sticker, { quoted: freply }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`responde a un sticker con ${prefix + command} o etiquetar imágenes que ya se han enviado`)
                    }
                    break
                    
  						  	case prefix+ 'stickerwm':
						  	case prefix+ 'stikerwm':
						  	case prefix+ 'sticker':
						  	case prefix+ 's':
						  	case prefix+ 'stiker':
						  	case prefix+ 'stike':
						  	case prefix+ 'sticke':
						  	case prefix+ 'stikewm':
						  	case prefix+ 'stikr':
						  	case prefix+ 'stker':						  
				case prefix+'stiker':
				case prefix+'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Error`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Error')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								buff = fs.readFileSync(ran)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Etiqueta una imagen oh video`)
					}
					break
				
					
					case prefix+'ping':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ Encendido
├ *Nombre : 𝐒𝐎𝐅𝐈•𝐁𝐎𝐓*
├ *Runtime :*
├  ${kyun(uptime)}
├ *Speed :*
├  ${latensip.toFixed(4)} Second
└─────────────`
			             cnf.sendMessage(from, anjink, text,{quoted : freply})
			           break
			           case prefix+'info':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
  me = cnf.user
  uptime = process.uptime()
  teks = `*‣ Nombre* : 𝐒𝐎𝐅𝐈
  ‣ *Número del bot* : @${me.jid.split('@')[0]}
  ‣ *Dueño* : ConfuMods 
  ‣ *Prefijo* : ${prefix}
  ‣ *Usuarios bloqueados* : ${blocked.length}
  ‣ *Tiempo activo* : ${kyun(uptime)}
  ‣ *Total de chats* : ${totalchat.length}`
  buffer = await getBuffer(me.imgUrl)
  cnf.sendMessage(from, buffer, image, {
caption: teks, contextInfo: {
  mentionedJid: [me.jid]}})
  break

case  'nekopoi':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauou = checkATMuser(sender)
const jñño = [`${uaangkauou}`]
if (jñño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+'telesticker':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    if (args.length == 0) return reply(`[❗] Ejemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://lolhuman.herokuapp.com/api/telestick?apikey=${LolKey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        cnf.sendMessage(from, ini_buffer, sticker)
                    }
                    break
case prefix+ 'emoji':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			if (!q) return fakegroup('emoji UnU?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case  'pussy':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
    const uaangkauup = checkATMuser(sender)
const jos = [`${uaangkauup}`]
if (jos < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)  
       ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'pussyimage':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauum = checkATMuser(sender)
const jop = [`${uaangkauum}`]
if (jop < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				cnf.sendMessage(from, bufpusy, MessageType.image, {quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'oppai':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
	 const uaangkauuuiu = checkATMuser(sender)
const joll = [`${uaangkauuuiu}`]
if (joll < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
					opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			cnf.sendMessage(from, opaiz, image, { quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'feetg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'bj':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'ero':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauvu = checkATMuser(sender)
const jokk = [`${uaangkauvu}`]
if (jokk < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			cnf.sendMessage(from, bufero, image, { quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'erokemo':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkaquu = checkATMuser(sender)
const jok = [`${uaangkaquu}`]
if (jok < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			erokz = await axios.get('https://nekos.life/api/v2/img/erokemo')
			erokzs = await getBuffer(erokz.data.url)
			cnf.sendMessage(from, erokzs, image, { quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'eroyuri':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			eroyuriz = await axios.get('https://nekos.life/api/v2/img/eroyuri')
			buferoyu = await getBuffer(opai.data.url)
			cnf.sendMessage(from, buferoyu, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7')
			})
			break
case  'tickle':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/tickle')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'wallpaperanime':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			wanime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
			bufwanime = await getBuffer(wanime.data.url)
			cnf.sendMessage(from, bufwanime, image, { quoted: mek })
			.catch(err => {
			return('Anuncio con errores de nuevo intente..')
			})
			break


case  'femdom':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
      anu = await axios.get('https://nekos.life/api/v2/img/femdom')
			bupemdom = await getBuffer(anu.data.url)
				cnf.sendMessage(from, bupemdom, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'futanari':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauoou = checkATMuser(sender)
const joj = [`${uaangkauoou}`]
if (joj < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			futan = await axios.get('https://nekos.life/api/v2/img/futanari')
			futanz = await getBuffer(futan.data.url)
			cnf.sendMessage(from, futanz, image, { quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			break
case  'h':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
   const uaangkaupppu = checkATMuser(sender)
const jno = [`${uaangkaupppu}`]
if (jno < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
          ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/les')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'trap':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			trapx = await axios.get('https://nekos.life/api/v2/img/tits')
			traps = await getBuffer(trapx.data.url)
			cnf.sendMessage(from, traps, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
			
					case prefix+'gay':					 
					const gay =['Eres 0% gay' , 'Eres 1% gay' , 'Eres 2% gay' , 'Eres 3% gay' , 'Eres 4% gay' , 'Eres 5% gay' , 'Eres 6% gay' , 'Eres 7% gay' , 'Eres 8% gay' , 'Eres 9% gay' , 'Eres 10% gay' , 'Eres 11% gay' , 'Eres 12% gay' , 'Eres 13% gay' , 'Eres 14% gay' , 'Eres 15% gay' , 'Eres 16% gay' , 'Eres 17% gay' , 'Eres 18% gay' , 'Eres 19% gay' , 'Eres 20% gay' , 'Eres 21% gay' , 'Eres 22% gay' , 'Eres 23% gay' , 'Eres 24% gay' , 'Eres 25% gay' , 'Eres 26% gay' , 'Eres 27% gay' , 'Eres 28% gay' , 'Eres 29% gay' , 'Eres 30% gay' , 'Eres 31% gay' , 'Eres 32% gay' , 'Eres 33% gay' , 'Eres 34% gay' , 'Eres 35% gay' , 'Eres 36% gay' , 'Eres 37% gay' , 'Eres 38% gay' , 'Eres 39% gay' , 'Eres 40% gay' , 'Eres 41% gay' , 'Eres 42% gay' , 'Eres 43% gay' , 'Eres 44% gay' , 'Eres 45% gay' , 'Eres 46% gay' , 'Eres 47% gay' , 'Eres 48% gay' , 'Eres 49% gay' , 'Eres 50% gay' , 'Eres 51% gay' , 'Eres 52% gay' , 'Eres 53% gay' , 'Eres 54% gay' , 'Eres 55% gay' , 'Eres 56% gay' , 'Eres 57% gay' , 'Eres 58% gay' , 'Eres 59% gay' , 'Eres 60% gay' , 'Eres 61% gay' , 'Eres 62% gay' , 'Eres 63% gay' , 'Eres 64% gay' , 'Eres 65% gay' , 'Eres 66% gay' , 'Eres 67% gay' , 'Eres 68% gay' , 'Eres 69% gay' , 'Eres 70% gay' , 'Eres 71% gay' , 'Eres 72% gay' , 'Eres 73% gay' , 'Eres 74% gay' , 'Eres 75% gay' , 'Eres 76% gay' , 'Eres 77% gay' , 'Eres 78% gay' , 'Eres 79% gay' , 'Eres 80% gay' , 'Eres 81% gay' , 'Eres 82% gay' , 'Eres 83% gay' , 'Eres 84% gay' , 'Eres 85% gay' , 'Eres 86% gay' , 'Eres 87% gay' , 'Eres 88% gay' , 'Eres 89% gay' , 'Eres 90% gay' , 'Eres 91% gay' , 'Eres 92% gay' , 'Eres 93% gay' , 'Eres 94% gay' , 'Eres 95% gay' , 'Eres 96% gay' , 'Eres 97% gay' , 'Eres 98% gay' , 'Eres 99% gay' , 'Eres 100% gay']									
					const gai = gay[Math.floor(Math.random() * gay.length)]
								wiw = fs.readFileSync(`./src/5.jpg`)
										cnf.sendMessage(from, wiw, image, { quoted: mek, caption: '*Que tan gay eres*\n\n'+ gai })
									break
			
			
case  'pat':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pat')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'Boobs':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauccu = checkATMuser(sender)
const jmo = [`${uaangkauccu}`]
if (jmo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/boobs')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'blowjob':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauyyu = checkATMuser(sender)
const jomm = [`${uaangkauyyu}`]
if (jomm < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			blowz = await axios.get('https://nekos.life/api/v2/img/blowjob')
			bufblowz = await getBuffer(blowz.data.url)
			cnf.sendMessage(from, bufblowz, image, {quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
	case  'hentai':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
	if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkaurru = checkATMuser(sender)
const jmoo = [`${uaangkaurru}`]
if (jmoo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			hentaiz = await axios.get('https://nekos.life/api/v2/img/hentai')
			bufhtz = await getBuffer(hentaiz.data.url)
			cnf.sendMessage(from, bufhtz, image, {quoted: mek, caption: 'Se te cobraron 30 soficoins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
break
					case prefix+'patas':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkaxuu = checkATMuser(sender)
const jou = [`${uaangkaxuu}`]
if (jou < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 soficoins'})
				   break
			           case prefix+'term': 
case prefix+'exec':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return cnf.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
cnf.sendMessage(from, stdout, text, term)
}
})
break
case prefix+'join':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Ingrese el enlace del grupo')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('asegúrese de que el enlace sea correcto T-T!')
            var response = await cnf.acceptInvite(codeInvite)
            fakestatus('Lito')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
		
					  
					  case prefix+'kontak':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                        entah = args[0]
                        disname = args[1]
                        if (isNaN(entah)) return reply('numero invalido UnU'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${disname}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            cnf.sendMessage(from, {displayName: disname, vcard: vcard}, contact)
                            break
                            case prefix+'randomhentai': 
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  						
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
 const uaangkauteamou = checkATMuser(sender)
const joik = [`${uaangkauteamou}`]
if (joik < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 soficoins'})
						
						break
					
					case prefix+'nsfwboobs': 
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
						if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
							if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar mi creadora*')
 const uaangkauuiu = checkATMuser(sender)
const joikk = [`${uaangkauuiu}`]
if (joikk < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 soficoins'})
						
						break
					case prefix+'nsfwblowjob':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
						if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
							if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar mi creadora*')
 const uaangkauiou = checkATMuser(sender)
const jookk = [`${uaangkauiou}`]
if (jookk < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
							buffer = await getBuffer(res.result)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 soficoins'})
						
						break
					case prefix+'nsfwneko':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
						if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
							if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar mi creadora*')
 const uaangkauopu = checkATMuser(sender)
const jooll = [`${uaangkauopu}`]
if (jooll < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)	
													res = await fetchJson(`https://api.computerfreaker.cf/v1/neko`, {method: 'get'})
							buffer = await getBuffer(res.result)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 soficoins'})
						
						break
			     case prefix+'kontag':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await cnf.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Creator SELF BOT;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${cnf.user.jid.split('@')[0]}:${cnf.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				cnf.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/cnf.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        case prefix+'hidetag':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await cnf.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					cnf.sendMessage(from, options, text,{quoted : freply})
					break
					
					
				
					break
				//tobz 
				
				
			           case prefix+'sticktag':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                                        if (!isQuotedSticker) return reply('y el sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await cnf.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await cnf.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        cnf.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break

case prefix+'itsme':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
ppimg = await cnf.getProfilePicture(`${sender.split('@')[0]}@c.us`)
ppimg = 'https://i.ibb.co/Rgn07Kt/20210702-082122.jpg'
  teks = `‣ *Nombre* : ${mdata.subject}
  ‣ *Número* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  cnf.sendMessage(from, its, image, {quoted: mek, caption: teks})
  break
					case prefix+'telesticker':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    if (args.length == 0) return reply(`[❗] Ejemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://lolhuman.herokuapp.com/api/telestick?apikey=${LolKey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        cnf.sendMessage(from, ini_buffer, sticker)
                    }
                    break
					case prefix+'gay':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
  if (args.length < 1) return reply('Escribe el nombre')
  cnf.updatePresence(from, Presence.composing)
  random = `${Math.floor(Math.random() * 100)}`
  hasil = `Tu : *${body.slice(6)}*\n\nEres : *${random}% Gay*`
  reply(hasil)
  break
					
					case prefix+'ranklindo':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./src/lindos.jpeg`)
          jds = []
          const YDY = groupMembers
          const JSJ = groupMembers
          const TAT = groupMembers
          const SG = YDY[Math.floor(Math.random() * YDY.length)]           
          const SOD = JSJ[Math.floor(Math.random() * JSJ.length)]
          const HDH = TAT[Math.floor(Math.random() * TAT.length)]
          AJ = `●❯──────────❮●\n😳𝚁𝚊𝚗𝚔 𝙳𝚎 𝙻𝚘𝚜 𝙼𝚊𝚜 𝙻𝚒𝚗𝚍𝚘𝚜😳\n@${SG.jid.split('@')[0]} \n😳\n@${SOD.jid.split('@')[0]}\n😳\n@${HDH.jid.split('@')[0]}\n●❯──────────❮●`                  
          jds.push(SG.jid)
          jds.push(SOD.jid)
          jds.push(HDH.jid)
          cnf.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break

					case prefix+'ahegao':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauopou = checkATMuser(sender)
const jouuy = [`${uaangkauopou}`]
if (jouuy < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
							buffer = await getBuffer(res.url)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 soficoins'})
						
						break
					case prefix+'nsfwthighs':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
						if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
							if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar mi creadora*')
 const uaangkauolou = checkATMuser(sender)
const jojjj = [`${uaangkauolou}`]
if (jojjj < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
							buffer = await getBuffer(res.url)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 soficoins'})
						
						break

					case prefix+'imgtag':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await cnf.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await cnf.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        cnf.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag a una imagen enviada`)
                    }
                    break
                    
  
 
        
    		        case prefix+'linkgroup':
				case prefix+'linkgrup':
				case prefix+'linkgc':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await cnf.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink del grupo : *${groupName}*`
				    cnf.sendMessage(from, yeh, text, {quoted: freply})
			        break
			        
        case prefix+'grup':
        case prefix+'grupo':
					case prefix+'gc':
					case prefix+'group':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'abrir') {
					    reply(`\`\`\`✓abierto con éxito\`\`\` *${groupMetadata.subject}*`)
						cnf.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'cerrar') {
						reply(`\`\`\`✓cerrado con éxito\`\`\` *${groupMetadata.subject}*`)
						cnf.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
					case prefix+'chatlist':
				case prefix+'cekchat':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					cnf.updatePresence(from, Presence.composing)
					cnf.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : freply})
					break
					
				case prefix+'listadmins':
				case prefix+'listadmin':
				case prefix+'adminlist':
				case prefix+'adminslist':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de facheritos *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case prefix+'promote':
				case prefix+'pm':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
				teks = 'Pedido recibido, te conviertes en administrador :\n'
				for (let _ of mentioned) {
				teks += `@${_.split('@')[0]}\n`
				}
				mentions(teks, mentioned, true)
				cnf.groupMakeAdmin(from, mentioned)
			    } else {
				mentions(`Ahora eres admin U~U ✔️') @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
				cnf.groupMakeAdmin(from, mentioned)
				}
				break
                 case prefix+'demote':
			     case prefix+'dm': 
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			     if (!isGroupAdmins) return reply(mess.only.admin)
			     if (!isGroup) return reply(mess.only.group)
			     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
				teks = 'Pedido recibido, no eres administrador :\n'
				for (let _ of mentioned) {
				teks += `@${_.split('@')[0]}\n`
				}
				mentions(teks, mentioned, true)
				cnf.groupDemoteAdmin(from, mentioned)
				} else {
				mentions(`Okey Ahora Eres adm ~ UwU ')@${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
				cnf.groupDemoteAdmin(from, mentioned)
				}
				break
	 	case prefix+'halloween':
	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const loluaangkauuuuuu = checkATMuser(sender)
const loljñññño = [`${loluaangkauuuuuu}`]
if (loljñññño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30) 	
	confu = args.join(' ')
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${confu}&apikey=Ikyy69`)
reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')
      break
      
      case prefix+'vampire':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const tuaangkauuuuuuu = checkATMuser(sender)
      const tjññññño = [`${tuaangkauuuuuuu}`]
      if (tjññññño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	
      confu = args.join(' ')
      sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${confu}&apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')
      break
      
      case prefix+'codetxt':
   	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const wuaangkauuuuuuuu = checkATMuser(sender)
      const wjñññññño = [`${wuaangkauuuuuuuu}`]
      if (wjñññññño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	
      confu = args.join(' ')
      sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${confu}&apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')
      break

      case prefix+'matrix':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const buaangkauuuuuuu = checkATMuser(sender)
      const bjññññño = [`${buaangkauuuuuuu}`]
      if (bjññññño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	
	  confu = args.join(' ')
 	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${confu}&apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')
	  break
				
	  case prefix+'googletxt':
   	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const ubaangkauuuuuuu = checkATMuser(sender)
      const jñbñññño = [`${ubaangkauuuuuuu}`]
      if (jñbñññño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	
	  confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${confu}&apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')
	  break
	  
	  case prefix+'spiderman':
	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuuuuubu = checkATMuser(sender)
      const jññññbño = [`${uaangkauuuuuubu}`]
      if (jññññbño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 		
	  confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${confu}&apikey=Ikyy69`)
	  reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')
	  break
				
	  case prefix+'express':
   	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuuumuuu = checkATMuser(sender)
      const jññññmño = [`${uaangkauuuumuuu}`]
      if (jññññmño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	 
      confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${confu}&apikey=Ikyy69`)
	  reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')
	  break
				
	  case prefix+'dance':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuuuiuuu = checkATMuser(sender)
      const jñññññuo = [`${uaangkauuuuiuuu}`]
      if (jñññññuo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 		
	  confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${confu}&apikey=Ikyy69`)
	  reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')	
	  break
				
	  case prefix+'blackbird':
	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuuuuussu = checkATMuser(sender)
      const jññññssño = [`${uaangkauuuuuussu}`]
      if (jññññssño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	
	  confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${confu}&apikey=Ikyy69`)
	  reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')
	  break
	 
	  case prefix+'text3d':
 	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuyuuuuu = checkATMuser(sender)
      const jñññññzo = [`${uaangkauuyuuuuu}`]
      if (jñññññzo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 		
	  confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${confu}&apikey=Ikyy69`)
  	  reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')		
	  break
	
      case prefix+'warrior':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkapouuuuuuu = checkATMuser(sender)
      const jñññklñño = [`${uaangkapouuuuuuu}`]
      if (jñññklñño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 		
      confu = args.join(' ')
      sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${confu}&apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')	
      break

      case prefix+'loli':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuu = checkATMuser(sender)
      const jño = [`${uaangkauuu}`]
      if (jño < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)
	  anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomloli?apikey=Ikyy69`)
      buffer = await getBuffer(anu.link)
	  cnf.sendMessage(from, buffer, image, {
      quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬'})
	  break

	  case prefix+'waifu':
	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuuuu = checkATMuser(sender)
      const jññpo = [`${uaangkauuuuu}`]
      if (jññpo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30)
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/sfw/neko?apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬')
	  break
	
		
										
					case prefix+'welcome':
                    if (isLimit(sender)) return reply(ind.limitend(pushname))      
                    if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Quien eres? 7-7')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya activo ')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Activado (◍•ᴗ•◍)')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desactivado (◍•ᴗ•◍)️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
                    break
                    
					case prefix+'add':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('quien quieres añadir??')
					if (args[0].startsWith('08')) return reply('Usa el código de país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						cnf.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar el objetivo, tal vez porque en privado')
					}
					break
					
			    case prefix+'kick':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
							     if (!isGroupAdmins) return reply(mess.only.admin)		
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orden recibida, emitida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						cnf.groupRemove(from, mentioned)
					} else {
						mentions(`Orden recibida, emitida : @${mentioned[0].split('@')[0]}`, mentioned, true)
						cnf.groupRemove(from, mentioned)
					}
					break 
					case prefix+'tts':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (args.length < 1) return jere.sendMessage(from, '¿Dónde está el código de idioma??', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return jere.sendMessage(from, 'y el texto U.U?', text, {quoted: mek})
					dtt = body.slice(7)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('El texto es muy largo T×T')
					: gtts.save(ranm, dtt, function() {
						cnf.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
										case prefix+'online':
										  case prefix+'listonline':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(cnf.chats.get(ido).presences), cnf.user.jid]
                cnf.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break
                
                case prefix+'infoall':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*By :* - [ ị¡-𝐔𝐜𝐡𝐢𝐡𝐚.li-\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMATION* ⟫━━━┓`+teks+'╚═ *「 🌸𝑭𝒖𝒋𝒊𝒘𝒂𝒓𝒂.𝑯𝒐𝒑𝒆🦈」* ', members_id, true)
					break
					
				
					
					case prefix+'notif':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isGroup) return reply(mess.only.group)
teks = `Notificacion Dada Por: @${sender.split("@")[0]}\n*El mensaje es: ${body.slice(7)}*`
group = await cnf.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await cnf.sendMessage(from, options, text)
break

case prefix+'addstik':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (!isQuotedSticker) return reply('Responde un sticker')
				svst = body.slice(9)
				if (!svst) return reply('nombre del sticker?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await cnf.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				cnf.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: freply })
				break
				
case prefix+'getstik':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				cnf.sendMessage(from, result, sticker,{quoted:freply})
				} catch {
				  reply('Paquete no registrado')
				}
				break
			
			case prefix+'liststik':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				cnf.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				
				case prefix+'addimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (!isQuotedImage) return reply('Responde una imagen')
				svst = body.slice(8)
				if (!svst) return reply('Nombre de la imagen')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await cnf.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				cnf.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: freply })
				break

			case prefix+'getimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				cnf.sendMessage(from, buffer, image, { quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case prefix+'listimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				cnf.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				case prefix+'addvid':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (!isQuotedVideo) return reply('Responde a un video')
				svst = body.slice(8)
				if (!svst) return reply('Nombre del video')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await cnf.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				cnf.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply })
				break
case prefix+'listvid':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				cnf.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
			case prefix+'getvid':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				cnf.sendMessage(from, buffer, video, { quoted: freply, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case prefix+'addvn':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (!isQuotedAudio) return reply('Responde un audio')
				svst = body.slice(7)
				if (!svst) return reply('Nombre del vn')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await cnf.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				cnf.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: freply })
				break
case prefix+'getvn':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				cnf.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: freply, ptt: true })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case prefix+'listvn':
			case prefix+'vnlist':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				cnf.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
				break

				case prefix+'play':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  

  if (args.length < 1) return reply('Escribe el nombre')
  reply(mess.wait)
  play = body.slice(6)
  
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=SatanicaXV`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Audio*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_El audio se esta mandando, si no llega descargue por el link_\n‣ *Link* : ${anu.result.url_audio} `
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  cnf.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3 })
  cnf.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})

  break

				case prefix+'play2':   
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				  if (args.length < 1) return reply('*Ingrese el título*')
                cnf.sendMessage(from, mess.wait, text,{quoted : freply})
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=SatanicaXV`)
				if (anu.error) return reply(anu.error)
				infomp3 = ` *Vídeos encontrados!!!*
				
Título : ${anu.result.title}
Fuente : ${anu.result.source}
				
*_Enviando.._*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				cnf.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
				cnf.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Aqui tienes 💕🦈'})
					break 
				
        
					
case prefix+'fb':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
  if (args.length < 1) return reply('*Url?*')
  query = args.join(" ")
					anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${query}`, {method: 'get'})
					wing = ` *F A C E B O O K DOWNLOADER*
					
*Título :* ${anu.result.judul}`
					
					cnf.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.url}.mp4`, quoted: freply, caption: wing})
					break 
					

				case prefix+'ytmp4':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				  if (args.length < 1) return reply('*Url?*')
ini_link = args[0]
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${ini_link}&APIKEY=${XteamKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4 BY SATAN* 」
					
*Titulo:* ${anu.judul}
*Size:* ${anu.size}
					 
 Se esta enviando...`
					 buff = await getBuffer(anu.thumbnail)
					cnf.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.url)
					cnf.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					cnf.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: freply, caption: 'Nih Gan'})
					break 

				case prefix+'ytmp3':

 
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Formato de link incorrecto')
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=${viKey}`)
  infomp3 = `*Audio!!!*\n‣ Nombre : ${anu.result.title}\n‣ Fuente: ${anu.result.source}\n‣ Tamaño: ${anu.result.size}\n\n_El audio se esta mandando espere, si no llega descargue por el link_\n‣ *link* : ${anu.result.link}`
  buffer = await getBuffer(anu.result.thumb)
  lagu = await getBuffer(anu.result.link)
  cnf.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3})
  cnf.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
  
  
  break


case prefix+'upswtext':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					cnf.updatePresence(from, Presence.composing)
					cnf.sendMessage('status@broadcast', `${q}`, extendedText)
					cnf.sendMessage(from, `Success Up story wea text ${q}`, text,{quoted : freply})
					break
					
				case prefix+'upswimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					cnf.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await cnf.downloadMediaMessage(swsw)
						cnf.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Subir correctamente la imagen de la historia con título: ${q}`
					cnf.sendMessage(from, bur, text, { quoted: mek })
					break
					
				case prefix+'upswvideo':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					cnf.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await cnf.downloadMediaMessage(swsw)
						cnf.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Subir correctamente el vídeo de la historia con subtítulo: ${q}`
					cnf.sendMessage(from, bur, text, { quoted: mek })
					break



case prefix+'charli':
case prefix+'charlie':
case prefix+'carlie':
case prefix+'carli':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
const ch =['Si','No','No','Si']
    const cha = ch[Math.floor(Math.random() * ch.length)]
reply(`𝐂𝐡𝐚𝐫𝐥𝐢𝐞 𝐂𝐡𝐚𝐫𝐥𝐢𝐞

𝐑𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 : ${cha}`)
break


		                case prefix+'slot':	
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  	 

const pb = ['100','50','50','50','50','50']
const pv = pb[Math.floor(Math.random() * pb.length)]
const pn = [`${pv}`]


const prd = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇'
		] 
const gnd = [
        '🍇 : 🍇 : 🍇',
	    '🍐 : 🍐 : 🍐',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍊 : 🍊 : 🍊',
		'🍌 : 🍌 : 🍌'
		]
	const pbb = prd[Math.floor(Math.random() * prd.length)]
	const pvv = gnd[Math.floor(Math.random() * gnd.length)]     

    if (pn < 100) return reply(`[  🎰 | 𝐒𝐋𝐎𝐓𝐒 ]\n-----------------\n🍋 : 🍌 : 🍍\n${pbb}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | 𝐒𝐋𝐎𝐓𝐒 ]\n\n𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐧𝐨 𝐚𝐬 𝐥𝐨𝐠𝐫𝐚𝐝𝐨 𝐚 𝐥𝐢𝐧𝐞𝐚𝐫 𝐛𝐮𝐞𝐧𝐚 𝐬𝐮𝐞𝐫𝐭𝐞𝐚 𝐩𝐫𝐨𝐱𝐢𝐦𝐚`)
            
 
    cnf.sendMessage(from, `[  🎰 | 𝐒𝐋𝐎𝐓𝐒 ]\n-----------------\n🍋 : 🍌 : 🍍\n${pvv}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | 𝐒𝐋𝐎𝐓𝐒 ]\n\n𝐅𝐞𝐥𝐢𝐜𝐢𝐝𝐚𝐝𝐞𝐬 𝐚𝐬 𝐠𝐚𝐧𝐚𝐝𝐨 100 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬\n\n`, text, { quoted: freply })
    addKoinUser(sender, 100)
                    break

case prefix+'tomp3':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
            if (!isQuotedVideo) return fakegroup('Etiqueta un video (◍•ᴗ•◍)')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await cnf.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            cnf.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break

case prefix+'juego':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
	reply(`𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨 :

𝑷𝑨𝑹𝑨 𝑱𝑼𝑮𝑨𝑹 𝑼𝑻𝑰𝑳𝑰𝒁𝑨 𝑼𝑵𝑶 𝑫𝑬 𝑬𝑺𝑻𝑶𝑺 𝑬𝑴𝑶𝑱𝑰𝑺
		    
𝑷𝑰𝑬𝑫𝑹𝑨 : /✊
		   
𝑷𝑨𝑷𝑬𝑳 : /✋
		   
𝑻𝑰𝑱𝑬𝑹𝑨 : /✌

𝗡𝗢𝗧𝗔: en este juego no se puede ganar soficoins️`)
break
		  
		   case prefix+'✊':		   
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
const piedra =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :0 𝑬𝒎𝒑𝒂𝒕𝒆`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n :( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`]
    const jg = piedra[Math.floor(Math.random() * piedra.length)]
    cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jg, text)
    break
    
    case prefix+'✋':    
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
const papel =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n  :0 𝑬𝒎𝒑𝒂𝒕𝒆`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`]
    const jggg = papel[Math.floor(Math.random() * papel.length)]
    cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jggg, text)
    break
    
    case prefix+'✌️': 
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
    const tijera =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n:( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n:0 𝑬𝒎𝒑𝒂𝒕𝒆 `]
    const jgg = tijera[Math.floor(Math.random() * tijera.length)]
    cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jgg, text)
    break

                case prefix+'frases': 
                	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				cnf.updatePresence(from, Presence.composing) 
				const fra =['El amor inmaduro dice: "te amo porque te necesito". El amor maduro dice: "te necesito porque te amo" (Erich Fromm)','La vida empieza cada cinco minutos (Andreu Buenafuente)','Donde las palabras fallan la música habla (Hans Christian Andersen)','Un buen viajante no tiene planes (Confucio)','Una vez aceptamos nuestros límites, vamos más allá de ello (Albert Einstein)','Lo que no nos mata nos hace más fuertes (Friedrich Nietzsche)','Si caminas solo, irás más rápido. Si caminas acompañado, llegarás más lejos.','Una vida llena de errores no solo es más honorable, sino que es más sabia que una vida gastada sin hacer nada','Es sencillo hacer que las cosas sean complicadas, pero difícil hacer que sean sencillas. F. Nietzsche','No pierdas nunca el sentido del humor y aprende a reírte de tus propios defectos','La preocupación es como una mecedora, te mantiene ocupado pero no te lleva a ninguna parte',' El hombre que más ha vivido no es aquel que más años ha cumplido, sino aquel que más ha experimentado la vida','Si lo puedes soñar, lo puedes hacer','Lo imposible es el fantasma de los tímidos y el refugio de los cobardes','El camino que nos toca recorrer está lleno de sorpresas. Nunca vas a estar preparado para las que te toquen a ti, sean dichosas o sombrías, pues eso es parte de adquirir experiencia. Y descubrir cuán gratas o desafortunadas son las que te esperan, es algo nunca podrás evadir','La felicidad no es algo que pospones para el futuro, es algo que diseñas para el presente','El amigo ha de ser como el dinero, que antes de necesitarle, se sabe el valor que tiene','Tus acciones serán el reflejo de la manera que tienes de ver la vida y las que te van definir ante los demás. No las malgastes en cosas y actitudes que no valen la pena, solo tú puedes decidir la forma en la que quieres que te recuerden, porque no estarás en este mundo para siempre','El amor es lo que mueve al mundo aunque a veces parezca lo contrario. A las personas no nos haría mal recordar esto de vez en cuando','Nunca terminas de conocer a la gente. Tus amigos, tu familia y hasta tú mismo, pueden ocultar sorpresas que en la vida te podrías haber imaginado, tanto buenas como malas','Todos tenemos el mismo destino, en esencia no hay manera de diferenciarnos si nacemos para llorar y reír. Recuérdalo, todos tenemos los días contados, vive cada uno de tus días como si fueran el regalo más grande, porque nadie puede asegurarte el mañana','Mientras vivas vas a encontrarte con todo tipo de personas, tanto buenas como malas. Es imposible adivinar las intenciones que oculta alguien detrás de su comportamiento, pero descubrirlo es la tarea más interesante y peligrosa con la que te puedes llegar a topar','Los tiempos felices en la humanidad son las páginas vacías de la historia','La decepción después de un amor fallido, puede llegar a oprimir tu corazón hasta el punto de no dejarte respirar. Pero nadie se ha muerto de amor','No llores por la gente que se ha ido, enfócate en quienes se encuentran a tu lado en el presente y quédate con los buenas recuerdos de los que se marcharon','No debes enfocarte en el dolor que puedes sentir si alguien te ha falla. Si no eres capaz de perdonar una equivocación, entiérrala y sigue adelante','Amar es la aventura más grande en la que te puedes embarcar. Porque te puede hacer volar más alto de lo que jamás imaginarte y también ponerte los pies de la tierra']
 				const jys = fra[Math.floor(Math.random() * fra.length)]
			    ses = fs.readFileSync(`./media/cnf.jpeg`)
				cnf.sendMessage(from, ses, image, { caption: '*ᖴᏒᏗᏕᏋᏕ ૮ᏬᏒᎥᎧᏕᏗᏕ👌*\n\n'+ jys, quoted: mek })
              break

                case prefix+'piropos':               
                	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				cnf.updatePresence(from, Presence.composing) 				
				const mary =['Algunos quieren ser ricos a través del dinero, otros del poder, pero lo que no saben, es que la única riqueza es tu amor verdadero.','Soñando contigo he tenido una revelación, ahora necesito que me hagas un hueco en tu corazón.','Aunque por tu corazón han pasado muchas personas, me gustaría que me hicieses un huequecito eterno, por pequeño que sea, por si pasa algo, para que no me olvides jamás.','Lo que siento por ti es tan inmenso que, para guardarlo, me haría falta otro universo.','me he convertido en un capitán pirata para asaltar tu corazón y robarle el amor.','Me preguntaste por qué te amaba y no pude responderte. Hoy entiendo que el amor verdadero es indescriptible, solo se puede sentir.','Ojalá fuese papel para poder envolverte, bombón.','Ansío besarte, abrazarte y no soltarte','A lo mejor mi hogar no es un palacio, pero me gustaría que tú fueses mi princesa.','Te amo demasiado, lo deseo todo contigo, por eso me vuelvo loc@, cuando tú no estás conmigo.','¿De casualidad tienes un mapa contigo? Porque tengo el interés de navegar por esa linda mirada','Desde que te he visto me he convertido un/a astronauta porque no he bajado de las galaxias','A pesar de que el cielo está lleno de estrellas, tú eres la más importante para mi','Si ser guapo fuera pcado, ya estarías haciendo penitencia','Los que dicen que Disneyland es el lugar más feliz del mundo no han estado junto a ti🥺','Si ser guapo matara, serías la bomba atómica😳','Si fuera gato, pasaría mis nueve vidas contigo','¿Y si nos comemos unos tacos y yo te a-taco a besos?']
				const js = mary[Math.floor(Math.random() * mary.length)]
			    wew = fs.readFileSync(`./media/cnf.jpeg`)
				cnf.sendMessage(from, wew, image, { caption: '*ᎮᎥᏒᎧᎮᎧᏕ👌*\n\n'+ js, quoted: mek })
              break



                case prefix+'toimg':
				case prefix+'toimig':
				case prefix+'img':	
					if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  	
				if (!isQuotedSticker) return reply(' etiqueta un sticker')
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await cnf.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply(' Fallo ')
				buffer = fs.readFileSync(ran)
				cnf.sendMessage(from, buffer, image, {quoted: mek, caption: '𝐒𝐎𝐅𝐈•𝐁𝐎𝐓 𝐕2'})
				fs.unlinkSync(ran)
			    })
				await limitAdd(sender) 
				break


    			case prefix+'perfil':
    				cnf.updatePresence(from, Presence.composing)
				if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
    				try {
					profil = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					   const uaangku = checkATMuser(sender)
					profile = `╭─「 *PERFIL* 」
│• *Nombre:* ${pushname}
│• *Rol :${role}*
│• *Usuario registrado:* ✅
│• *Tu Dinero: Rp${uaangku}*
│• *XP: ${getLevelingXp(sender)}*
│• *Level: ${getLevelingLevel(sender)}*				
│• *Link:* wa.me/${sender.split("@")[0]}
╰─────────────────────`
	 				buff = await getBuffer(profil)
					cnf.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
					  	case prefix+'event':
					 				  
				     if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*ACTIVADO* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ EXITO ❭ ACTIVE LOS EVENTOS EN ESTE GRUPO*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ EXITO ❭ APAGANDO EL EVENTO EN ESTE GRUPO*')
					} else {
						reply(ind.satukos())
					}
					break 
			                case prefix+'leveling':
                if (!isGroup) return reply(mess.only.group)
		     if (!isGroupAdmins) return reply(mess.only.admin)			
                if (args.length < 1) return reply('activar oh desactivar')
                if (args[0] === 'activar') {
                if (isLevelingOn) return reply('*la función de nivel ha estado activa antes*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === 'desactivar') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				break 
				case prefix+'level':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
			     if (!isGroup) return reply(mess.only.group)			     
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nombre* : ${pushname}\n┣⊱ Numero : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                costum(resul, text, tescuk, per)
				break 
				case prefix+'mining':
				case prefix+'minar':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			
                      if (!isEventon) return reply(`Lo siento ${pushname} El propietario no activo la minería de eventos`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 12)
                      reply(`porque eres mi propietariom... enviando ${one}Xp para ti`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*felicitaciones* ${pushname} usted obtiene *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case prefix+'leaderboard':
				case prefix+'lb':
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *NIVEL DE LIDERAZGO* ]----\n\n'
                let leaderboarduang = '-----[ *TABLA DE MILLONARIOS* ]----\n\n'
                let nomm = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nomm++
                        leaderboardlvl += `*[${nomm}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nomm}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Dinero*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`usuario mínimo de  para poder acceder a la base de datos`)
                }
				break
				case prefix+'limit':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break 
					
				case prefix+'giftlimit': 
				if (!isOwner) return reply(mess.only.ownerB)
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`el límite mínimo de regalos es 1`)
                if (isNaN(jmla)) return reply(`el límite debe ser un número`)
                if (!nomerr) return reply(`lo siento formato incorrecto \ningrese el parámetro correcto\nEjemplo : ${prefix}giftlimit @593992826085 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `El límite de la cuota de regalos fue exitoso con SN: ${createSerial(8)} en ${moment().format('DD/MM/YY HH:mm:ss')}
*「 LÍMITE DE LA CUOTA DE REGALOS 」*

• Usuario : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Lo sentimos, el número ${nomerr} no está registrado en la base de datos.!`)
                        }
                break
            break
				case prefix+'transfer':
				case prefix+'trasferir':
				case prefix+'transferir':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('la cantidad debe ser un número!!')
                if (jumblah < 100 ) return reply(`transferencia mínima 100`)
                if (checkATMuser(sender) < jumblah) return reply(`No tienes suficiente dinero para realizar la transferencia`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('+50254371795@s.whatsapp.net', fee)
                reply(`*「 ÉXITO 」*\n\nLa transferencia de dinero ha sido exitosa\n\nDe : +${sender.split("@")[0]}\nPara : +${tujuan}\n\nmonto de la transferencia : ${jumblah}\nimpuesto : ${fee}%`)
                break
			
				case prefix+'cartera':
				case prefix+'catera':
				case prefix+'cartea':
				case prefix+'cartra':
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case prefix+'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('el límite debe ser un número!!')
				const koinPerlimit = 30
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`lo siento, tu dinero no es suficiente. recoger y comprar más tarde`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PAGO EXITOSO 」*\n\n*remitente* : Admin\n*receptor* : ${pushname}\n*compra nominal* : ${payout} \n*precio límite* : ${koinPerlimit}/limit\n*el resto de tu dinero* : ${checkATMuser(sender)}\n\nel proceso es exitoso con el número de pago\n${createSerial(15)}`)
				} 
				break

	case prefix+'roulette':
	case prefix+'ruleta':
	case prefix+'suerte':
	if (!isRegistered) return reply(ind.noregis())    	
     const dinn = ['1','1','1','100','1','1','1']    
  const holi = dinn[Math.floor(Math.random() * dinn.length)]
 if (holi < 5) return reply(`★᭄ꦿ𝐑𝐎𝐔𝐋𝐄𝐓𝐓𝐄💸

-🥀Lo siento🥀
-🥀${pushname}
-🥀As perdido
-🥀No recibes ningun premio
-🥀Gracias por jugar`)
 
reply(`★᭄ꦿ𝐑𝐎𝐔𝐋𝐄𝐓𝐓𝐄💸

-🥀Felicidades 🎉 
-🥀${pushname}
-🥀As Ganado!! 🎉
-🥀Tu premio : 100 soficoins`)
addKoinUser(sender, 100)
break

      case prefix+'wprandom':
      case prefix+'wallpaper':
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
 if	(!isRegistered) return reply(ind.noregis())				
				reply(mess.wait)
		        const canogti = ['https://i.ibb.co/6JTzpJJ/68.jpg','https://i.ibb.co/S7CXQmD/15.jpg','https://i.ibb.co/yP4fMMS/18.jpg','https://i.ibb.co/zRHq0qK/47.jpg','https://i.ibb.co/vD00z3C/10.jpg','https://i.ibb.co/NjLb90d/54.jpg','https://i.ibb.co/QDRJmYb/73.jpg','https://i.ibb.co/LkDygnF/39.jpg','https://i.ibb.co/jTqjqLq/58.jpg','https://i.ibb.co/2twGcMw/86.jpg','https://i.ibb.co/vwBDKRf/71.jpg','https://i.ibb.co/JCwQfcZ/9.jpg','https://i.ibb.co/Y8sm3k8/64.jpg','https://i.ibb.co/60LsdQq/76.jpg','https://i.ibb.co/mG8xMC9/5.jpg','https://i.ibb.co/8jM2Wnq/62.jpg','https://i.ibb.co/XWd1wyB/23.jpg','https://i.ibb.co/J36Qvy0/63.jpg','https://i.ibb.co/zRFXfXB/75.jpg','https://i.ibb.co/SNkpKBM/43.jpg','https://i.ibb.co/Yc1ntvk/21.jpg','https://i.ibb.co/ZV0KBN8/44.jpg','https://i.ibb.co/ByScQYM/56.jpg','https://i.ibb.co/gvr3grn/100.jpg','https://i.ibb.co/Mp6kM0S/98.jpg','https://i.ibb.co/str6WsD/93.jpg','https://i.ibb.co/xf1tqN8/53.jpg','https://i.ibb.co/BntKBDt/3.jpg','https://i.ibb.co/cQ2QrfN/103.jpg','https://i.ibb.co/kKMYf84/7.jpg','https://i.ibb.co/C2dJXLM/33.jpg','https://i.ibb.co/ykzwZ08/67.jpg','https://i.ibb.co/qM4z8GC/25.jpg','https://i.ibb.co/w0bPg7H/38.jpg','https://i.ibb.co/QmL9QT2/72.jpg','https://i.ibb.co/Qk4qKWh/85.jpg','https://i.ibb.co/QPyjj7M/29.jpg','https://i.ibb.co/pPKRz5x/46.jpg','https://i.ibb.co/52X0QGk/27.jpg','https://i.ibb.co/tK1XmTS/13.jpg','https://i.ibb.co/b5KFHHy/55.jpg','https://i.ibb.co/ZRD9Z7M/51.jpg','https://i.ibb.co/JH8D2Js/87.jpg','https://i.ibb.co/X38B1Ns/81.jpg','https://i.ibb.co/9Ztpn3y/2.jpg','https://i.ibb.co/g7P9NT4/26.jpg','https://i.ibb.co/j5m8sgf/8.jpg','https://i.ibb.co/njnkMWC/32.jpg','https://i.ibb.co/M80BmZZ/16.jpg','https://i.ibb.co/tQqGkCf/77.jpg','https://i.ibb.co/S6Np1Vm/49.jpg','https://i.ibb.co/TbkQk71/90.jpg','https://i.ibb.co/1GVqwsn/50.jpg','https://i.ibb.co/mb0Xr9X/59.jpg','https://i.ibb.co/WnDMywW/4.jpg','https://i.ibb.co/rbBvMX4/84.jpg','https://i.ibb.co/7twNvNX/74.jpg','https://i.ibb.co/jRKDHRz/48.jpg','https://i.ibb.co/KqqYTWk/89.jpg','https://i.ibb.co/qMQNSjG/12.jpg','https://i.ibb.co/FgNw4hb/11.jpg','https://i.ibb.co/9NW9VnZ/17.jpg','https://i.ibb.co/jMc9vdx/95.jpg','https://i.ibb.co/BskF3jg/104.jpg','https://i.ibb.co/yV56m6S/99.jpg','https://i.ibb.co/5GCxFC5/19.jpg','https://i.ibb.co/8mKGXzg/31.jpg','https://i.ibb.co/4VWX6dn/34.jpg','https://i.ibb.co/fq6LjHw/82.jpg','https://i.ibb.co/CbbP0QB/80.jpg','https://i.ibb.co/vPqyBCK/36.jpg','https://i.ibb.co/k5QxxBb/57.jpg','https://i.ibb.co/WymrdBf/102.jpg','https://i.ibb.co/cth1cwb/79.jpg','https://i.ibb.co/dJRTT6f/83.jpg','https://i.ibb.co/55szk9F/91.jpg','https://i.ibb.co/sgTbTLb/65.jpg','https://i.ibb.co/8rLfBDy/24.jpg','https://i.ibb.co/W0zbd1J/66.jpg','https://i.ibb.co/g7523mx/14.jpg','https://i.ibb.co/nB8CzdY/22.jpg','https://i.ibb.co/prbLDzX/101.jpg','https://i.ibb.co/r2sZVDR/37.jpg','https://i.ibb.co/t2pn4dL/94.jpg','https://i.ibb.co/F0CkFPp/35.jpg','https://i.ibb.co/7nwhZ3w/96.jpg','https://i.ibb.co/89r7C2b/20.jpg','https://i.ibb.co/TTYYgP3/69.jpg','https://i.ibb.co/JKp6Hqr/52.jpg','https://i.ibb.co/k8FknTC/41.jpg','https://i.ibb.co/37Nk23b/6.jpg','https://i.ibb.co/zSC3dHS/88.jpg','https://i.ibb.co/dLNthzx/60.jpg','https://i.ibb.co/3RPnFTc/105.jpg','https://i.ibb.co/kHbRF4Z/28.jpg','https://i.ibb.co/XYx1rFS/1.jpg','https://i.ibb.co/pxtTK6j/40.jpg','https://i.ibb.co/tKTjL9s/30.jpg','https://i.ibb.co/FHZt6NH/45.jpg','https://i.ibb.co/3kV41Nj/42.jpg','https://i.ibb.co/WDGcQ4X/78.jpg','https://i.ibb.co/XYh4fqF/70.jpg','https://i.ibb.co/B3rHm58/61.jpg','https://i.ibb.co/Vqxn77Z/97.jpg','https://i.ibb.co/DQ5P1Xq/92.jpg']
		        let canbgtip = canogti[Math.floor(Math.random() * canogti.length)]
                h = await getBuffer(canbgtip)
                cnf.sendMessage(from, h, image, {quote: mek})
		        await limitAdd(sender)
                break

case prefix+'yaoi':
if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const uaangkaputouuuu = checkATMuser(sender)
const jñpitooo = [`${uaangkaputouuuu}`]
if (jñpitooo < 50) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 50)
reply (mess.wait)
const yao = ['https://i.ibb.co/6ttzZjP/16.jpg','https://i.ibb.co/Sy2xc1P/12.jpg','https://i.ibb.co/8d2m1gF/15.jpg','https://i.ibb.co/BsYb0xN/36.jpg','https://i.ibb.co/dtgLh00/2.jpg','https://i.ibb.co/GHz2Qdx/25.jpg','https://i.ibb.co/sFVs1bt/1.jpg','https://i.ibb.co/d2J2KDj/24.jpg','https://i.ibb.co/NVHpkWp/23.jpg','https://i.ibb.co/KxVB3wY/22.jpg','https://i.ibb.co/t3ytyh6/21.jpg','https://i.ibb.co/GVrKbYD/20.jpg','https://i.ibb.co/WDttFJK/19.jpg','https://i.ibb.co/517JFnF/18.jpg','https://i.ibb.co/zGRdbtZ/4.jpg','https://i.ibb.co/WVYF9JL/3.jpg','https://i.ibb.co/ZN7zsbk/5.jpg','https://i.ibb.co/WDDgvTq/28.jpg','https://i.ibb.co/vxfVSzy/27.jpg','https://i.ibb.co/RSkfN6D/26.jpg','https://i.ibb.co/wLzRyr2/13.jpg','https://i.ibb.co/HBpxR3v/17.jpg','https://i.ibb.co/1m19qTS/35.jpg','https://i.ibb.co/6vXpDm0/11.jpg','https://i.ibb.co/myvQCmx/34.jpg','https://i.ibb.co/pRPyw6Q/33.jpg','https://i.ibb.co/gZmRKNC/10.jpg','https://i.ibb.co/pJpcWtw/32.jpg','https://i.ibb.co/vH7DBc9/9.jpg','https://i.ibb.co/fCMMBt4/31.jpg','https://i.ibb.co/p49wLDJ/8.jpg','https://i.ibb.co/3Cft0R5/30.jpg','https://i.ibb.co/qYQgGQZ/7.jpg','https://i.ibb.co/0s5x61M/6.jpg','https://i.ibb.co/C8Nngyq/29.jpg','https://i.ibb.co/Np0VTVw/14.jpg']
let yaoii  = yao[Math.floor(Math.random() * yao.length)]   
  yaoiii = await getBuffer(yaoii)           
                cnf.sendMessage(from, yaoiii, image, {quote: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨𝐧 𝟓𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬'})		       
                break
                
case prefix+ 'tagall':
case prefix+ 'todos':
case prefix+ 'marcar':
case prefix+ 'etiquetar':
if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*▢ Grupo:*  ${groupName}\n*▢ Miembros:* ${groupMembers.length} \n*▢ Total De Admins:* ${groupAdmins.length}\n┌───⊷ *MENCIONES* ⊶`+teks+'└─────✪ 𝐒𝐨𝐟𝐢 ┃ ᴮᴼᵀ ✪───────* ', members_id, true)
					break
case prefix+ 'tagall2':
                case prefix+ 'marcar2':
				cnf.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `♡ ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					cnf.sendMessage(from, 'Mencionando a todos OwO'+teks+'✪ 𝐒𝐨𝐟𝐢 ┃ ᴮᴼᵀ ✪', text, {quoted: mek})
					break
                case prefix+ 'tagall3':
                case prefix+ 'marcar3':
				cnf.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					cnf.sendMessage(from, '𝚃𝙾𝙳𝙾𝚂'+teks, text, {detectLinks: false, quoted: mek})
					break
                        case prefix+ 'tagall4':
                        case prefix+ 'marcar4':
				cnf.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `✿ ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					cnf.sendMessage(from, '𝙏𝙤𝙙𝙤𝙨'+teks+'✔︎', text, {quoted: mek})
					break
                case prefix+ 'tagall5':
                case prefix+ 'marcar5':
				cnf.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += ` ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('𝑻𝑶𝑫𝑶𝑺'+teks+'')
					break
case prefix+ 'wame':
                   cnf.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp (◍•ᴗ•◍) : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    cnf.sendMessage(from, options, text, { quoted: mek } )
				break

case prefix+ 'muslos':
case prefix+ 'muslo':
if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const uaangkaputouuu = checkATMuser(sender)
const jñpitoo = [`${uaangkaputouuu}`]
if (jñpitoo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
reply (mess.wait)
const uiu =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
    const xfjjjjjs = uiu[Math.floor(Math.random() * uiu.length)]
uwu = fs.readFileSync(`./muslos/${xfjjjjjs}.jpg`);
cnf.sendMessage(from, uwu, image, {quote: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬'})
break	


case prefix+'apostar':
dineroapostado = body.slice(9)
if (args.length < 1) return reply('*Cuanto deseas apostar?')
  if(isNaN(dineroapostado)) return await reply('la cantidad debe ser un número')
 const uaangkauuuiiu = checkATMuser(sender)
const jññño = [`${uaangkauuuiiu}`]
if (jññño < dineroapostado) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, dineroapostado)
const gpp = ['10','10','10','10','10','10','10','10','10','10','10','10','10','50000']
	const gppp = gpp[Math.floor(Math.random() * gpp.length)]
piro = `*[💲] [ 𝗔𝗣𝗨𝗘𝗦𝗧𝗔𝗦 ] [💲]*

᭕- Dinero apostado :
᭕- ${dineroapostado}
᭕- Jugador :
᭕- ${pushname}

*{💲}---𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎--{-💲}*
        ༊    𝙿𝙴𝚁𝙳𝙴𝙳𝙾𝚁    ༊
*{💲}---𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎--{-💲}*

× No ganas nada
× Pierdes el dinero apostado

× Gracias por jugar`


ganadorxd = `*[💲] [ 𝗔𝗣𝗨𝗘𝗦𝗧𝗔𝗦 ] [💲]*

᭕- Dinero apostado :
᭕- ${dineroapostado}
᭕- Jugador :
᭕- ${pushname}

*{💲}---𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎--{-💲}*
        ༊     𝙶𝙰𝙽𝙰𝙳𝙾𝚁     ༊
*{💲}---𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎--{-💲}*

× Ganaste :
× 50000 soficoins

× Gracias por jugar`
if (gppp < 90) return reply(piro)
addKoinUser(sender, 50000)

reply(`${ganadorxd}`)
break





                                                                                                                        
default:



}
        if (budy.includes('chat.whatsapp')){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin (◍•ᴗ•◍)❤')
										var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Enlace detectado😤 @${sender.split("@")[0]}`)
					cnf.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }


				
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           
                           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
