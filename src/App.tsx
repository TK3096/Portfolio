import { motion } from 'framer-motion'

const App = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <motion.div
        className='w-[200px] h-[300px] rounded-md bg-indigo-500'
        initial={{ scale: 1 }}
        animate={{ scale: 1.5, transition: { duration: 2 } }}
      ></motion.div>
    </div>
  )
}

export default App
