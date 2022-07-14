interface ToastProps {
  title: string
  message: string
  type?: 'success' | 'error'
}

const successBackgroundColor = '#24a553'
const errorBackgroundColor = '#a52428'

export const ToastModerno = (props: ToastProps) => {
  // let b = 0
  // const c = 0
  
  // function calcular() {
  //   var a = 0
  // }

  // console.log(a)

  return (
    <div
      className="toast-container"
      style={{
        backgroundColor:
          props.type === 'success'
            ? successBackgroundColor
            : props.type === 'error'
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
            {props.title}
          </div>
          <div className="toast-content__message">
            {props.message}
          </div>
        </div>
      </div>
      <div className="toast-close">
        x
      </div>
    </div>
  )
}
