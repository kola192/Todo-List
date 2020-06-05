/*

	Tasks to do:
		-use sweet alert if input is empty
		-check if task is exist
		-delete all tasks button
		-finish all tasks button
		-add to local storage

*/


//Variables settings
let inputField =document.querySelector('.add-tasks input'),

	plusSpan = document.querySelector('.add-tasks .plus'),

	tasksContainer = document.querySelector('.tasks-content'),

	tasksCount = document.querySelector('.tasks-count span'),

	tasksCompleted = document.querySelector('.tasks-completed span');

//Focus on tnput field
window.onload = function() {
	inputField.focus();
}

//Adding tasks
plusSpan.onclick = function() {

	if (inputField.value === "") {
		
		//sweet alert

	} else {

		let noTasksMsg = document.querySelector('.no-task-message');

		if (document.body.contains(document.querySelector('.no-task-message'))) {

			noTasksMsg.remove();

		}		

		let mainSpan = document.createElement('span'),

			deleteElement = document.createElement('span'),

			text = document.createTextNode(inputField.value),

			deleteText = document.createTextNode('Delete');

		mainSpan.appendChild(text);

		mainSpan.className = 'task-box';

		deleteElement.appendChild(deleteText);

		deleteElement.className = 'delete';

		mainSpan.appendChild(deleteElement);

		tasksContainer.appendChild(mainSpan);

		inputField.value = '';

		inputField.focus();

		calcTasks();

	}

}


document.addEventListener('click', function(e) {

	if (e.target.className === 'delete') {

		e.target.parentNode.remove();

		if (tasksContainer.childElementCount == 0) {

			createNoTasks();

		}

	}

	if (e.target.classList.contains('task-box')) {

		e.target.classList.toggle('finished');

	}

	calcTasks();

});


//No task message creation function
function createNoTasks() {

	let msgSpan = document.createElement('span'),

		msgText = document.createTextNode('No Task To Do');

	msgSpan.appendChild(msgText);
	
	msgSpan.className = 'no-task-message';

	tasksContainer.appendChild(msgSpan);	

}


//Calculate tasks function
function calcTasks() {

	tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

	tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}
















