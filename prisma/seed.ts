import { prisma } from "../src/lib/prisma"
import bcrypt from "bcryptjs";

async function main(){
  // cleanUp
  await prisma.user.deleteMany()
  await prisma.post.deleteMany()
  // パスワード暗号化
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash('パスワード1234',salt)
  // ダミー画像url
  const dummyImages = [
    'https://picsum.photos/seed/post1/600/400',
    'https://picsum.photos/seed/post2/600/400'
  ]

  const user = await prisma.user.create({
    data:{
      email:'test@example.com',
      name:'testUser',
      password:hashedPassword,
      posts:{
        create:[
          {
            title:'FirstTestPost',
            content:'testPost testPost testPost testPost testPost',
            topImage:dummyImages[0],
            published:true
          },{
            title:'SecondTestPost',
            content:'testPost testPost testPost testPost testPost',
            topImage:dummyImages[1],
            published:true
          }

        ]
      }
    }
  });
  console.log({user})
}
main()
  .catch(e=>{
    console.error(e)
    process.exit(1)
  })
  .finally(async ()=>{
    await prisma.$disconnect()
  });