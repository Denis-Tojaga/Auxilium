export default [
    {
        id: "0",
        type: "Free",
        price: "0,00$/Month",
        options: [{ title: "Quality audio", valid: true }, { title: "Unlimited skips", valid: false }, { title: "Play any track", valid: false }, { title: "a-Reality", valid: false }]
    },

    {
        id: "1",
        type: "Student",
        price: "3,99$/Month",
        options: [{ title: "Add free", valid: true }, { title: "a-Reality", valid: false }, { title: "Play any track", valid: true }, { title: "Quality audio", valid: true }]
    },

    {
        id: "2",
        type: "Premium",
        price: "8,99$/Month",
        options: [{ title: "Add free", valid: true }, { title: "Unlimited skips", valid: true }, { title: "a-Reality", valid: true }, { title: "v-Reality", valid: true }]
    }
];