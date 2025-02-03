import parse from "html-react-parser"
import { fetchProjectDetails } from "@/utils/nasa-api"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default async function ProjectDetailsPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const projectData = await fetchProjectDetails(Number.parseInt(params.id))
    const project = projectData.project

    console.log(`project details: `, project)

    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>{project.title || `Project ${project.id}`}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <strong>Status:</strong> {project.status}
            </p>
            <p className="mb-2">
              <strong>Start Date:</strong> {project.startDate || "Not specified"}
            </p>
            <p className="mb-2">
              <strong>End Date:</strong> {project.endDate || "Not specified"}
            </p>
            <div className="mb-4">
              <strong>Description:</strong> {parse(project.description) || "No description available."}
            </div>
            {project.benefits && (
              <div className="mb-4">
                <strong>Benefits:</strong> {parse(project.benefits)}
              </div>
            )}
            {project.leadOrganization && (
              <p>
                <strong>Lead Organization:</strong> {project.leadOrganization.organizationName}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    )
  } catch (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load project details: {error instanceof Error ? error.message : "Unknown error"}
        </AlertDescription>
      </Alert>
    )
  }
}
