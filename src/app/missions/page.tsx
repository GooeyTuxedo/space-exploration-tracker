import { fetchNasaData } from "@/utils/nasa-api"
import { MissionsList } from "./MissionsList"
import { Suspense } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

interface Project {
  projectId: number
  lastUpdated: string
}

async function getRecentProjects() {
  const currentYear = new Date().getFullYear()
  const response = await fetchNasaData("techport", "/api/projects", { updatedSince: `${currentYear}-01-01` })

  const projects: Project[] = response.projects

  // Sort projects by last updated date (most recent first)
  return projects.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
}

function MissionsLoading() {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  )
}

function MissionsError({ error }: { error: Error }) {
  return (
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Failed to load missions: {error.message}</AlertDescription>
    </Alert>
  )
}

export default async function MissionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recently Updated NASA Projects</h1>
      <Suspense fallback={<MissionsLoading />}>
        <MissionsContent />
      </Suspense>
    </div>
  )
}

async function MissionsContent() {
  try {
    const projects = await getRecentProjects()
    return <MissionsList projects={projects} />
  } catch (error) {
    return <MissionsError error={error instanceof Error ? error : new Error("Unknown error")} />
  }
}

