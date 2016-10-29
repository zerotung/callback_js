const student_a = {
	do_homework: function(question) {
		console.log('作业本');
		if ('1+1=?' == question) {
			console.log('作业：' + question + ' 答案：' + '2');
		} else {
			console.log('作业：' + question + ' 答案：' + '不知道');
		}
	}
}

student_a.do_homework('1+1=?');