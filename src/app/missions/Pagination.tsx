"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <Button variant="outline" disabled={currentPage <= 1} asChild>
        <Link href={`/missions?page=${currentPage - 1}`}>
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Link>
      </Button>
      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>
      <Button variant="outline" disabled={currentPage >= totalPages} asChild>
        <Link href={`/missions?page=${currentPage + 1}`}>
          Next
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
