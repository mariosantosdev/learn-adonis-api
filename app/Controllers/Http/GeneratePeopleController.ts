import { faker } from "@faker-js/faker";

export default class GeneratePeopleController {
  public async generate() {
    const [firstName, lastName] = faker.name.findName().split(" ");

    const people = {
      name: `${firstName} ${lastName}`,
      username: faker.internet.userName(firstName, lastName),
      email: faker.internet.email(firstName, lastName),
      phone: faker.phone.phoneNumber("+55 ## 9####-####"),
      image: faker.image.avatar(),
      address: {
        street: faker.address.streetName(),
        state: faker.address.state(),
        country: faker.address.country(),
      },
    };

    return people;
  }
}
