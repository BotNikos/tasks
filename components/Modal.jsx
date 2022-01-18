const Modal = ({setModal, elementId, taskReload, initialData}) => {

    const [taskName, setTaskName] = React.useState(initialData.name);
    const [taskDescription, setTaskDescription] = React.useState(initialData.description);

    const changeTaskName = (event) => {
        setTaskName(event.target.value);
    }

    const changeTaskDescription = (event) => {
        setTaskDescription(event.target.value);
    }

    const closeModal = () => {
        setModal({show: false});
    }

    const sendForm = async (type) => {
        const data = {
            id: elementId,
            name: taskName,
            description: taskDescription,
        }

        if (initialData.id)
            data.taskId = initialData.id;

        let response = await fetch(`/tasks/${type}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        response = await response.json();

        taskReload();
        closeModal();
    }

    return (
        <div className="modal_background flex-column center">
            <div className="modal pd">
                <div className="pd">
                    <h1 className="modal_title">Добавить задачу</h1>
                </div>

                <div className="pd">
                    <div className="modal_content_background pd">
                        <div className="flex_column pd">
                            <h3 className="task_name_title pd">Имя задачи</h3>
                            <input className="task_name_input" placeholder="Your task name here" value={taskName} onChange={changeTaskName} />
                        </div>

                        <div className="flex_column pd">
                            <h3 className="task_description_title pd">Описание задачи</h3>
                            <textarea className="task_description_input" placeholder="Enter your description" cols="30" rows="10" value={taskDescription} onChange={changeTaskDescription}></textarea>
                        </div>
                    </div>
                </div>

                <div className="pd">
                    <div className="modal_buttons flex-row">
                        <div className="append_button pd">
                            {
                                initialData.id ? (
                                    <button onClick={() => {sendForm('change')}}>Изменить</button>
                                ) : (
                                    <button onClick={() => {sendForm('append')}}>Добавить</button>
                                )
                            }
                        </div>

                        <div className="close_button pd">
                          <button onClick={closeModal}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
