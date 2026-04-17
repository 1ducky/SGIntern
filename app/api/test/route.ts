
import { deleteUser, putUpdateUser } from "@/feature/users/user.services"


export async function GET() {
  // const users = await userRepository.getUser(1,0)
  // return Response.json({
  //   data: users[0],
  //   total: users[1]
  
  // });
  const data = {
    email:'admin1@gmail.com',
    name:'admin'
  }
  const user = await putUpdateUser(data,'1')
  return Response.json({
    user
  })
  
}