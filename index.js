module.exports.hellofn = async(event)=>{
  return {
    statusCode :200,
    headers:{
      "Content-Type" :"application/json",
    },
    body:JSON.stringify({
      message: "Hello from the first function made by Himanshu Inside Aws cloud with Serverless Framework"
    })
  }
}
//checking the commit 