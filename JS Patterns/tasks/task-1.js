/* Task Description */
/* 
* Create a module for a Telerik Academy course
  * The course has a title and presentations
    * Each presentation also has a title
    * There is a homework for each presentation
  * There is a set of students listed for the course
    * Each student has firstname, lastname and an ID
      * IDs must be unique integer numbers which are at least 1
  * Each student can submit a homework for each presentation in the course
  * Create method init
    * Accepts a string - course title
    * Accepts an array of strings - presentation titles
    * Throws if there is an invalid title
      * Titles do not start or end with spaces
      * Titles do not have consecutive spaces
      * Titles have at least one character
    * Throws if there are no presentations
  * Create method addStudent which lists a student for the course
    * Accepts a string in the format 'Firstname Lastname'
    * Throws if any of the names are not valid
      * Names start with an upper case letter
      * All other symbols in the name (if any) are lowercase letters
    * Generates a unique student ID and returns it
  * Create method getAllStudents that returns an array of students in the format:
    * {firstname: 'string', lastname: 'string', id: StudentID}
  * Create method submitHomework
    * Accepts studentID and homeworkID
      * homeworkID 1 is for the first presentation
      * homeworkID 2 is for the second one
      * ...
    * Throws if any of the IDs are invalid
  * Create method pushExamResults
    * Accepts an array of items in the format {StudentID: ..., Score: ...}
      * StudentIDs which are not listed get 0 points
    * Throw if there is an invalid StudentID
    * Throw if same StudentID is given more than once ( he tried to cheat (: )
    * Throw if Score is not a number
  * Create method getTopStudents which returns an array of the top 10 performing students
    * Array must be sorted from best to worst
    * If there are less than 10, return them all
    * The final score that is used to calculate the top performing students is done as follows:
      * 75% of the exam result
      * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
*/

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