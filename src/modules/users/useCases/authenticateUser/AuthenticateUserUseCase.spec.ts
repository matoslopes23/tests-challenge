import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ICreateUserDTO } from "../createUser/ICreateUserDTO";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase : AuthenticateUserUseCase;
let usersRepositoryInMemory : InMemoryUsersRepository;
let createUserUseCase : CreateUserUseCase;

describe("Authentication User",()=>{

    beforeEach(()=>{
      usersRepositoryInMemory = new InMemoryUsersRepository();
      authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
      createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)

    })
    it("Should be able to authenticate an user",async ()=>{
      const user: ICreateUserDTO = {
        name:"Lucas Matos",
        email:"matoslopesignite@gmail.com",
        password:"ignite"
      };
      await createUserUseCase.execute(user);

      const userAuthenticate = await authenticateUserUseCase.execute({
        email: user.email,
        password:user.password
      });
      expect(userAuthenticate).toHaveProperty("token");
    })
})
