import bcrypt from "bcrypt";
import User from "../../modules/user/model/User.js";

export async function createInitialData() {
  try {
    await User.sync({ force: true });

    let password = await bcrypt.hash("123456", 10);

    await User.create({
      name: "userTest",
      email: "emailTeste@email.com",
      password: password,
    });
    await User.create({
      name: "userTest2",
      email: "emailTeste2@email.com",
      password: password,
    });
  } catch (error) {
    console.error(error.message);
  }
}
