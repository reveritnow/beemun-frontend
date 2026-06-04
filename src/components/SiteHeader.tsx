export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-logo" href="/">BEEMUN</a>
      <nav className="site-nav">
        <a href="/category/skincare">Shop</a>
        <a href="/category/skincare">Categories</a>
        <a href="/#zps">ZPS 100</a>
        <a href="/seller/dashboard">Partner</a>
      </nav>
      <a className="header-cart" href="/cart">Cart</a>
    </header>
  )
}
