const Modal = () => {
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
                        <input className="task_name_input" placeholder="Your task name here" />
                    </div>

                    <div className="flex_column pd">
                        <h3 className="task_description_title pd">Описание задачи</h3>
                        <textarea className="task_description_input" placeholder="Enter your description" cols="30" id="" name="" rows="10"></textarea>
                    </div>

                    <div className="flex_column pd">
                        <h3 className="task_category_title">Категория задачи</h3>
                    </div>
                </div>
            </div>

            <div className="pd">
                <div className="modal_content_background">
                    <div className="modal_buttons flex-row pd">
                        <div className="append_button pd">
                            <button>Добавить</button>
                        </div>
                        <div className="close_button pd">
                            <button>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
