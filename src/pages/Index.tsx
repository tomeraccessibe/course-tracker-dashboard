import { Layout } from "@/components/Layout";
import { CourseProgress } from "@/components/CourseProgress";
import { RecommendedCourses } from "@/components/RecommendedCourses";

const Index = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Your Learning Dashboard</h1>
        <CourseProgress />
        <RecommendedCourses />
      </div>
    </Layout>
  );
};

export default Index;