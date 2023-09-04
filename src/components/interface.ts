import { ChangeEvent } from "react";

export interface CourseGridProps {
    courseList: Course[];
}

export interface CourseCardProps {
    name: string;
    code: string;
}

export interface AddCardProps {
    handleClick: () => void
}
export interface AddCardPopUpProps {
    trigger: Boolean;
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void; 
    formData: {
        name: string,
        code: string
      }; 
    addCourse: () => void;
}

interface User {
    name: string;
    username: string;
    password: string;
}

interface Semester {
    semesterid: number;
    startDate: number;
    endDate: number;

}

interface Course {
    username: string;
    name: string;
    code: string;
}

interface Event {
    userid: number;
    eventType: EventType;
    startTime: Date;
    endTime: Date;
    graded: number;
}

enum ClassType {
    lecture, 
    tutorial, 
    lab, 
    seminar, 
    workshop, 
}
enum ExamType {
    exam, 
    practicals, 
    takeHomeExam, 
    quiz, 
    presentation
}
enum AssignmentType {
    assignment,
    report, 
    project
}

type EventType = ClassType | ExamType | AssignmentType;