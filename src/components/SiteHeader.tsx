export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-logo" href="/">BEEMUN</a>
      <nav className="site-nav">
        <a href="#categories">Shop</a>
        <a href="#categories">Categories</a>
        <a href="#zps">ZPS 100</a>
        <a href="#makers">Partner</a>
      </nav>
      <a className="header-cart" href="#cart">Cart</a>
    </header>
  )
}
