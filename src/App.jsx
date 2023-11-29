import CrossIcon from './components/icons/CrossIcon'
import MoonIcon from './components/icons/MoonIcon'

const App=()=>{
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen:100vh">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">Todo</h1>
          <button><MoonIcon className="fill-red-400"/></button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input type="text" placeholder="Create a new todo...." className="w-full text-gray-400 outline-none"/>
        </form>
      </header> 
      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md">
          <article className='flex gap-4 py-4 border-b border-b-gray-400 px-4'>
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online Javascript curse in Leguiweb</p>
            <button className='flex-none'><CrossIcon /></button>
          </article>
          <article className='flex gap-4 py-4 border-b border-b-gray-400 px-4'>
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online Javascript curse in Leguiweb</p>
            <button className='flex-none'><CrossIcon /></button>
          </article>
          <article className='flex gap-4 py-4 border-b border-b-gray-400 px-4'>
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online Javascript curse in Leguiweb</p>
            <button className='flex-none'><CrossIcon /></button>
          </article>
          <section className='py-4 px-4 flex justify-between'>
            <span className='text-gray-400'>5 items left</span>
            <button className='text-gray-400'>Clear Completed</button>
          </section>
        </div>

      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className='bg-white rounded flex justify-center gap-4'>
          <button className='hover:text-blue-600'>All</button>
          <button className='hover:text-blue-600'>Active</button>
          <button className='hover:text-blue-600'>Completed</button>
        </div>
      </section>

      <p className="text-center">Drag and drop to reorder list</p>
    </div>
    )
}

export default App