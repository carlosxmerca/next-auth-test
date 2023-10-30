// TODO: add TS Types and interfaces
export const authenticate = async (email: string, password: string) => {
  let user = {
    id: "1",
    name: "Carlos",
    email: "carlosxmerca@gmail.com",
    image: "...",
    secret: "SECRET_REST_API_TOKEN",
  };

  console.log("Service is being used...");

  if (email == "123" && password == "123") return user;
  else return undefined;
};
