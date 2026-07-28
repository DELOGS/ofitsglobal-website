import Image from "next/image";
import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";

type Props = {
  image: string;
  title: string;
  description: string;
  status: string;
};

export default function ProductCard({
  image,
  title,
  description,
  status,
}: Props) {
  return (
    <Card>

      <Image
        src={image}
        alt={title}
        width={700}
        height={450}
        className="rounded-xl mb-6"
      />

      <Badge>
        {status}
      </Badge>

      <h3 className="text-2xl font-bold mt-5">
        {title}
      </h3>

      <p className="text-slate-600 mt-4 leading-7">
        {description}
      </p>

      <Button className="mt-8">
        Learn More
      </Button>

    </Card>
  );
}
