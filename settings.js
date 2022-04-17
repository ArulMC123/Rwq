const fs = require('fs')
const chalk = require('chalk')

//===> FREE API
global.APIs = {
	ryuu: 'https://api-ryubotz.herokuapp.com',
}

global.APIKeys = {
	'https://api-ryubotz.herokuapp.com': 'RyuBotz',
}

//===> UBAH DISINI
global.namaowner = 'Sky Team' //Ganti Jadi Namamu
global.owner = ['6289510702581','6285339347510','6288219647445','62882009117779'] //Kalo Mau Lebih Tambahin Aja
global.nomerowner = '6288219647445' //Owner Utama Istilahnya
global.namabot = 'SkyBotz' //Ganti Jadi Nama Botmu
global.packname = '© SkyBotz' //Sticker Weem
global.author = 'SkyBotz By Sky Team' //Sticker Weem
global.webme = 'https://api-ryubotz.herokuapp.com'
global.sessionName = 'session'
global.bg_welcome = 'https://telegra.ph/file/528b594d5d91c08482515.jpg' //Max 30kb Agar Tidak Delay
global.youtube = 'https://youtube.com/channel/UCJh9I1GEVJk8qQWGs1t09eQ'
global.github = 'https://github.com/ArulMC123'
global.instagram = 'https://www.instagram.com/asrul54365?r=nametag'

//===> BACKGROUND SETIAP MENU
global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','/','#','.']
global.sp = '⭔'

//===> EDIT SESUAI KEMAUANMU
global.mess = {
admin: '*Maaf, Kamu Bukan Admin*',
botAdmin: '*SkyBotz Bukan Admin !!!*',
owner: '*Maaf, Fitur Khusus SkyTeam*',
group: '*KHUSUS GROUP !!!*',
private: '*KHUSUS PRIVATE CHAT !!!*',
bot: '*KHUSUS PENGGUNA NOMER BOT !!!*',
wait: '*Proses ...*',
done: '*DONE !!!*',
}
global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
