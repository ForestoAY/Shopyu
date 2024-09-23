import Link from "next/link";

export default function FeaturedProducts() {
  const products = [
    {
      name: "cunabula caelestis volaticus",
      slug: "suspendo-tenetur",
      description:
        "Ciminatio velociter spero voro demoror vetus voluptas alter copia. Timor coniecto damno comptus usus crinis crebro tametsi. Summisse decumbo virtus calculus vomito utroque bibo aufero aro.\nAdinventitias apto aestas annus deduco capio vehemens. Delibero deporto placeat voluptatibus aeternus deficio. Vis super voluptate autem amicitia capillus vinitor suasoria sufficio deduco.",
      excerpt: "Thorax saepe deficio adimpleo conitor.",
      price: 5249399,
      tags: ["trucido", "talio", "arceo"],
      thumbnail: "https://loremflickr.com/400/400/food",
      images: [
        "https://loremflickr.com/400/400/abstract",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/transport",
        "https://loremflickr.com/400/400/food",
      ],
      createdAt: "2023-12-15T15:32:06.350Z",
      updatedAt: "2024-03-18T14:47:12.101Z",
    },
    {
      name: "vaco decet",
      slug: "umquam-defendo-vorax",
      description:
        "Avarus theatrum deserunt cavus ultio. Quae curatio abeo. Distinctio apud desino adhuc trado.\nAspernatur aestas comes modi. Asper caput rerum absque alii molestiae vestrum usitas sodalitas. Assentator calculus illo.\nMaxime tot depraedor textus auctus. Acidus crapula quae verumtamen delicate absum vulgo alioqui votum sonitus. Voro utor maxime tamquam repudiandae creptio atrocitas crebro.",
      excerpt: "Absorbeo sursum tres excepturi cupiditas altus.",
      price: 7675600,
      tags: ["cimentarius", "adaugeo", "vacuus"],
      thumbnail: "https://loremflickr.com/400/400/business",
      images: [
        "https://loremflickr.com/400/400/transport",
        "https://loremflickr.com/400/400/business",
        "https://loremflickr.com/400/400/animals",
        "https://loremflickr.com/400/400/business",
        "https://loremflickr.com/400/400/cats",
      ],
      createdAt: "2024-01-22T13:15:24.887Z",
      updatedAt: "2024-01-25T18:19:54.047Z",
    },
    {
      name: "capitulus conventus",
      slug: "omnis-arbor-tego",
      description:
        "Theologus vindico supplanto. Sed vix verto vulgus xiphias. Civitas dolore angelus patruus comptus attero.\nConfido deputo quos vitiosus sustineo taceo perspiciatis cuius decumbo argentum. Vinum aestivus hic. Catena velit venustas avaritia.\nAduro tabgo tabula iste sophismata delinquo demonstro amor quasi. Vulgivagus beneficium necessitatibus super tredecim. Sunt cui calculus nemo adamo contigo comptus talio.",
      excerpt: "Cruciamentum contabesco subito aggero.",
      price: 3768019,
      tags: ["conforto", "vobis", "rerum"],
      thumbnail: "https://loremflickr.com/400/400/food",
      images: [
        "https://loremflickr.com/400/400/nature",
        "https://loremflickr.com/400/400/city",
        "https://loremflickr.com/400/400/technics",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/sports",
      ],
      createdAt: "2024-08-09T03:01:50.432Z",
      updatedAt: "2023-05-17T16:42:21.208Z",
    },
    {
      name: "capillus mollitia",
      slug: "voro-cupio-corroboro",
      description:
        "Provident deinde corona amplitudo summisse cur avaritia. Amita cunctatio alii victus cruentus. Adstringo comparo adstringo solutio sufficio adnuo rem trado curis comes.\nAeneus aggredior illo apto voluntarius spoliatio ratione certus amet. Uberrime consequuntur calco stella sum supellex utique. Creta deleniti animus amplexus.",
      excerpt: "Voluptate tricesimus denego currus.",
      price: 3225477,
      tags: ["copia", "sursum", "omnis"],
      thumbnail: "https://loremflickr.com/400/400/cats",
      images: [
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/cats",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/cats",
        "https://loremflickr.com/400/400/food",
      ],
      createdAt: "2024-03-06T12:32:37.477Z",
      updatedAt: "2024-06-10T19:39:46.154Z",
    },
    {
      name: "aranea illum cubitum",
      slug: "vinum-astrum",
      description:
        "Aliquam sol aurum solio. Totam itaque audax cernuus trans spero conforto aut. Conturbo uterque coerceo quae defendo sortitus.\nCustodia baiulus urbanus uredo cernuus vulariter defero teres. Ago vulgaris sperno concido quidem usus ustulo. Denuo comminor temptatio.\nVelut valeo casus. Supra at coniecto ultio vigor vulticulus. Cognatus culpa ventosus curtus arma cunae tamquam advenio candidus facere.",
      excerpt: "Cultellus defessus teres depopulo aperio.",
      price: 7706552,
      tags: ["timor", "tantum", "desipio"],
      thumbnail: "https://loremflickr.com/400/400/cats",
      images: [
        "https://loremflickr.com/400/400/city",
        "https://loremflickr.com/400/400/food",
        "https://loremflickr.com/400/400/sports",
        "https://loremflickr.com/400/400/transport",
        "https://loremflickr.com/400/400/abstract",
      ],
      createdAt: "2024-11-15T09:54:08.287Z",
      updatedAt: "2024-02-10T18:53:21.288Z",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product, i) => (
          <div key={i} className="card card-compact bg-base-100 w-64 shadow-xl">
            <figure>
              <img src={product.thumbnail} alt={product.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6 mb-4">
        <Link href="/products">
          <p className="btn btn-primary">See All Products</p>
        </Link>
      </div>
    </>
  );
}
