const devnori = {
    name: "Devnori",
    age: 20,
    gender: "female"
}

const resolvers = {
    Query: {
        person: () => devnori
    }
};

export default resolvers;