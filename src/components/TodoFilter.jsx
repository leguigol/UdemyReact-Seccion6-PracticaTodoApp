const TodoFilter = ({changeFilter,filter}) => { 

    return (
        <section className="container mx-auto mt-8">
        <div className='bg-white rounded flex justify-center gap-4 p-4'>
          <button className={`${filter==='all' ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500'}`} onClick={()=>changeFilter('all')}>All</button>
          <button className={`${filter==='all' ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500'}`} onClick={()=>changeFilter('active')}>Active</button>
          <button className={`${filter==='all' ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500'}`} onClick={()=>changeFilter('completed')}>Completed</button>
        </div>
      </section>

    )

 }

 export default TodoFilter
