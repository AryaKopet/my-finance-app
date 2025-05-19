"use client"
import { Card, CardContent } from "@/components/ui/card"

type Props = {
  title: string
  amount: number
}

export default function ReportCard({ title, amount }: Props) {
  return (
    <Card className="w-full shadow-md">
      <CardContent className="p-4">
        <h3 className="text-sm text-muted-foreground">{title}</h3>
        <p className="text-xl font-semibold">Rp {amount.toLocaleString("id-ID")}</p>
      </CardContent>
    </Card>
  )
}
