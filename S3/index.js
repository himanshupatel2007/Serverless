const {
    S3Client,
    GetObjectCommand,
    PutObjectCommand,
    ListObjectsV2Command,
    DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: "",
        secretAccessKey: "",
    },
});

async function getObjectURl(key) {
    const command = new GetObjectCommand({
        Bucket: "learningbucket-one",
        Key: key,
    });
    const URl = await getSignedUrl(s3Client, command, { expiresIn: 30 });
    return URl;
}
async function listAllObjects() {
    const command = new ListObjectsV2Command({
        Bucket: "learningbucket-one",
        Key: "/",
    });
    const result = await s3Client.send(command);
    console.log(result);
}
async function putObject(filename, contentType) {
    const command = new PutObjectCommand({
        Bucket: "learningbucket-one",
        Key: `/uploads/files/${filename}`,
        ContentType: contentType,
    });
    const url = await getSignedUrl(s3Client, command);
    return url;
}
async function deleteObject(key) {
    const command = new DeleteObjectCommand({
        Bucket: "learningbucket-one",
        Key:key,
    })
    await s3Client.send(command);
    console.log(`Object Deleted :${key}`)
    
}
async function URL() {
    await deleteObject("/uploads/files/image - 1774877458217.png")
    //await listAllObjects();
    //console.log("URL for Object : BlackWindowWallpaper.jpg is ",await getObjectURl("/uploads/files/image - 1774877458217.png"))
    // console.log("URL for Uploading Files :", await putObject(`image - ${Date.now()}.png`))
}
URL();
