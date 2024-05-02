//your code here

const btn=document.getElementById('addTodoBtn')

const todo=document.getElementById('newTodoInput')

const list=document.getElementById('todoList')

btn.addEventListener('click',()=>{


	let lis=document.createElement('li')

	lis.innerHTML=`

	<p>${todo.value}</p>
	
	`

		todo.value=''
	list.appendChild(lis)

	

	
	
	
})

