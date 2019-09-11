let CoursesModel = require("../model/CoursesModel");
let ChaptersModel = require("../model/ChaptersModel");

class CourseService {
    constructor() { }
    getCourses(callback) {

        let coursesModel = new CoursesModel();
        let chaptersModel = new ChaptersModel();

        coursesModel.getAllCourses(function (courses) {
            for (let i = 0; i < courses.length; i++) {
                let courses_id = courses[i].id;
                chaptersModel.getAllChapters(courses_id, function (chapters) {
                    courses[i].chapters = chapters;
                    if (i == courses.length - 1) {
                        callback(courses);
                    }
                })
            }
        })
    }
}
module.exports = CourseService;