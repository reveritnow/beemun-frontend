import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function CartDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap cart-layout">
        <div>
          <h1>Your Cart</h1>
          <div className="cart-item"><strong>Cold Pressed Coconut Oil</strong><span>₹349</span></div>
          <div className="cart-item"><strong>Rose Face Balm</strong><span>₹599</span></div>
        </div>
        <aside className="cart-summary">
          <h3>Order Summary</h3>
          <p>Subtotal: ₹948</p>
          <a className="btn-primary" href="#checkout">Proceed to Checkout</a>
        </aside>
      </section>
      <SiteFooter />
    </main>
  )
}
