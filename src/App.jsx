import { useState, useEffect, useMemo } from "react"

export default function App(){
  const [tasks,setTasks]=useState(()=>JSON.parse(localStorage.getItem("tasks")||"[]"))
  const [text,setText]=useState("")
  const [filter,setFilter]=useState("all")
  useEffect(()=>{localStorage.setItem("tasks",JSON.stringify(tasks))},[tasks])

  const addTask=()=>{ if(!text.trim()) return; setTasks([...tasks,{id:Date.now(),text,completed:false}]); setText("")}
  const toggle=(id)=>setTasks(tasks.map(t=>t.id===id?{...t,completed:!t.completed}:t))

  // Fixed by me: AI gave infinite loop here, I added dependency array
  const filtered=useMemo(()=>tasks.filter(t=> filter==="active"?!t.completed : filter==="done"? t.completed : true),[tasks,filter])

  return(
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4" aria-label="TaskFlow App">TaskFlow - AI Built</h1>
        <div className="flex gap-2 mb-4">
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="Add task..." className="flex-1 border p-2 rounded" aria-label="Add new task"/>
          <button onClick={addTask} className="bg-black text-white px-4 rounded">Add</button>
        </div>
        <div className="flex gap-2 mb-4">
          <button onClick={()=>setFilter("all")} className="px-3 py-1 border rounded">All</button>
          <button onClick={()=>setFilter("active")} className="px-3 py-1 border rounded">Active</button>
          <button onClick={()=>setFilter("done")} className="px-3 py-1 border rounded">Done</button>
        </div>
        {filtered.map(t=><div key={t.id} className="flex gap-2 p-2 border-b"><input type="checkbox" checked={t.completed} onChange={()=>toggle(t.id)}/><span className={t.completed?"line-through":""}>{t.text}</span></div>)}
      </div>
    </div>
  )
}
