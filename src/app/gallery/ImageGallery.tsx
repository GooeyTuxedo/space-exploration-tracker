"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface APODImage {
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

interface ImageGalleryProps {
  images: APODImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<APODImage | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.date} className="cursor-pointer" onClick={() => setSelectedImage(image)}>
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.title}
              width={400}
              height={300}
              className="object-cover w-full h-64 rounded-lg"
            />
            <h3 className="mt-2 text-lg font-semibold">{image.title}</h3>
            <p className="text-sm text-gray-500">{image.date}</p>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        {selectedImage && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription>{selectedImage.date}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <Image
                src={selectedImage.url || "/placeholder.svg"}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-4">{selectedImage.explanation}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

