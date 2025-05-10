import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Skeleton className="h-8 w-32" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Skeleton className="h-6 w-24 mb-4" />
              <Skeleton className="h-12 w-3/4 mb-6" />

              <div className="flex flex-wrap gap-4 mb-6">
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-10 w-32" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-4 w-32" />
              </div>

              <Skeleton className="h-24 w-full mb-8" />

              <div className="w-full">
                <Skeleton className="h-10 w-64 mb-6" />
                <Card className="bg-background/60 backdrop-blur-sm border-orange-500/20 rounded-xl">
                  <CardHeader>
                    <Skeleton className="h-6 w-40 mb-2" />
                    <Skeleton className="h-4 w-60" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index}>
                          <Skeleton className="h-5 w-32 mb-2" />
                          <Skeleton className="h-4 w-full" />
                          {index === 3 && (
                            <div className="mt-2 space-y-2">
                              <Skeleton className="h-4 w-3/4" />
                              <Skeleton className="h-4 w-2/3" />
                              <Skeleton className="h-4 w-4/5" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card className="bg-background/60 backdrop-blur-sm border-orange-500/20 rounded-xl">
                <CardHeader>
                  <Skeleton className="h-6 w-40 mb-2" />
                  <Skeleton className="h-4 w-60" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="p-4 rounded-lg border border-orange-500/20">
                      <div className="flex justify-between items-start mb-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                      <Skeleton className="h-4 w-full mb-4" />
                      <Skeleton className="h-9 w-full" />
                    </div>
                  ))}

                  <div className="flex items-start mt-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <Skeleton className="h-5 w-5 mr-2 flex-shrink-0" />
                    <div className="w-full">
                      <Skeleton className="h-5 w-40 mb-2" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6 mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
