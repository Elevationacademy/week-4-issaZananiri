
if (localStorage.wisdomId == undefined)
    localStorage.wisdomId = 1
let wisdom 
const getwisdom = () => {
    wisdom = []
    if (localStorage.wisdom)
        wisdom = JSON.parse(localStorage.wisdom || "{}")
}
const uploadData = () => {
    localStorage.removeItem("wisdom")
    localStorage.setItem("wisdom", JSON.stringify(wisdom))
    render()
}
const render = () => {
    $('div').remove()
    if (wisdom.length > 0)
        wisdom.forEach(r => $('body').append(`<div data-id=${r.id}>${r.text}<span class="delete">  X</span></div>`))
}
$('#add').click(function () {
    const text = $('input').val()
    wisdom.push({ text: text, id: localStorage.wisdomId++ })
    if (wisdom.length % 2 == 0) {
        uploadData()
    }
})
$('#clear').click(function () {
    localStorage.removeItem("wisdom")
    getwisdom()
    render()
})
getwisdom()
render()
console.log(localStorage)