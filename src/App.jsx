import CrossIcon from './components/icons/CrossIcon'

const App=()=>{
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen:100vh">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">Todo</h1>
          <button>luna</button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input type="text" placeholder="Create a new todo...." className="w-full text-gray-400 outline-none"/>
        </form>
      </header> 
      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md px-4">
          <article className='flex gap-4 py-4'>
            <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-600">Complete online Javascript curse in Leguiweb</p>
            <button className='ml-auto'><CrossIcon /></button>
          </article>
          <article >
            <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-600">Complete online Javascript curse in Leguiweb</p>
            <button><CrossIcon /></button>
          </article>
          <article >
            <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-600">Complete online Javascript curse in Leguiweb</p>
            <button><CrossIcon /></button>
          </article>
          <section>
            <span>5 items left</span>
            <button>Clear Completed</button>
          </section>

        </div>

      </main>

      <section className="container mx-auto px-4">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>

      <p className="text-center">Drag and drop to reorder list</p>
    </div>
    )
}

export default App