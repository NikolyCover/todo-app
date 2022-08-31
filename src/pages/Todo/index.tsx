import Bullet from '../../components/Bullet'
import styles from './Todo.module.scss'
import { PlayCircle, Loader, PauseCircle, Check} from 'react-feather'
import { useCallback, useState } from 'react'
import { ITask } from '../../interfaces/ITask'

export default function Todo() {
    const [ tasks, setTasks ] = useState<ITask[]>([])

    const createTask = useCallback(( bullet: string, title: string, description: string ) => {
        var task = {
            bullet: bullet,
            title: title,
            description: description
        }

        setTasks(previousTasks => [ ...previousTasks, task ])
    }, [])

    return (
        <>
            <h1 className={styles.title}>TODO APP</h1>
            <main className={styles.todoList}>
                <Bullet label='Not started' Icon={PlayCircle} tasks={tasks?.filter(task => task.bullet === 'Not started') as ITask[]} createTask={createTask}/>
                <Bullet label='In progress' Icon={Loader} tasks={tasks?.filter(task => task.bullet === 'In progress') as ITask[]} createTask={createTask}/>
                <Bullet label='Paused' Icon={PauseCircle} tasks={tasks?.filter(task => task.bullet === 'Paused') as ITask[]} createTask={createTask}/>
                <Bullet label='Done' Icon={Check} tasks={tasks?.filter(task => task.bullet === 'Done') as ITask[]} createTask={createTask}/>
            </main>
        </>
    )
}