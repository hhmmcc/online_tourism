
let CourseService = require("./CourseService");
class IndexService {
    constructor() { }
    getData(callback) {
        let courseService = new CourseService();

        courseService.getCourses(function (courses) {
            callback(courses);
        });
    }
}
module.exports = IndexService;