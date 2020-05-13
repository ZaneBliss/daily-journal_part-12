const component = {
    makeJournalEntryComponent: (journalEntry) => {
        return `
        <h1>${journalEntry.concepts}</h1>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.date}</p>
        <p>${journalEntry.mood.label}</p>
        <p>Instructor: ${journalEntry.instructor.firstName + " " + journalEntry.instructor.lastName}</p>
        <button id="delete--${journalEntry.id}">delete</button>
        <button id="edit--${journalEntry.id}">edit</edit>
        `
    }
}

export default component