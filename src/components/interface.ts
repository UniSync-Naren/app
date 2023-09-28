import { ChangeEvent } from "react";
import ContentHeader from "./Dashboard/ContentHeader/ContentHeader";

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

export interface Event {
    eventid: string;
    username: number;
    eventType: EventType;
    courseid: string;
    startTime: Date;
    endTime: Date;
    graded: number;
}

export interface EventItemsList {
    events: Event[]
}



type EventType = ClassType | ExamType | AssignmentType;

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

export interface EventItemProps {
    eventType: EventType;
    courseid: string;
    endTime: Date;
    graded: number;
}

export interface EventListProps {
    weekList : Date[];
}

export interface ContentHeaderProps {
    weekNumber : Number;
    handleRightPress: () => void;
    handleLeftPress: () => void;
}

export interface WeekBarProps {
    weekNumber : Number;
    handleRightPress: () => void;
    handleLeftPress: () => void;
}