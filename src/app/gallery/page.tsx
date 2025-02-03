import { Suspense } from "react"
import { fetchAPODImages } from "@/utils/nasa-api"
import { ImageGallery } from "./ImageGallery"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

function GalleryLoading() {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  )
}

function GalleryError({ error }: { error: Error }) {
  return (
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Failed to load gallery: {error.message}</AlertDescription>
    </Alert>
  )
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Space Image Gallery</h1>
      <Suspense fallback={<GalleryLoading />}>
        <GalleryContent />
      </Suspense>
    </div>
  )
}

async function GalleryContent() {
  try {
    const images = await fetchAPODImages()
    return <ImageGallery images={images} />
  } catch (error) {
    return <GalleryError error={error instanceof Error ? error : new Error("Unknown error")} />
  }
}
