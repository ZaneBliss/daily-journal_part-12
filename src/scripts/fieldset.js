import API from "./data.js";

const fieldset = {
  writeDom: function () {
    let container = document.querySelector('.form');
    container.innerHTML += hiddenDiv()
    container.innerHTML += dateField()
    container.innerHTML += conceptsField()
    container.innerHTML += entryField()
    container.innerHTML += moodField()
    container.innerHTML += instructorField()
    container.innerHTML += submit()
    container.innerHTML += "<hr>"
    insertDiv(".search", moodFilter());
    insertDiv(".search", searchEntries());
  }
}

// Populating mood selectors
API.getMoods().then(moods => {
  moods.forEach(mood => {
    document.querySelector("select[id='mood']").innerHTML += `<option value="${mood.id}">${mood.label}</option>`
  })
})

// Populating instructor selectors
API.getInstructors().then(instructors => {
  instructors.forEach(instructor => {
    document.querySelector("select[id='instructor']").innerHTML += `<option value="${instructor.id}">${instructor.firstName + " " + instructor.lastName}</option>`
  })
})

const dateField = () => {
  return `<fieldset>
        <label for="journalDate">Date of journal</label>
        <input type="date" name="journalDate" id="journalDate" value=""/>
      </fieldset>`
}
const conceptsField = () => {
  return `<fieldset>
        <div class="concepts-container">
          <label for="conceptsCovered">Concepts covered</label>
          <input type="text" name="conceptsCovered" id="conceptsCovered" value=""/>
          <div class="counter-container">
            <p>Words: <span id="wordCount">0</span>/10</p>
          </div>
        </div>
      </fieldset>`
}

const entryField = () => {
  return `<fieldset>
    <div class="entryContainer">
      <label for="journalEntry">Journal Entry</label>
      <textarea name="journalEntry" id="journalEntry" cols="25" rows="4" value=""></textarea>
    </div>
  </fieldset>`
}

const moodField = () => {
  return `<fieldset>
  <label for="moodId">Mood for the day</label>
    <select id="mood">
    </select>
    </fieldset>`
  }

const instructorField = () => {
  return `
  <fieldset>
  <label for="instructorId">Instructor</label>
  <select id="instructor">
  </select>
  </fieldset>
  `
}  

const moodFilter = () => {
    return `
    <fieldset>
    <legend>Filter Journal Entries by Mood</legend>
    <input type="radio" value="🙂" name="mood"> 
    <label>Happy</label>
    <input type="radio" value="😐" name="mood"> 
    <label>Okay</label>
    <input type="radio" value="🙁" name="mood"> 
    <label>Sad</label>
    </fieldset>`
}

const submit = () => {
  return `<input type="submit" value="Save Journal Entry" id="submitBtn" />`
}

const hiddenDiv = () => {
  return `<input type="hidden" id="journalId" value="" />`
}

const searchEntries = () => {
  return `
  <fieldset>
  <legend>Search Journal Entries</legend>
  <input type="text" placeholder="Enter search term" value="" id="search">
  `
}

function insertDiv (parent, child) {
  let parentEl = document.querySelector(parent)
  parentEl.innerHTML += child
}
 
export default fieldset