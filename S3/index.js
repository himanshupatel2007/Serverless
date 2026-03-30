const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3") 
const {getSignedUrl} = require("@aws-sdk/s3-request-presigner") 

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }

})

async function getObjectURl(key) {
    const command = new GetObjectCommand({
        Bucket: "learningbucket-one",
        Key: key,
    });
    const URl = await getSignedUrl(s3Client,command,{expiresIn:30});
    return URl;
}
async function URL() {
    
    console.log("URL for Object : BlackWindowWallpaper.jpg is ",await getObjectURl("BlackWindowWallpaper.jpg"))
}
URL();