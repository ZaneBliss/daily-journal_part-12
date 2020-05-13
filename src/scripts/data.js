const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor")
            .then(response => response.json())
    },
    getJournalById(id) {
        return fetch(`http://localhost:8088/entries?_expand=mood&_expand=instructor&id=${id}`)
        .then(response => response.json())
    },
    getMoods() {
        return fetch('http://localhost:8088/moods')
        .then(response => response.json())
    },
    getInstructors() {
        return fetch('http://localhost:8088/instructors')
        .then(response => response.json())
    },
    saveJournalEntry(object) {
        fetch('http://localhost:8088/entries', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        })
    },
    deleteJournalEntry(id) {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    editJournalEntry(id, obj) {
        return fetch(`http://localhost:8088/entries/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            }).then(response => response.json())
    }
}

export default API