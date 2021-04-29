import React, {useState, useEffect} from "react";
import { getCourses } from "C:/Users/dell/Documents/projects/react/newreact/reactpro/src/api/courseApi.js";
import CourseList from "C:/Users/dell/Documents/projects/react/newreact/reactpro/src/CourseList.js"
import { Link } from 'react-router-dom';

export function CoursesPage() {
    const [ courses, setCourses  ] = useState([]);
    useEffect( () =>{
        getCourses().then(_courses => setCourses(_courses));
    }, []);
    return <><h2> Courses</h2>
    <Link className="btn btn-primary" to="/course"> Add Something?</Link> 
    <CourseList courses = {courses} />
    </>
    }