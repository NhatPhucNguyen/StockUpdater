export type User = {
    username: string;
    password: string;
    role: string;
    status?: "Active" | "Suspended";
};

export const credentials: User[] = [
    {
        username: "admin",
        password: "password",
        role: "admin",
    },
    {
        username: "storemanager",
        password: "password",
        role: "Store Manager",
    },
];
