import React, { useState, useEffect } from 'react';

//import {Prompt } from 'react-router-dom';
import CourseForm from './CourseForm';
import * as courseApi from './api/courseApi.js';
import { toast } from "react-toastify";
export const ManageCoursePage = props => {
    const [errors, setErros] = useState({});
    const [ course, setCourse ] = useState({
        id: null,
        slug:"",
        title:"",
        authorId:null,
        category:""
    });
    useEffect( () =>{
        const slug = props.match.params.slug;
        if (slug) {
            courseApi.getCourseBySlug(slug).then( _course => setCourse(_course));

        }
    }, [props.match.params.slug]);
    function handleChange({target}) {
        setCourse({...course, [target.name]: target.value});
    }
    function formIsValid() {
        const _errors = {};
        if(!course.title) _errors.title = "Titie is Required";
        if(!course.authorId) _errors.authorId = "Titie is Required";
        if(!course.category) _errors.category = "Titie is Required";
        setErros(_errors);
        return Object.keys(_errors).length === 0;

    }
    function handleSubmit(event) {
        event.preventDefault();
        if(!formIsValid()) return;
        courseApi.saveCourse(course);
        toast.success("Course Saved");
    }
    return (
        <>
            <h2> Manage Course</h2>
            <CourseForm 
                errors={errors}
                course={course} 
                onChange={handleChange} 
                onSubmit={handleSubmit}
            />
        </>
    );
};