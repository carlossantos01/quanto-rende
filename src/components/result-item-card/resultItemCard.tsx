import { Card, CardContent, CardHeader } from "../ui/card";

export default function ResultItemCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <Card className="w-[280px] md:w-[520px] flex items-center justify-between">
      <CardHeader>
        <h1 className="md:text-2xl text-xs font-bold text-zinc-700">{title}:</h1>
      </CardHeader>
      <CardContent className="flex items-center pt-6 h-full">
          <p className="md:text-4xl text-sm font-extrabold">{value}</p>
      </CardContent>
    </Card>
  );
}
