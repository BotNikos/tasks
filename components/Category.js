const Task = ({title, description, color}) => {
    return (
        <div className="pd">
            <div className='task pd' style={{backgroundColor: color}}>
                <h1>{title}</h1>
                <h3>{description}</h3>
            </div>
        </div>
    );
}

const Category = ({name, width, tasks, color, setModal}) => {

    const showModal = () => {
        setModal({show: true});
    }

    return (
        <div className="category" style={{width: `${width}%`}}>
            <div className="pd">
                <h1>{name}</h1>
            </div>

            {
                tasks.map(task => {
                    return (
                        <Task
                            title={task.name}
                            description={task.description}
                            color={color}
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
