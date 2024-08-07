const multer=require('multer');
const storage = multer.diskStorage({});

const upload = multer({storage}).array('jewellery',10);

module.exports= upload;



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');  // Ensure this directory exists
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.jpg);
//     }
// });

// const upload = multer({ storage: storage });

// module.exports = upload;


