import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Store!</a>
        </h1>

        <p className={styles.description}>
          {/* It's class for use a as link to cart (summary) and snipcart-total-price for price all */}
          <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
            <strong>Cart:</strong> <span className="snipcart-total-price">$0.00</span>
          </a>
        </p>


        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <h3>{ product.title }</h3>
                <img src={product.image} alt={`Preview of ${product.title}`}/>
                <p>{ product.description }</p>
                <p>${ product.price }</p>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-url="/"
                    data-item-price={product.price}
                  >Add to Cart</button>
                </p>
              </div>
            )
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>

      <script async src="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.js"></script>
      <div id="snipcart" data-config-modal-style="side" data-api-key="ODgzMzk4MmYtMjMxNS00Y2RkLWE2YjEtMTFjZDgzYzBkNmFkNjM3NDg4ODA1MTgxNzMyNzU4" hidden></div>

    </div>
  )
}
