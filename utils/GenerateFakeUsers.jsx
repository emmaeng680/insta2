import { faker } from "@faker-js/faker"

const generateFakeUser = () => {
    return {
        id: faker.string.uuid() ,
        username: faker.person.fullName(),
        avatar: faker.image.avatarLegacy(),
        company:faker.company.name()
    }
}

export const generateFakeUsers = (length) => {
    const users = []
    Array.from({ length: length }).forEach(() => {
        users.push(generateFakeUser())
    })
    return users
}