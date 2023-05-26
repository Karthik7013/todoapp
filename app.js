let ol = document.querySelector('#to-do-body ol') // ul tag
let add = document.getElementById('add')




// windown.body.inp_value.onkeydown = (e) => { if (e.key === "Enter") { add.onclick() } }




add.onclick =
    function () {
        let inp_value = document.getElementById('input-val')
        if (inp_value.value !== '') {

            let li = document.createElement('li')
            ol.insertBefore(li, ol.children[0])

            let div_content = document.createElement('div')
            div_content.setAttribute('class', 'content')

            let cont_p = document.createElement('p')
            cont_p.textContent = inp_value.value
            div_content.append(cont_p)
            li.append(div_content)

            let div_controls = document.createElement('div')
            div_controls.setAttribute('class', 'controls')

            let sp1 = document.createElement('div')
            sp1.setAttribute('class', 'edit')

            let icon1 = document.createElement('i')
            icon1.setAttribute('class', 'fa-regular fa-pen-to-square')
            sp1.append(icon1)
            div_controls.append(sp1)
            // modal - create
            sp1.onclick = () => {


                let modal = document.createElement('div');
                modal.setAttribute('id', 'modal')
                document.body.append(modal)

                let edit_modal = document.createElement('div')
                edit_modal.setAttribute('class', 'edit-modal')
                modal.appendChild(edit_modal);
                let update_input = document.createElement('input')
                update_input.setAttribute('class', 'edit_input')
                edit_modal.append(update_input)
                update_input.value = cont_p.textContent
                let update_div = document.createElement('div')
                update_div.setAttribute('class', 'update-div')
                edit_modal.append(update_div)

                let cancel = document.createElement('div')
                cancel.setAttribute('class', 'cancel')
                cancel.innerText = "Cancel"
                update_div.append(cancel)

                let save = document.createElement('div')
                save.setAttribute('class', 'save')
                save.innerText = "Save"
                update_div.append(save)
                cancel.onclick = () => {
                    modal.remove()
                }
                save.onclick = () => {
                    cont_p.textContent = update_input.value
                    modal.remove()
                }
            }





            let sp2 = document.createElement('div')
            sp2.setAttribute('class', 'del')

            let icon2 = document.createElement('i')
            icon2.setAttribute('class', 'fa-solid fa-trash')
            sp2.append(icon2)
            div_controls.append(sp2)
            sp2.onclick = (e) => {
                e.target.parentNode.parentNode.parentNode.setAttribute('class', 'del-animi')
                setTimeout(() => { e.target.parentNode.parentNode.parentNode.remove() }, 300)
            }
            li.append(div_controls)
            inp_value.value = ""
        }
        else {
            alert('write something!')
        }
    }





















// minify= version

// let ol = document.querySelector("#to-do-body ol"), add = document.getElementById("add"); add.onclick = function () { let e = document.getElementById("input-val"); if ("" !== e.value) { let t = document.createElement("li"); ol.appendChild(t); let a = document.createElement("div"); a.setAttribute("class", "content"); let l = document.createElement("p"); l.textContent = e.value, a.append(l), t.append(a); let n = document.createElement("div"); n.setAttribute("class", "controls"); let d = document.createElement("div"); d.setAttribute("class", "edit"); let i = document.createElement("i"); i.setAttribute("class", "fa-regular fa-pen-to-square"), d.append(i), n.append(d), d.onclick = () => { let e = document.createElement("div"); e.setAttribute("id", "modal"), document.body.append(e); let t = document.createElement("div"); t.setAttribute("class", "edit-modal"), e.appendChild(t); let a = document.createElement("input"); a.setAttribute("class", "edit_input"), t.append(a), a.value = l.textContent; let n = document.createElement("div"); n.setAttribute("class", "update-div"), t.append(n); let d = document.createElement("div"); d.setAttribute("class", "cancel"), d.innerText = "Cancel", n.append(d); let i = document.createElement("div"); i.setAttribute("class", "save"), i.innerText = "Save", n.append(i), d.onclick = () => { e.remove() }, i.onclick = () => { l.textContent = a.value, e.remove() } }; let r = document.createElement("div"); r.setAttribute("class", "del"); let s = document.createElement("i"); s.setAttribute("class", "fa-solid fa-trash"), r.append(s), n.append(r), r.onclick = e => { e.target.parentNode.parentNode.parentNode.setAttribute("class", "del-animi"), setTimeout(() => { e.target.parentNode.parentNode.parentNode.remove() }, 1e3) }, t.append(n), e.value = "" } else alert("write something!") };