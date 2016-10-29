const student_a = {
	do_homework: function(question, answer) {
		console.log('作业本');
		console.log('作业：' + question + ' 答案：' + answer);
	}
}

const student_b = {
	get_answer: function(question) {
		if ('1+1=?' == question) {
			return '2';
		} else {
			return NaN;
		}
	}
}

var question = '1+1=?';
var answer = student_b.get_answer(question);
student_a.do_homework(question, answer)