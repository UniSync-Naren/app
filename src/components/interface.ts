interface User {
    userid: number;
    name: string;
    username: string;
    password: string;
}

interface Course {
    courseid: number;
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