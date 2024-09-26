export default function Info() {
  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Why Shop with Us?</h2>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Wide range of products available</li>
        <li>Secure payment and fast delivery</li>
        <li>Trusted by millions of customers worldwide</li>
        <li>24/7 customer support</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-4 text-center text-green-600">Promotional Offers!</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Get <strong>20% off</strong> on your first order</li>
        <li><strong>Free shipping</strong> on orders over $50</li>
        <li>Buy one, get one <strong>free</strong> on select items</li>
      </ul>
    </div>
  );

}
