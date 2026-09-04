interface Props {
  params: Promise<{ cars: string }>;
}

const page = async ({ params }: Props) => {
  const { cars } = await params;
  return <div className="pt-20">{cars}</div>;
};

export default page;
