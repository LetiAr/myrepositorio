import { useForm } from 'react-hook-form'


const Contact = () => {

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {

  }
 
  return <div>
  <h2>Contáctame</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>Nombre</label>
      <input type="text" {...register('nombre')} />
    </div>
    <div>
      <label>Email</label>
      <input type="text" {...register('email')} />
    </div>
    <div>
      <label>Celphone</label>
      <input type="text" {...register('celphone')} />
    </div>
    <div>
      <label>Mensaje</label>
      <input type="text" {...register('mensaje')} />
    </div>
    <input type="submit" value='Enviar' />
  
  
  </form>
  </div>

}

export default Contact