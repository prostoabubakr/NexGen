import IconCloud from "../iconCloud/iconCloud";

const slugs = [
  "dc",
  "actigraph",
  "ikea",
  "nasa",
  "nike",
  "alibabadotcom",
  "adidas",
  "html5",
  "mcdonalds",
  "bmw",
  "apple",
  "kfc",
  "lamborghini",
  "bugatti",
  "shopify",
  "rollsroyce",

];

export function IconCloudDemo() {
  return (
    <div  className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
