const student_a = {
	do_homework: function(question, answer) {
		console.log('作业本');
		console.log('作业：' + question + ' 答案：' + answer);
	}
}

const student_b = {
	get_answer: function(question, callback) {
		if ('1+1=?' == question) {
			callback(question,'2');
		} else {
			callback(question,'不知道');
		}
	}
}

var question = '1+1=?';

student_b.get_answer(question, student_a.do_homework);