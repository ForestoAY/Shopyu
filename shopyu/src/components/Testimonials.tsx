export default function Testimonials() {
  return (
    <div className="max-w-3xl mx-auto bg-gray-200 p-6 mb-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">What Our Customers Say</h2>
      <div className="space-y-4">
        <blockquote className="border-l-4 border-orange-500 pl-4 italic">
          "Shopyu has the best selection of products. My go-to shop for everything!" 
          <cite className="block mt-2 font-bold">— John Doe</cite>
        </blockquote>
        <blockquote className="border-l-4 border-orange-500 pl-4 italic">
          "Fast delivery and excellent customer service. Highly recommend!"
          <cite className="block mt-2 font-bold">— Foobar</cite>
        </blockquote>
        <blockquote className="border-l-4 border-orange-500 pl-4 italic">
          "I love shopping here! Great deals and quality products."
          <cite className="block mt-2 font-bold">— Okat</cite>
        </blockquote>
      </div>
    </div>
  );
}
