type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>
    Slug: {params.slug} <span>Andy</span>
    <h1>Welcome to my Github Repository</h1>
  </h1>;
}
