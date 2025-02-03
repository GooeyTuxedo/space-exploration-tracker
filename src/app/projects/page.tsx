import { fetchAllProjects } from "@/utils/nasa-api"
import { ProjectsList } from "./ProjectsList"
import { Suspense } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import { Pagination } from "./Pagination"

interface Project {
  projectId: number
  lastUpdated: string
}

const PAGE_SIZE = 12

async function getPaginatedProjects(page: number) {
  const allProjects: Project[] = await fetchAllProjects()

  // Sort projects by last updated date (most recent first)
  const sortedProjects = allProjects.sort(
    (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime(),
  )

  const startIndex = (page - 1) * PAGE_SIZE
  const paginatedProjects = sortedProjects.slice(startIndex, startIndex + PAGE_SIZE)

  return {
    projects: paginatedProjects,
    totalCount: allProjects.length,
    page,
    pageSize: PAGE_SIZE,
  }
}

function ProjectsLoading() {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  )
}

function ProjectsError({ error }: { error: Error }) {
  return (
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Failed to load projects: {error.message}</AlertDescription>
    </Alert>
  )
}

type Props = {
  searchParams: Promise<{ page?: string | undefined }>
}

export default async function ProjectsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = page ? Number.parseInt(page) : 1

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recent NASA Projects</h1>
      <Suspense fallback={<ProjectsLoading />}>
        <ProjectsContent page={currentPage} />
      </Suspense>
    </div>
  )
}

async function ProjectsContent({ page }: { page: number }) {
  try {
    const { projects, totalCount, pageSize } = await getPaginatedProjects(page)
    const totalPages = Math.ceil(totalCount / pageSize)

    return (
      <>
        <ProjectsList projects={projects} />
        <Pagination currentPage={page} totalPages={totalPages} />
      </>
    )
  } catch (error) {
    return <ProjectsError error={error instanceof Error ? error : new Error("Unknown error")} />
  }
}
