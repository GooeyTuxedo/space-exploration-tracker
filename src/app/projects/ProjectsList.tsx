import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface Project {
  projectId: number
  lastUpdated: string
}

interface ProjectsListProps {
  projects: Project[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.projectId}>
          <CardHeader>
            <CardTitle>Project ID: {project.projectId}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              Last Updated: {new Date(project.lastUpdated).toLocaleDateString()}
            </p>
            <Link href={`/projects/${project.projectId}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

