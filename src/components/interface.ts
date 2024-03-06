import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { NumericLiteral } from "typescript";
import { ClosestDeadlines } from "./dashboard/InfoBoard/ClosestDeadlines/ClosestDeadlines";

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
    setPopUpTrigger: Dispatch<SetStateAction<boolean>>;
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
    username: string | null;
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
    lecture = "Lecture", 
    tutorial = "Tutorial", 
    lab = "Lab", 
    seminar = "Seminar", 
    workshop = "Workshop", 
}
export enum ExamType {
    exam = "Exam", 
    practicals = "Practicals", 
    takeHomeExam = "Take Home Exam", 
    quiz = "quiz", 
    presentation = "Presentation"
}
export enum AssignmentType {
    assignment = "Assignment",
    report = "Report", 
    project = "Project"
}

export interface EventItemProps {
    eventType: EventType;
    courseid: string;
    startTime: Date;
    endTime: Date;
    graded: number;
}

export interface EventListProps {
    weekList : Event[];
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
    closestDeadlines: Event[];
  }

export interface ClosestDeadlineProps {
    closestDeadlines : Event[];
}

export interface ScoreVisualizationProps {
    currentWeek : number;
    scores : string[];
}