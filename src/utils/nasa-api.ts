export async function fetchNasaData(subdomain: string = "api", endpoint: string, params: Record<string, string> = {}) {
  const NASA_API_BASE_URL = `https://${subdomain}.nasa.gov`
  const url = new URL(`${NASA_API_BASE_URL}${endpoint}`)
  url.searchParams.append("api_key", process.env.NASA_API_KEY || "")

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value)
  }

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new Error(`NASA API request failed: ${response.statusText}`)
  }

  return response.json()
}

export async function fetchProjectDetails(projectId: number) {
  return fetchNasaData("techport", `/api/projects/${projectId}`)
}

export async function fetchAllProjects() {
  const currentYear = new Date().getFullYear()
  const formattedDate = `${currentYear}-01-01`

  const response = await fetchNasaData('techport', '/api/projects', { 
    updatedSince: formattedDate
  });

  return response.projects;
}
