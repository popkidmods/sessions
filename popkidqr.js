const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Wasi_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function POPKID_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Popkid_Tech = Wasi_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Popkid_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Danny_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Danny_Tech.sendMessage(Qr_Code_By_Popkid_Tech.user.id, { text: '' + b64data });
	
				   let POPKID_MD_TEXT = `
┏━━━━━━━━━━━━━━
 🧯𝐏𝐎𝐏𝐊𝐈𝐃 𝐌𝐃
┃sᴜᴄᴄᴇssғᴜʟʟʏ
┃ʙʏ ᴘᴏᴘᴋɪᴅ
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 = ᴘᴏᴘᴋɪᴅ🧑‍🚀
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029VadQrNI8KMqo79BiHr3l
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Please Follow My Support Channel
Wanna talk to me?https://wa.me/254111385747?text=hello+bro+im+from+sessions+id+im+my+dm
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©*■ᴘᴏᴘᴋɪᴅ ᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴘᴏᴘᴋɪᴅ🧑‍🚀■*
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Danny_Tach.sendMessage(Qr_Code_By_Danny_Tech.user.id,{text:POPKID_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Wasi_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					POPKID_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await POPKID_MD_QR_CODE()
});
module.exports = router
