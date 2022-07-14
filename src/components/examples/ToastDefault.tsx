import Toast from '../Toast'

export const ToastDefault = () => {
  return (
    <div>
      <h1>Toast Default</h1>
      <br/>
      <Toast
        title="Hello"
        message="World"
      />
      <Toast
        title="Hello"
        message="World"
        type="success"
      />
      <Toast
        title="Hello"
        message="World"
        type="error"
      />
      <Toast
        title="Hello"
        message="World"
        type="string-diferente"
      />
    </div>
  )
}