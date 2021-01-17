const mongoose = require('mongoose');
const aws = require('aws-sdk');
const s3 = new aws.S3(
    {
        accessKeyId: process.env.AWS_ACESS_KEY_ID, 
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY, 
        region: process.env.AWS_DEFAULT_REGION
    }
);

const fs = require('fs'); 
const path = require('path'); 
const {promisify} = require('util');


const PostSchema = new mongoose.Schema(
    {
        name: String, 
        size: Number, 
        key: String, 
        url: String, 
        createAt: 
        {
            type: Date, 
            default: Date.now
        },
        title: String,
    }
); 

PostSchema.pre('save', function()
{
    if(!this.url)
    {
        this.url= `${process.env.APP_URL}/files/${this.key}`; 
    }
});

PostSchema.pre('remove', function()
{
    if(process.env.STORAGE_TYPE === 's3')
    {
        return s3.deleteObject(
            {
                Bucket: 'davidcarmoupload', 
                Key: this.key,
            }
        ).promise()
    }
    else
    {
        return promisify(fs.unlink)(path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key))
    }
})

module.exports = mongoose.model("Post", PostSchema);