const multer = requiere('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = 
{
    dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'), 
    storage: multer.diskStorage(
        {
            destination: (req, file, cb) => 
            {
                cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
            },
            filename: (req, file, cb) => 
            {
                crypto.randomBytes(16, (err, hash) => 
                {
                    if(err) cb(err); 

                    const fileName = `${hash.toString("hex")} - ${file.originalName}`; 
                    cb(null, fileName);
                })
            }
        }
    ), 
    limits: {
        filteSize: 2 * 1024 * 1024
    }, 
    fileFilter: (req, file, cb) => 
    {
        const allowedMimes = 
        [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
        ];

        if(allowedMimes.includes(file.mimetype))
        {
            cb(null, true); //if the file has the mimetype, null for error e true for 'the file has the allowed mimetype'
        }
        else
        {
            cb(new Error("Invalid file type."));
        }
    }
};