const moment = require('moment');
const router = require('express').Router();
const path = require('path');

// Module Router
router.get('/', (req,res) => {
    res.json({
        Status: `Succesfully added at ${moment().format('LTS')} - West Indonesia Time`,
        Message: 'Selamat datang di halaman tugas Express.Js',
        Navigation: 'Ketikkan (/home) untuk menuju web utama & ketikkan (/page) untuk menuju ke halaman lainnya'
    });
});

// Halaman Pertama
router.use('/home',function(req,res){
	res.sendFile(path.join(__dirname+'/views/index.html'));
});

// Halaman Kedua
router.use('/page',function(req,res){
	res.sendFile(path.join(__dirname+'/public/page.html'));
});


module.exports = router;