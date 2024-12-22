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
    name: "How to Make Your Website Accessible",
    description: "It is critical to ensure that all visitors can fully access your website, regardless of ability." +
        "But how can you make that happen? What standards do you need to adhere to? And, what tools can you use to achieve this goal?" +
        "This guide has you covered.",
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
                  <span className="text-sm text-gray-500"></span>
                  <Button variant="outline" size="sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
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