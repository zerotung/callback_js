const student_a = {
	do_homework: function(question, answer) {
		console.log('a同学的作业本');
		console.log('作业：' + question + ' 答案：' + answer);
	}
}

const student_c = {
	do_homework: function(question, answer) {
		console.log('c同学的作业本');
		console.log('作业：' + question + ' 我算得了答案：' + answer);
	}
}

const student_b = {
	get_answer: function(question, student) {
		if ('1+1=?' == question) {
			student.do_homework(question,'2');
		} else {
			student.do_homework(question,'不知道');
		}
	}
}

var question = '1+1=?';

student_b.get_answer(question, student_a);
student_b.get_answer(question, student_c);