import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const recommendedCourses = [
  {
    id: 1,
    name: "Advanced React Patterns",
    description: "Learn advanced React patterns and best practices",
    level: "Intermediate",
    url: "https://junocollege.com/courses/advanced-react",
  },
  {
    id: 2,
    name: "Full Stack Development",
    description: "Build full-stack applications with modern technologies",
    level: "Advanced",
    url: "https://junocollege.com/courses/full-stack",
  },
  {
    id: 3,
    name: "UI/UX Fundamentals",
    description: "Master the basics of user interface design",
    level: "Beginner",
    url: "https://junocollege.com/courses/ui-ux",
  },
];

export const RecommendedCourses = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Recommended Courses</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendedCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Level: {course.level}</span>
                  <Button variant="outline" size="sm" asChild>
                    <a href={course.url} target="_blank" rel="noopener noreferrer">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};