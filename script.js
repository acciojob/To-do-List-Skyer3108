//your code here

const btn=document.getElementById('addTodoBtn')

const todo=document.getElementById('newTodoInput')

const list=document.getElementById('todoList')

btn.addEventListener('click',()=>{


	const lis=document.createElement('li')

	lis.textContent=`${todo.value}`

		todo.value=''
	list.appendChild(lis)

	

	
	
	
})

