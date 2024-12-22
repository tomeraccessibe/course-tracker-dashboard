import { Check, Clock, Plus } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const courses = {
  completed: [
    { id: 1, name: "Web Development Fundamentals", progress: 100 },
    { id: 2, name: "JavaScript Basics", progress: 100 },
  ],
  inProgress: [
    { id: 3, name: "React Essentials", progress: 65 },
    { id: 4, name: "Advanced CSS", progress: 30 },
  ],
  new: [
    { 
      id: 5, 
      name: "TypeScript Fundamentals",
      url: "https://junocollege.com/courses/typescript-fundamentals"
    },
    { 
      id: 6, 
      name: "Node.js Basics",
      url: "https://junocollege.com/courses/nodejs-basics"
    },
  ],
};

export const CourseProgress = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Course Progress</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Completed Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Completed</span>
            </CardTitle>
            <CardDescription>Courses you've finished</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.completed.map((course) => (
                <div key={course.id} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{course.name}</span>
                  </div>
                  <Progress value={100} className="bg-green-100" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* In Progress Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>In Progress</span>
            </CardTitle>
            <CardDescription>Courses you're taking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.inProgress.map((course) => (
                <div key={course.id} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{course.name}</span>
                    <span className="text-sm text-gray-500">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="bg-blue-100" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* New Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="w-5 h-5 text-purple-500" />
              <span>New Courses</span>
            </CardTitle>
            <CardDescription>Start these courses next</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.new.map((course) => (
                <a
                  key={course.id}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium">{course.name}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};