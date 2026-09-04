interface Props {
  params: Promise<{ slug: string[] }>;
}

const CarDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  return <div className="pt-30">Car Detail page for {slug}</div>;
};

export default CarDetailPage;
