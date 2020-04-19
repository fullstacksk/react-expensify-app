const book = {
    title: "Three Mistakes Of My Life",
    author: "Chetan Bhagat",
    publisher: {
        name: "Arihant",
        publishedOn: "05/05/2020"
    }
}
const { name: publishername = 'self published', publishedOn: date } = book.publisher
console.log(`${book.title} is published by ${publishername} on ${date}`);