const Task = ({info, taskReload}) => {

    const [modal, setModal] = React.useState({show: false});

    const showModal = () => {
        setModal({show: true});
    }

    return (
        <div className="pd">
        {
            modal.show ? <Modal
                            setModal={setModal}
                            elementId={info.categoryId}
                            taskReload={taskReload}
                            initialData={
                                {
                                    id: info.id,
                                    name: info.title,
                                    description: info.description,
                                }
                            }
                        /> : ''
        }

            <div onClick={showModal} className='task pd' style={{backgroundColor: info.color}}>
                <h1>{info.title}</h1>
                <h3>{info.description}</h3>
            </div>
        </div>
    );
}

const Category = ({info, tasks, setModal, taskReload}) => {

    const showModal = () => {
        setModal({
            show: true,
            categoryId: info.id,
        });
    }

    return (
        <div className="category" style={{width: `${info.width}%`}}>
            <div className="pd">
                <h1>{info.name}</h1>
            </div>

            {
                tasks.map(task => {
                    return (
                        <Task
                            info={{
                                id: task.id,
                                title: task.name,
                                description: task.description,
                                color: info.color,
                                categoryId: info.id,
                            }}
                            id={task.id}
                            title={task.name}
                            description={task.description}
                            color={info.color}
                            taskReload={taskReload}
                            key={task.id}
                        />
                    )
                })
            }

            <div className="pd">
                <div className='append_task pd' onClick={showModal}>
                    <div className="plus_icon pd">
                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    )
}
