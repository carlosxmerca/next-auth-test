// let user = {
//     id: "1",
//     username: "carlosxmerca",
//     email: "carlosxmerca@gmail.com",
//     fullname: "Carlos Mercado",
//     role: "SUPER",
//     createdAt: "2021-05-30T06:45:19.000Z",
//     name: "Carlos"
// };
// let token = "SECRET";

interface User {
    id: string;
    name: string;
}

type Token = string;

export const authenticate = async (email: string, password: string) => {
    let user = {
        id: "1",
        name: "Carlos",
        email: "carlosxmerca@gmail.com",
        image: "...",
        secret: "SECRET"
    };

    console.log("Service is being used...");
    return user;
}
