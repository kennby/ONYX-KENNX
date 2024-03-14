const fs = require('fs') 
const path = require('path')
const chalk = require('chalk') 
const { en, es, ar, id, pt, rs} = require('./libs/idiomas/total-idiomas.js') 

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [["527862279795", "Owner", true], ["527862279795"], ["527862279795"], ["527862279795"], ["527862279795"], ["527862279795"],["527862279795"], ["527862279795"], ["527862279795"], ["527862279795"], ["527862279795"], ["527862279795"], ["527862279795"], ["527862279795"]]
global.mods = []
global.premium = []  
global.blockList = []  

//---------[ NOMBRE/INFO ]---------
global.botname = "ONYX"
global.wm = 'ONYX'
global.vs = '1.1.0'

//Función beta : escribe el número que quiere que sea bot para que mande el Código de 8 digitos
global.botNumberCode = "" //Ejemplo: +59309090909
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Lima' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = es //Predeterminado en idioma Español 
global.prefix = [`/`]

//---------[ APIS GLOBAL ]---------
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = {
//ApiEmpire: 'https://',
CFROSAPI: 'https://api.cafirexos.com',
nrtm: 'https://fg-nrtm.ddns.net',
fgmods: 'https://api.fgmods.xyz', 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',
rose: 'https://api.itsrose.site',
popcat: 'https://api.popcat.xyz',
xcoders: 'https://api-xcoders.site',
vihangayt: 'https://vihangayt.me',
erdwpe: 'https://api.erdwpe.com',
xyroinee: 'https://api.xyroinee.xyz',
nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': 'GataDios',
'https://api.neoxr.my.id': `${keysneoxr}`,
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren',
'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
 
//---------[ STICKERS ]---------
global.packname = "ONYX"
global.author = `KENN`
 
//---------[ IMAGEN ]---------
global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = fs.readFileSync('./media/menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')

//---------[ ENLACES ]---------
global.md = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.yt = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.tiktok = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.fb = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.faceb = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'

global.nna = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' //Update 
global.nn = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' //LoliBot
global.nn2 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' //Loli & Nova
global.nn3 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' //Grupo de Colaboracion
global.nn4 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' // Grupo COL 2
global.nn5 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' //Grupo COL 3
global.nn6 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' //test
global.nn7 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' //Grupo ayuda sobre el bot
global.nn8 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' //enlace lolibot
global.multi = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' //Grupo COL 4
global.nna2 = 'Em4Byf4w5VgHObPvZQlfnM'

//---------[ INFO ]--------- 
global.info = { wait: '▬▭▭▭▭▭▭*', 
waitt: '▬▬▭▭▭*', 
waittt: '*▬▬▬▬▭▭*', 
waitttt: '*▬▬▬▬▬▬▭*', 
waittttt: '*▬▬▬▬▬▬▬*', 
result: `${lenguaje['exito']()}`,  
admin: `${lenguaje['admin']()}`, 
botAdmin: `${lenguaje['botAdmin']()}`, 
owner: `${lenguaje['propietario']()}`, 
group: `${lenguaje['group']()}`, 
private: `${lenguaje['private']()}`, 
bot: `${lenguaje['bot']()}`, 
error: `${lenguaje['error']()}`, 
advertencia: `${lenguaje['advertencia']()}`, 
registra: `${lenguaje['registra']()}`, 
limit: `${lenguaje['limit']()}`, 
AntiNsfw: `${lenguaje['AntiNsfw']()}`,
endLimit: `${lenguaje['endLimit']()}`, }
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 90 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})
