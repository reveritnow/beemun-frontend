import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function CheckoutPageView() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap cart-layout">
        <div>
          <div className="breadcrumb">Home → Cart → Checkout</div>
          <p className="section-eyebrow">Secure checkout</p>
          <h1>Checkout</h1>
          <p className="section-copy">Guest and logged-in checkout with validation before payment.</p>
          <section className="product-info-section"><h2>Contact information</h2><div className="three-grid"><div className="info-card"><h3>Name</h3><p>Customer name</p></div><div className="info-card"><h3>Email</h3><p>Order confirmation email</p></div><div className="info-card"><h3>Phone</h3><p>Delivery contact</p></div></div></section>
          <section className="product-info-section"><h2>Shipping address</h2><div className="three-grid"><div className="info-card"><h3>Address</h3><p>House, street, locality</p></div><div className="info-card"><h3>City</h3><p>City, state, pincode</p></div><div className="info-card"><h3>Note</h3><p>Optional delivery note</p></div></div></section>
          <section className="product-info-section"><h2>Payment</h2><p>Razorpay opens after backend validation and pending order creation.</p></section>
        </div>
        <aside className="cart-summary"><h3>Order Summary</h3><p>Items: 2</p><p>Subtotal: ₹948</p><p>Shipping shown before payment</p><hr /><h3>Total: ₹948</h3><a className="btn-primary" href="#">Pay with Razorpay</a></aside>
      </section>
      <SiteFooter />
    </main>
  )
}
