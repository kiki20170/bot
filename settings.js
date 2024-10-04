const chalk = require("chalk")
const fs = require("fs")
const { format } = require('./lib/myfunc')
const moment = require('moment-timezone')
moment.tz.setDefault("Asia/Jakarta").locale("id")
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

//=================================================//
global.owner = ['6289601109799'] //ur owner number
global.ownernomer = "6289601109799" //ur owner number2
global.ownername = "Kiki" //ur owner name
global.namaowner = "Kiki"
global.ytname = "YouTube : Pa" //ur yt chanel name
global.socialm = "Instagram : allde_" //ur github or insta name
global.location = "Indonesia 🇮🇩" //ur location
//=================================================//
global.ownergc = "https://linktr.ee/kiki201712"
global.botname = "Bc"
global.namabot = "abs"
global.ownerNumber = ["6289601109799@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@ZUZ"
global.themeemoji = '🪀'
global.wm = "Zo"
global.packname = `Created By Simple-Bots\n\n${hariini}\n${wib} WIB` // Watermark Sticker
global.author = '' // Watermark Sticker
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'
global.autoread = true
global.autobio = true
global.teksjpm = '⇘ ʅιʂƚ ʝρɱ αɳƚι σƙҽρ ⇙\n\n5𝙆   : 40 𝙈𝙀𝙈𝘽𝙀𝙍\n10𝙆 : 80 𝙈𝙀𝙈𝘽𝙀𝙍\n20𝙆 : 160 𝙈𝙀𝙈𝘽𝙀𝙍\n40𝙆 : 350 𝙈𝙀𝙈𝘽𝙀𝙍\n60𝙆 : 300 𝙈𝙀𝙈𝘽𝙀𝙍\n80𝙆 : 400 𝙈𝙀𝙈𝘽𝙀𝙍\n100𝙆 : 500 𝙈𝙀𝙈𝘽𝙀𝙍\n120𝙆 : 600 𝙈𝙀𝙈𝘽𝙀𝙍\n140𝙆 : 700 𝙈𝙀𝙈𝘽𝙀𝙍\n160𝙆 : 800 𝙈𝙀𝙈𝘽𝙀𝙍\n180𝙆 : 900 𝙈𝙀𝙈𝘽𝙀𝙍\n250𝙆 : 𝙁𝙐𝙇𝙇 1025 𝙈𝙀𝙈𝘽𝙀𝙍\n\n𝗟𝗜𝗡𝗞 𝗚𝗖 𝗛𝗢𝗦𝗧 & 𝗝𝗣𝗠⬇️⬇️\nhttps://chat.whatsapp.com/HWbGqfdT2nH1iDbX8KeMAB\n𝗟𝗜𝗡𝗞 𝗚𝗖  𝗝𝗣𝗠²\nhttps://chat.whatsapp.com/HW0XWvWysZT45o1vG9ooVK\n\n*PAYMENT ZURO: GOPAY, DANA, OVO, QRIS*\n\n*S&K*:\n*• GRUB WAJIB DI TUTUP*\n*• WAJIB AKTIFIN PERMINTAAN BERGABUNG DI GRUB*\n*• WAJIB ADMININ NO REKBER ( ZURO )*'
//=================================================//
global.galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Rasanya baru kemarin kamu menawariku seblak. Lalu entah mengapa hari ini menanyakan kabar pun tidak.\n~vinaa",
    "What's the point of us being close yesterday?\n~Vinaa",
    "Kamu tidak bisa memaksa seseorang untuk menomor satukan dirimu, sebab prioritas dengan kebutuhan itu jelas beda.\n*BY PUTRI*",
    "Hubungan kita hanya sampai dilisan, tidak sampai dipertemukan.\n*BY PUTRI*",
    "Dia sesuka hati, kamu setulus hati.\n*BY PUTRI*",
    "Mengakhiri bukan berarti tidak mau berjuang lagi...hanya saja aku tidak mau ada lgi,hati yg tersakiti.\n\nBy putri",
    "Maaf. Tidak ada waktu untuk meladeni gabutmu. Karena aku sibuk dengan kesibukan ku.\n*BY PUTRI*",
    "Pelangimu mungkin banyak warna. Tapi, tak ada warna yang membuat dia menaruh rasa.\n*BY PUTRI*",
    "Bahagia terus ya,sampai saat ini lu masih jadi tokoh favorit dikisah hidup gue,luv u.\n\n*BY PUTRI*",
    "Sorry,gue ga kuat buat semuanya ,mksi ya\n\n*BY PUTRI*",
    "Kamu memang sosok yg tak terduga Mudah membuat ku bahagia,mudah membuatku hancur saat itu juga.\n\n*BY PUTRI*",
    "Harusnya kalo udah ga sayang sama aku tu bilang aja gausa di tutup tutupin\n*BY INDI*",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
//=================================================//
global.bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
//=================================================//
global.motivasi = [
"Jangan bicara, bertindak saja. Jangan katakan, tunjukkan saja. Jangan janji, buktikan saja.",
"Jangan pernah berhenti melakukan yang terbaik hanya karena seseorang tidak memberi Anda penghargaan.",
"Bekerja saat mereka tidur. Belajar saat mereka berpesta. Hemat sementara mereka menghabiskan. Hiduplah seperti mimpi mereka.",
"Kunci sukses adalah memusatkan pikiran sadar kita pada hal-hal yang kita inginkan, bukan hal-hal yang kita takuti.",
"Jangan takut gagal. Ketakutan berada di tempat yang sama tahun depan seperti Anda saat ini.",
"Jika kita terus melakukan apa yang kita lakukan, kita akan terus mendapatkan apa yang kita dapatkan.",
"Jika Anda tidak dapat mengatasi stres, Anda tidak akan mengelola kesuksesan.",
"Bersikap keras kepala tentang tujuan Anda dan fleksibel tentang metode Anda.",
"Kerja keras mengalahkan bakat ketika bakat tidak bekerja keras.",
"Ingatlah bahwa pelajaran terbesar dalam hidup biasanya dipelajari dari saat-saat terburuk dan dari kesalahan terburuk.",
"Hidup bukan tentang menunggu badai berlalu, tetapi belajar menari di tengah hujan.",
"Jika rencananya tidak berhasil, ubah rencananya bukan tujuannya.",
"Jangan takut kalau hidupmu akan berakhir; takutlah kalau hidupmu tak pernah dimulai.",
"Orang yang benar-benar hebat adalah orang yang membuat setiap orang merasa hebat.",
"Pengalaman adalah guru yang berat karena dia memberikan tes terlebih dahulu, kemudian pelajarannya.",
"Mengetahui seberapa banyak yang perlu diketahui adalah awal dari belajar untuk hidup.",
"Sukses bukanlah akhir, kegagalan tidak fatal. Yang terpenting adalah keberanian untuk melanjutkan.",
"Lebih baik gagal dalam orisinalitas daripada berhasil meniru.",
"Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan di balik impianmu.",
"Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya.",
"Kembangkan kesuksesan dari kegagalan. Keputusasaan dan kegagalan adalah dua batu loncatan paling pasti menuju sukses.",
"Jenius adalah satu persen inspirasi dan sembilan puluh sembilan persen keringat.",
"Sukses adalah tempat persiapan dan kesempatan bertemu.",
"Ketekunan gagal 19 kali dan berhasil pada kesempatam yang ke-20.",
"Jalan menuju sukses dan jalan menuju kegagalan hampir persis sama.",
"Sukses biasanya datang kepada mereka yang terlalu sibuk mencarinya.",
"Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini.",
"20 tahun dari sekarang, kau mungkin lebih kecewa dengan hal-hal yang tidak sempat kau lakukan alih-alih yang sudah.",
"Jangan habiskan waktumu memukuli tembok dan berharap bisa mengubahnya menjadi pintu.",
"Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya.",
"Hidup ini terdiri dari 10 persen apa yang terjadi padamu dan 90 persen bagaimana caramu menyikapinya.",
"Ada tiga cara untuk mencapai kesuksesan tertinggi: Cara pertama adalah bersikap baik. Cara kedua adalah bersikap baik. Cara ketiga adalah menjadi baik.",
"Alasan nomor satu orang gagal dalam hidup adalah karena mereka mendengarkan teman, keluarga, dan tetangga mereka.",
"Waktu lebih berharga daripada uang. Kamu bisa mendapatkan lebih banyak uang, tetapi kamu tidak bisa mendapatkan lebih banyak waktu.",
"Penetapan tujuan adalah rahasia masa depan yang menarik.",
"Saat kita berusaha untuk menjadi lebih baik dari kita, segala sesuatu di sekitar kita juga menjadi lebih baik.",
"Pertumbuhan dimulai ketika kita mulai menerima kelemahan kita sendiri.",
"Janganlah pernah menyerah ketika Anda masih mampu berusaha lagi. Tidak ada kata berakhir sampai Anda berhenti mencoba.",
"Kemauan adalah kunci sukses. Orang-orang sukses, berusaha keras apa pun yang mereka rasakan dengan menerapkan keinginan mereka untuk mengatasi sikap apatis, keraguan atau ketakutan.",
"Janganlah pernah menyerah ketika Anda masih mampu berusaha lagi. Tidak ada kata berakhir sampai Anda berhenti mencoba.",
"Kemauan adalah kunci sukses. Orang-orang sukses, berusaha keras apa pun yang mereka rasakan dengan menerapkan keinginan mereka untuk mengatasi sikap apatis, keraguan atau ketakutan.",
"Hal pertama yang dilakukan orang sukses adalah memandang kegagalan sebagai sinyal positif untuk sukses.",
"Ciri khas orang sukses adalah mereka selalu berusaha keras untuk mempelajari hal-hal baru.",
"Sukses adalah mendapatkan apa yang kamu inginkan, kebahagiaan menginginkan apa yang kamu dapatkan.",
"Orang pesimis melihat kesulitan di setiap kesempatan. Orang yang optimis melihat peluang dalam setiap kesulitan.",
"Keraguan membunuh lebih banyak mimpi daripada kegagalan.",
"Lakukan apa yang harus kamu lakukan sampai kamu dapat melakukan apa yang ingin kamu lakukan.",
"Optimistis adalah salah satu kualitas yang lebih terkait dengan kesuksesan dan kebahagiaan daripada yang lain.",
"Penghargaan paling tinggi bagi seorang pekerja keras bukanlah apa yang dia peroleh dari pekerjaan itu, tapi seberapa berkembang ia dengan kerja kerasnya itu.",
"Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan.",
"Kegagalan tidak akan pernah menyusul jika tekad untuk sukses cukup kuat."
]
//=================================================//
global.domain = '' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '' // id eggs yang dipakai
global.location = '' // id location
//=================================================//
global.thumb = { url: 'https://telegra.ph/file/c2e84a4776ee6c47aa3a5.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa
//=================================================//
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
