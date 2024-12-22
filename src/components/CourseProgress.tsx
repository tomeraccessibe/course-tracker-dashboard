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
  new: [
    { id: 5,
      name: "Web accessibility for healthcare companies and providers: A business case",
      url: "https://junocollege.com/courses/typescript-fundamentals"
    },
    { id: 6,
      name: "The Benefits of Web Accessibility",
      url: "https://junocollege.com/courses/typescript-fundamentals"
    },
  ],
  completed: [
    { id: 1, name: "The ultimate WCAG 2.1 and 2.2 Level AA checklist", progress: 100 },
    { id: 2, name: "What you need to know about WCAG 2.2", progress: 100 },
  ],
  inProgress: [
    { id: 3, name: "Why Web Accessibility is Critical for SEO ", progress: 65 },
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
            <CardDescription>Courses finished</CardDescription>
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
            <CardDescription>Courses taking</CardDescription>
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
                    <span className="line-clamp-2 font-medium">{course.name}</span>
                  </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};