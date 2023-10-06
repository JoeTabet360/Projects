


document.querySelector(".createList").addEventListener("click", create)

let allList = document.querySelectorAll(".list-name")


function create(e) {
    e.preventDefault()

    let List_input = document.querySelector(".list").value
    if (List_input != "") {

        let newLi = document.createElement("li")
        newLi.classList.add("list-name")
        newLi.innerText = List_input
        document.querySelector(".task-list").append(newLi)

        allList = document.querySelectorAll("list-name")

        newTodo = addlist(document.querySelector(".list").value)

        for (todoList of document.querySelectorAll(".todo-list")) {
            todoList.style.display = "none"
        }
        newTodo.style.display = "block"


        document.querySelector(".list").value = ""

    } else {
        alert("Your didn't provied a name!")
    }

}

function addlist(input) {
    //body
    let body = document.querySelector("body")

    //list
    let todo_list = document.createElement("div")
    todo_list.classList.toggle("todo-list", true)



    // todo HEADER

    let todo_header = document.createElement("div")
    todo_header.classList.toggle("todo-header", true)

    let tite_h2 = document.createElement("h2")
    tite_h2.classList.toggle("list-title", true)
    tite_h2.innerText = input


    let tasksleft_p = document.createElement("p")
    tasksleft_p.classList.toggle("task-count", true)
    tasksleft_p.innerText = "0 tasks remaining"

    todo_header.append(tite_h2)
    todo_header.append(tasksleft_p)


    //todo_body
    let todo_body = document.createElement("div")
    todo_body.classList.toggle("todo-body", true)

    let tasks = document.createElement("div")
    tasks.classList.toggle("tasks", true)





    let task_creat = document.createElement("div")
    task_creat.classList.toggle("new-task-creator", true)

    //form to add div
    let form = document.createElement("form")
    let inputnew = document.createElement("input")
    let but1 = document.createElement("button")
    but1.classList.toggle("btn", true)
    but1.classList.toggle("create", true)
    but1.classList.toggle("creatTask", true)

    but1.innerText = "+"

    inputnew.type = "text"
    inputnew.placeholder = "new task name"
    inputnew.classList.toggle("new", true)
    inputnew.classList.toggle("task", true)

    form.append(inputnew)
    form.append(but1)

    task_creat.append(form)


    //delet div

    let delete_buttons = document.createElement("div")
    delete_buttons.classList.toggle("delete-stuff", true)

    delete_buttons.style.marginTop = "5rem"
    delete_buttons.style.fontSize = "2rem"
    let but2 = document.createElement("button")
    but2.classList.toggle("btn", true)
    but2.classList.toggle("delete", true)
    but2.classList.toggle("clearlist", true)
    but2.innerText = "Clear completed tasks"




    let but3 = document.createElement("button")
    but3.classList.toggle("btn", true)
    but3.classList.toggle("delete", true)
    but3.classList.toggle("deletList", true)
    but3.innerText = "Delete list"


    delete_buttons.append(but2)
    delete_buttons.append(but3)

    //




    todo_body.append(tasks)
    todo_body.append(task_creat)
    todo_body.append(delete_buttons)

    //addend  todo HEADER  && todo_body  ==> list
    todo_list.append(todo_header)
    todo_list.append(todo_body)
    //

    body.append(todo_list)

    return todo_list


}



let all_taskes = document.querySelector(".task-list")

all_taskes.addEventListener("click", check)


function check() {

    let taskTitle = document.querySelectorAll(".list-title")

    allList = document.querySelectorAll(".list-name")
    for (list of allList) {
        list.addEventListener("click", whichlist)


        function whichlist() {


            for (list of allList) {
                list.classList.toggle("active-list", false)

                for (title of taskTitle) {

                    if (this.innerText == title.innerText) {

                        for (todoList of document.querySelectorAll(".todo-list")) {
                            todoList.style.display = "none"
                        }

                        title.parentNode.parentNode.style.display = "block"




                    }

                }




            }


            this.classList.toggle("active-list", true)




        }

    }
}




let all_add_tasks = document.querySelectorAll(".creatTask")
document.querySelector("body").addEventListener("click", addTask)
let task_lable = 0
function addTask() {

    all_add_tasks = document.querySelectorAll(".creatTask")

    for (add_task of all_add_tasks) {
        add_task.addEventListener("click", function (e) {
            e.preventDefault()

            if (this.previousElementSibling.value != "") {

                let todo_val = this.previousElementSibling.value

                let div_tasks = this.parentNode.parentNode.previousElementSibling

                //new task

                let div_task = document.createElement("div")
                div_task.classList.toggle("task")

                div_tasks.append(div_task)

                let input_checkbox = document.createElement("input")
                input_checkbox.type = "checkbox";
                input_checkbox.setAttribute("id", `${task_lable}`)


                div_task.append(input_checkbox)

                let lable_input_span = document.createElement("label")


                lable_input_span.htmlFor = `${task_lable}`

                div_task.append(lable_input_span)

                let span_input = document.createElement("span")
                span_input.classList.toggle("custom-checkbox", true)


                lable_input_span.append(span_input)
                const text = document.createTextNode(`${todo_val}`);

                lable_input_span.appendChild(text)
                this.previousElementSibling.value = ""

                console.log(div_task)

                task_lable = task_lable + 1
            }

            //new task










        })
    }

}


let all_delet_lists_bottons = document.querySelectorAll(".deletList")
document.querySelector("body").addEventListener("click", deletList)

function deletList() {
    all_delet_lists_bottons = document.querySelectorAll(".deletList")
    for (delet_list of all_delet_lists_bottons) {
        delet_list.addEventListener("click", function (e) {

            let list = this.parentNode.parentNode.parentNode

            let list_name = this.parentNode.parentNode.previousElementSibling.children[0].innerText

            let all_lists_name = document.querySelectorAll(".list-name")

            for (main_list_name of all_lists_name) {

                if (main_list_name.innerText == list_name) {
                    main_list_name.remove()
                }
            }

            list.remove()
            try {
                document.querySelector(".todo-list").style.display = "block"
            } catch { }

        })
    }
}


let all_lists = document.querySelectorAll(".todo-list")
document.querySelector("body").addEventListener("click", check_remaining_tasks)


function check_remaining_tasks() {
    all_lists = document.querySelectorAll(".todo-list")

    for (list of all_lists) {
        let displayVal = window.getComputedStyle(list).display
        if (displayVal == "block") {
            let allTasks = list.children[1].children[0].children
            let remain_tasks = allTasks.length

            for (task of allTasks) {
                let check_box = task.children[0]
                if (check_box.checked == false) {
                    //remain_tasks = remain_tasks + 1

                    list.children[0].children[1].innerText = `${remain_tasks} tasks remaining`
                }
                else {
                    remain_tasks = remain_tasks - 1

                    list.children[0].children[1].innerText = `${remain_tasks} tasks remaining`

                }

            }
        }

    }

}


let all_clear_list_bottons = document.querySelectorAll(".clearlist")
document.querySelector("body").addEventListener("click", clearList)

function clearList() {
    all_clear_list_bottons = document.querySelectorAll(".clearlist")
    for (clear_list of all_clear_list_bottons) {
        clear_list.addEventListener("click", function (e) {

            all_lists = document.querySelectorAll(".todo-list")

            for (list of all_lists) {
                let displayVal = window.getComputedStyle(list).display
                if (displayVal == "block") {


                    let allTasks = list.children[1].children[0].children


                    for (task of allTasks) {

                        let check_box = task.children[0]
                        if (check_box.checked == true) {

                            check_box.parentNode.remove()
                        }

                    }

                }
            }



        })
    }
}
