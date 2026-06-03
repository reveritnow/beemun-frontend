import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const items = [
  { name: 'Cold Pressed Coconut Oil', maker: 'Earth Roots', variant: '250ml', price: 349 },
  { name: 'Rose Face Balm', maker: 'Bee Botanics', variant: '30g', price: 599 }
]

export default function CheckoutDemoPage() {
  const subtotal = items.reduce((total, item) => total + item.price, 0)

  return (
    <main>
      <SiteHeader />

      <section className="section-wrap cart-layout">
        <div>
          <div className="breadcrumb">Home → Cart → Checkout</div>
          <p className="section-eyebrow">Secure checkout</p>
          <h1>Checkout</h1>
          <p className="section-copy">Checkout is designed for guest and logged-in customers. Before payment, BEEMUN validates stock, price, seller approval, and ZPS status again.</p>

          <section className="product-info-section">
            <h2>Contact information</h2>
            <div className="three-grid">
              <div className="info-card"><h3>Full name</h3><p>Rishabh Singh</p></div>
              <div className="info-card"><h3>Email</h3><p>customer@example.com</p></div>
              <div className="info-card"><h3>Phone</h3><p>Required for delivery updates.</p></div>
            </div>
          </section>

          <section className="product-info-section">
            <h2>Shipping address</h2>
            <div className="three-grid">
              <div className="info-card"><h3>Address</h3><p>House / apartment, street, locality.</p></div>
              <div className="info-card"><h3>City & State</h3><p>City, state, and pincode are required.</p></div>
              <div className="info-card"><h3>Delivery note</h3><p>Optional instructions for courier delivery.</p></div>
            </div>
          </section>

          <section className="product-info-section">
            <h2>Review items</h2>
            {items.map((item) => (
              <div className="cart-item" key={item.name}>
                <div>
                  <span className="badge">ZPS 100</span>
                  <strong>{item.name}</strong>
                  <p>{item.maker} · {item.variant}</p>
                </div>
                <span>₹{item.price}</span>
              </div>
            ))}
          </section>

          <section className="product-info-section">
            <h2>Payment</h2>
            <p>In the real checkout, this section will open Razorpay only after backend validation and pending order creation.</p>
            <div className="three-grid">
              <div className="info-card"><h3>Backend verified</h3><p>Frontend payment success alone is not trusted.</p></div>
              <div className="info-card"><h3>Seller order split</h3><p>SellerOrders are created only after verified payment.</p></div>
              <div className="info-card"><h3>Order updates</h3><p>Tracking appears inside the BEEMUN order page after sellers ship.</p></div>
            </div>
          </section>
        </div>

        <aside className="cart-summary">
          <h3>Order Summary</h3>
          <p>Items: {items.length}</p>
          <p>Subtotal: ₹{subtotal}</p>
          <p>Shipping: shown before payment</p>
          <hr />
          <h3>Total: ₹{subtotal}</h3>
          <p>Every item is checked again before payment. Products may ship from different makers, but BEEMUN keeps the order experience together.</p>
          <a className="btn-primary" href="#payment-demo">Pay with Razorpay</a>
          <p className="muted">Demo only. Payment integration will be added later.</p>
        </aside>
      </section>

      <section className="featured-section">
        <div className="section-wrap">
          <p className="section-eyebrow">After checkout</p>
          <h2 className="section-title">What happens next</h2>
          <div className="three-grid">
            <div className="process-card"><span>1</span><h3>Order confirmed</h3><p>Customer receives BEEMUN order confirmation after verified payment.</p></div>
            <div className="process-card"><span>2</span><h3>Makers ship</h3><p>Each maker receives only their own SellerOrder for fulfillment.</p></div>
            <div className="process-card"><span>3</span><h3>Track in BEEMUN</h3><p>Courier and tracking details appear inside My Orders.</p></div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
