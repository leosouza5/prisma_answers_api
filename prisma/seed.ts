import { prisma } from "@/prisma"

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "John", email: "john@email.com" },
      { name: "Diego", email: "diego@email.com" },
    ]
  })
}

seed().then(() => {
  console.log("Database seeded!")
  prisma.$disconnect()
})