import styles from './Bullet.module.scss'
import Task from "./Task"

import { Icon, Plus as PlusIcon } from 'react-feather'
import React, { useCallback, useRef } from 'react'
import Modal, { ModalHandles } from '../Modal'
import { ITask } from '../../interfaces/ITask'

/**
 * import PlusIcon from '../../assets/plus.svg'
 * 
 * -> importa o path da imagem: é necessário adicionar o PlusIcon no atributo src da imagem
 * 
 * Ex:  <img src={PlusIcon}/>
 */


/**
 * Adicionar as imagens na pasta public
 * Ex:  <img src='/image.svg'/>
 * 
 * Obs. O caminho do src precisa começar com /
 */

/**
 * import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
 * 
 * -> Para usar os svg como componentes no vite, é preciso instalar o plugin `vite-plugin-svgr`. 
 * -> Após instala-lo, é necessário adiciona-lo no array de plugins do vite (vite.config.ts) e colocar a referencia no arquivo de referências do vite (vite-env.d.ts)
 * 
 * Ex: <PlusIcon />
 */


interface Props {
    label: string
    Icon: Icon
    tasks: Array<ITask> | null
    createTask: (bullet: string, title: string, description: string) => void
}

const Bullet: React.FC<Props> = ({ label, Icon, tasks, createTask}) => {
    const modalRef = useRef<ModalHandles>(null)

    return (
        <div className={styles.bullet}>
            <div className={styles.title}>
                <h1>{label}</h1>
                <Icon size={20} className={styles.icon} />
            </div>
            <button className={styles.button} onClick={() => modalRef.current?.handleModalVisibility()}>
                <PlusIcon className={styles.icon} size={16} />
                Create task
            </button>
            <Modal ref={modalRef} createTask={createTask} bulletLabel={label}/>
            {
                tasks?.map( task => (
                    <Task title={task.title} description={task.description} />
                ))
            }
        </div>
    )
}

export default Bullet