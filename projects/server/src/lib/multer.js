// const multer = require("multer");
// const { nanoid } = require("nanoid");

// const fileUploader = ({
//     destinationFolder = "profilePictures",
//     prefix = "AVATAR",
//     fileType = "image",
//     fileSizeLimit = 1000000,
// }) => {
//     const storageConfig = multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, `${__dirname}/../public/${destinationFolder}`);
//         },
//         filename: (req, file, cb) => {
//             const fileExtension = file.mimetype.split("/")[1];
//             const filename = `${prefix}_${nanoid()}.${fileExtension}`;
//             cb(null, filename);
//         },
//     });
//     const uploader = multer({
//         storage: storageConfig,
//         fileFilter: (req, file, cb) => {
//             console.log(file);

//             if (file.mimetype.split("/")[0] != fileType) {
//                 return cb(null, false);
//             }

//             cb(null, true);
//         },
//         limits: {
//             fileSize: fileSizeLimit,
//         },
//     });

//     return uploader;
// };

// module.exports = fileUploader;

const multer = require('multer');
const fs = require ('fs')
// var public = require('.././public');

const defaultPath = 'src/public' // ini diisi dengan folder tujuan dimana kita akan ngesave uploadan user
const storage = multer.diskStorage({// Ini setup untuk storagenya, dimana letaknya kita akan menyimpan data
    destination: async(req, file, cb) => {
        const isDirectoryExist = fs.existsSync(defaultPath)

        if(!isDirectoryExist){ //Kondisi jika directory belum dibuat atau gak ada, ini bakalan membuat directory baru
            await fs.promises.mkdir(defaultPath, {recursive: true})
        }
        cb(null, `${defaultPath}`)
    },
    filename: function (req, file, cb) {
        const extension = (file.mimetype.split("/")[1])
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + `.${extension}`
        // console.log(uniqueSuffix)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

//Setup File Filter
var fileFilter = (req, file, cb) => {
    // console.log(file)
    if(file.mimetype.split('/')[0]=== 'image'){
        //Accept
        cb(null, true)
    } else if(file.mimetype.split('/')[0] !=='image'){
        //Reject
        cb(new Error('File must be image!'))
    }
}

exports.multerupload = multer({storage:storage, fileFilter:fileFilter})