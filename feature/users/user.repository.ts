import prisma from "@/lib/prisma";
import { RegisterInput, UpdateUserInput } from "./user.schema";


// list of truth source
export const userRepository = {
  getUsers,
  findUserByEmail,
  findUserById,
  findUsersByNameSearch,
  createUser,
  deleteUser,
  updateUser,
};

export const authUserRepository ={
  getAuthUserByEmail,
  getAuthUserRefreshTokenById,
  updateAuthUserTokenLogout,
  updateUserToken
}

// Visiility Fields
const select = {
  email: true,
  name: true,
  id: true,
  // tokenVersion:true
};

async function getAuthUserByEmail(email: string){
  const user = await prisma.user.findUnique({
    where:{
      email: email
    },
    select:{
      id:true,
      email:true,
      password:true,
      name:true,
      role:true,
      tokenVersion:true,
      refreshToken:true,
      refreshTokenExpiry:true,
    }
  })
  return user
}
async function getAuthUserRefreshTokenById(id: string){
  const user = await prisma.user.findUnique({
    where:{
      id: id
    },
    select:{
      id:true,
      tokenVersion:true,
      refreshToken:true,
      refreshTokenExpiry:true,
    }
  })
  return user
}

async function updateAuthUserTokenLogout(id: string,version: number) {
  const user = await prisma.user.update({
    where:{
      id: id,
      tokenVersion: version
    },
    data:{
      tokenVersion:{increment: 1},
      refreshToken: null,
      refreshTokenExpiry: null
    }
  })
  return user
}

async function updateUserToken(id: string,version : number, refreshToken: string, refreshTokenExpiry: Date){
  const user = await prisma.user.update({
    where:{
      id: id,
      tokenVersion : version
    },
    data:{
      refreshToken:refreshToken,
      refreshTokenExpiry: refreshTokenExpiry
    },
    select:{
      id:true,
      tokenVersion: true,
      refreshToken: true,
      refreshTokenExpiry: true
    }
  })
  return user
}

// get List of Users
async function getUsers(take: number, skip: number) {
  const [data, total] = await prisma.$transaction([
    prisma.user.findMany({
      skip,
      take,
      select
    }),
    prisma.user.count(),
  ]);
  return { data, total };
}

// find spesific User by email
async function findUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select
  });
  return user;
}

// find spesific user by id
async function findUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select
  });
  return user;
}
// find list of users by name containe keyword
async function findUsersByNameSearch(
  take: number,
  skip: number,
  keyword: string,
) {
  const [data, total] = await prisma.$transaction([
    prisma.user.findMany({
      where: {
        name: { mode: "insensitive", contains: keyword },
      },
      skip,
      take,
      select
    }),
    prisma.user.count({
      where: {
        name: { mode: "insensitive", contains: keyword },
      },
    }),
  ]);
  return { data, total };
}

// create new user
async function createUser(data: RegisterInput) {
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      name: data.name,
    },
    select
  });
  return user;
}

// delete spesific user by id
async function deleteUser(id: string) {
  const user = await prisma.user.delete({
    where: {
      id: id,
    },
    select
  });
  return user;
}

// update all field, spesific user by id
async function updateUser(data: UpdateUserInput, id: string) {
  const user = await prisma.user.update({
    where: { id: id },
    data,
    select
  });

  return user;
}
