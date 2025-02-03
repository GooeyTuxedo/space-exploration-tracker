import { fetchProjectDetails } from "@/utils/nasa-api"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default async function ProjectDetailsPage({ params }: { params: { id: string } }) {
  try {
    const projectData = await fetchProjectDetails(Number.parseInt(params.id))
    const project = projectData.project

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
            <p className="mb-4">
              <strong>Description:</strong> {project.description || "No description available."}
            </p>
            {project.benefits && (
              <p className="mb-4">
                <strong>Benefits:</strong> {project.benefits}
              </p>
            )}
            {project.leadOrganization && (
              <p>
                <strong>Lead Organization:</strong> {project.leadOrganization}
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
