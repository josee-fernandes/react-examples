interface ToastProps {
  title: string
  message: string
  type?: 'success' | 'error'
}

const successBackgroundColor = '#24a553'
const errorBackgroundColor = '#a52428'

function Toast({ title: toastTitle, message, type }: ToastProps) {
  return (
    <div
      className="toast-container"
      style={{
        backgroundColor:
          type === 'success'
            ? successBackgroundColor
            : type === 'error'
              ? errorBackgroundColor
              : undefined
      }}
    >
      <div className="container-first">
        <div className="toast-icon">
          ICO
        </div>
        <div className="toast-content">
          <div className="toast-content__title">
            {toastTitle}
          </div>
          <div className="toast-content__message">
            {message}
          </div>
        </div>
      </div>
      <div className="toast-close">
        x
      </div>
    </div>
  )
}

export default Toast
