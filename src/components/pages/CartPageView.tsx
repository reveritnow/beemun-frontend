import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const items = [
  { name: 'Cold Pressed Coconut Oil', maker: 'Earth Roots', variant: '250ml', price: 349 },
  { name: 'Rose Face Balm', maker: 'Bee Botanics', variant: '30g', price: 599 }
]

export default function CartPageView() {
  const subtotal = items.reduce((total, item) => total + item.price, 0)
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap cart-layout">
        <div>
          <div className="breadcrumb">Home → Cart</div>
          <p className="section-eyebrow">Review your selection</p>
          <h1>Your Cart</h1>
          <p className="section-copy">Products in this cart carry BEEMUN review signals before checkout.</p>
          {items.map((item) => <div className="cart-item" key={item.name}><div><span className="badge">ZPS 100</span><strong>{item.name}</strong><p>{item.maker} · {item.variant}</p><div className="variant-row"><button>Qty 1</button><button>Remove</button></div></div><span>₹{item.price}</span></div>)}
          <a className="btn-secondary" href="/category/skincare">Continue Shopping</a>
        </div>
        <aside className="cart-summary"><h3>Order Summary</h3><p>Items: {items.length}</p><p>Subtotal: ₹{subtotal}</p><p>Shipping: calculated at checkout</p><hr /><h3>Total today: ₹{subtotal}</h3><p>BEEMUN keeps order updates in one place.</p><a className="btn-primary" href="/checkout">Proceed to Checkout</a></aside>
      </section>
      <SiteFooter />
    </main>
  )
}
