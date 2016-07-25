
function solve() {
	var Course = {
		init: function(title, presentations) {
            this.title = title;
            this.presentations = presentations;
            this.students = [];
            this.presentations.forEach(function(title){
            validateTitle(title);
          });
            if(!this.presentations.length || this.presentations === undefined){
				      throw new Error("Invalid");
            }

          validateTitle(this.title);

          return this;
		},
		addStudent: function(name) {    
      var student,
        firstName,
        lastName;
        firstName = validateName(name)[0];
        lastName = validateName(name)[1];
      student = {
        firstname:firstName,
        lastname: lastName,
        id: this.students.length + 1
      };
      this.students.push(student);
           
        return student.id;
		},
		getAllStudents: function() {
          
        return this.students.slice(0);
		},
		submitHomework: function(studentID, homeworkID) {
      validateId(this.students,studentID);
      validateId(this.presentations,homeworkID);
		},
		pushExamResults: function(results) {
      var examResults = {
        StudenID:student.id,
        score:results
      };
      validateResult(examResults.StudenID,examResults.score);

      return examResults;
		},
		getTopStudents: function() {
      var topStudents =[];
      topStudents.push(examResults.score);
      topStudents.sort(function(a, b){return b-a});
      topStudents = topStudents.slice(0,10);

      return topStudents;
     }
    
	};
    function validateTitle(title){
      var regex1 = /^[ ][a-z]+/gi,
          regex2 = /[a-z]+[ ]$/gi;
      if (!title.length) {
        throw new Error('Invalid course title');
      }
      if(regex1.test(title) || regex2.test(title)){
        throw new Error('Invalid course title');
      }
      if (/[\s]{2,}/.test(title)) {
        throw new Error('Not a valid title');
      }
    }
    function validateName(value) {
      var pattern = /^[A-Z][a-z]*\s[A-Z]{1}[a-z]*$/g,
          result = pattern.test(value),
          splitName;
      if(typeof value !== 'string' || !result){
        throw new Error('Invalid name');
      }
      splitName = value.split(' ');
    
          return splitName;
      }
    function validateId(objects,id){
      if (objects.length < id || id <= 0) {
          throw new Error('Invalid studentID');
         }
     }
      function validateResult(id,score){
        if (isNaN(score) || score === '') {
          
          throw new Error('Invalid score');
        }
      }
	return Course;
}


module.exports = solve;