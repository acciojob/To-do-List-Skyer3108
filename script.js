//your code here

const btn=document.getElementById('addTodoBtn')

const todo=document.getElementById('newTodoInput')

const list=document.getElementById('todoList')

btn.addEventListener('click',()=>{

 
	// const li=document.createElement('li')
	const li=document.getElementById('li')

	li.textContent=`${todo.value}`

	// list.appendChild(li)

		todo.value=''
	

	

	
	
	
})

