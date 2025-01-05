import { Card, CardContent } from "../ui/card";

export default function ResultItemCard({ title, value }: {title: string, value: string}) {
    return (
        <Card className="w-[280px] h-[110px] flex flex-col justify-center items-center">
            <CardContent>
                <div className="w-full h-full text-center">
                    <h3 className="text-xl font-normal ">{title}</h3>
                    <p className="text-2xl font-extrabold ">{value}</p>
                </div>
            </CardContent>
        </Card>
    );
}