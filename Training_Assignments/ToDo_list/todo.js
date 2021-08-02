const inputVal=document.getElementsByClassName('inputVal')[0]
const addTaskBtn=document.getElementsByClassName('btn')[0]
const todoList = document.querySelector(".myUl");
//adding tasks by using Add task button
addTaskBtn.addEventListener('click',()=>{

if(inputVal.value !=0){
    
//JSON.parse() convert text into JS object.
    let localItems=JSON.parse(localStorage.getItem('localItem'));
   
    if(localItems ===null){
        taskList=[]
    }
    else{
        taskList=localItems;
    }
    taskList.push(inputVal.value);
    localStorage.setItem('localItem',JSON.stringify(taskList));
}
showlist()
})
function showlist(){
    let outPut='';
    let taskShow=document.querySelector('.todoListItem');
    let localItems=JSON.parse(localStorage.getItem('localItem'));
    if(localItems ===null){
        taskList=[]
    }
    else{
        taskList=localItems;
    }
    taskList.forEach((data,index)=>{
        outPut += `<div class="todoList"><p class="pText">${data}</p>
        <button class="deleteTask" onClick="deleteItem(${index})">x</button></div>
        `
        const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.teinputvaluetContent = datalist.length; 
  if(datalist.length > 0){ 
    deletebutton.classList.add("active"); 
  }else{
    deletebutton.classList.remove("active");
  }
    });
    taskShow.innerHTML=outPut;
}
showlist()


//deleting the task by clicking on cross
function deleteItem(index){
    let localItems=JSON.parse(localStorage.getItem('localItem'));
    taskList.splice(index,1);
    localStorage.setItem('localItem',JSON.stringify(taskList));
    showlist();
   
    let newLiTag = "";
  datalist.forEach((data, index) => {
    newLiTag += `<li>${data}<span class="icon" onclick="deletedata(${index})">Delete</span></li>`;
  });
  todoList.innerHTML = newLiTag; 
  inputvalue.value = ""; 


}
//clear all task from the list
function clearTask(){
    localStorage.clear();
    showlist();
}
