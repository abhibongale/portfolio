import {getProjects} from '@/sanity/sanity-utils'

export default async function Home() {

  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        hey, I'm Abhishek Bongale 👋
      </h1>
    <div className='bg-red-500'>My project go here</div>

    {projects.map((project) => {
      return(
      <div>{project.name}</div>
      )}
    )}
    </main>
  )
}
 
