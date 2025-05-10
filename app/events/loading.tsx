import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Skeleton className="h-12 w-3/4 max-w-2xl mb-6" />
            <Skeleton className="h-6 w-2/3 max-w-xl mb-8" />
            <div className="w-full max-w-4xl bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-orange-500/20">
              <div className="flex flex-col md:flex-row gap-4">
                <Skeleton className="h-10 flex-grow" />
                <div className="flex flex-col sm:flex-row gap-4">
                  <Skeleton className="h-10 w-full sm:w-[180px]" />
                  <Skeleton className="h-10 w-full sm:w-[180px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <Skeleton className="h-10 w-[300px]" />
            <Skeleton className="h-10 w-[180px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-background/60 backdrop-blur-sm h-full flex flex-col rounded-xl border-orange-500/20"
              >
                <Skeleton className="h-48 w-full" />
                <CardHeader className="pb-2">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent className="pb-2">
                  <Skeleton className="h-6 w-20" />
                </CardContent>
                <CardFooter className="flex justify-between mt-auto">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-9 w-24 rounded-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
