const journalEntries = [
    {
        id: 1,
        date: "April 10, 2021",
        concepts: "html, CSS",
        description: "We studied a lot of crazy stuff and then worked together in teams to make crazy websites.",
        mood: "happy"
    },
    {
        id: 2,
        date: "April 14, 2021",
        concepts: "Javascript arrays",
        description: "We put objects in arrays and practiced ways to add objects to that array.",
        mood: "overwhelmed"
    }
]

const createEntry = (entry) => {
    const currentLastEntry = journalEntries[journalEntries.length-1]
    const idForNewEntry = currentLastEntry.id + 1
    entry.id = idForNewEntry
    entry.date = new Date()
    journalEntries.push(entry)
}

const newEntry = {
    concepts: "Javascript forms",
    description: "We worked on getting Javascript functions to work and flirted around with some forms, but I don't see getting that to work anytime soon."
}

createEntry(newEntry)

console.log(journalEntries)