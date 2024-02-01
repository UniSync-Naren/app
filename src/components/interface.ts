import { ChangeEvent } from "react";
import { NumericLiteral } from "typescript";

export interface CourseGridProps {
    courseList: Course[];
}

export interface CourseCardProps {
    name: string;
    code: string;
    handleClick : (code: string) => void;
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
    username: string;
    eventType: EventType;
    courseid: string;
    startTime: Date;
    endTime: Date;
    graded: number;
}

export interface EventItemsList {
    events: Event[]
}

export type EventType = ClassType | ExamType | AssignmentType;

export enum ClassType {
    lecture = "lecture", 
    tutorial = "tutorial", 
    lab = "lab", 
    seminar = "seminar", 
    workshop = "workshop", 
}
export enum ExamType {
    exam = "exam", 
    practicals = "practicals", 
    takeHomeExam = "takeHomeExam", 
    quiz = "quiz", 
    presentation = "presentation"
}
export enum AssignmentType {
    assignment = "assignment",
    report = "report", 
    project = "project"
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

export interface AddEventDetails {
    startTime: string;
    endTime: string;
    date: string;
    eventType: EventType;
    grade: number;
    repeat: boolean;
    repeatType: string;
    repeatFrequency: number;
    repeatEndType: string;
    repeatEndDate: string;
  }

export interface InfoBoardProps {
    weekNum : number;
    weekScores: number[];
    categorizedScores: string[];
  }