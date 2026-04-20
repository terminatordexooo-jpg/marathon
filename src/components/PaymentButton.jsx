export default function PaymentButton({ children, className, onPreview }) {
  const checkoutUrl = import.meta.env.VITE_CHECKOUT_URL

  const handleClick = (e) => {
    if (!checkoutUrl || checkoutUrl.includes('00000000')) {
      e.preventDefault()
      if (import.meta.env.DEV) {
        onPreview?.()
      } else {
        alert('Checkout is not configured yet. Please contact support.')
      }
    }
  }

  return (
    <a
      href={checkoutUrl || '#'}
      onClick={handleClick}
      className={className}
      rel="noopener"
    >
      {children}
    </a>
  )
}
