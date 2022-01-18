// ---imports commented, but works, this fiels importing in index.html as scripts---

// import {Categories, Tasks} from './components/Category.js';
// import {Modal} from './components/Modal.js';

const App = () => {
    const [categories, setCategories] = React.useState([]);
    const [modal, setModal] = React.useState({show: false});
    const [forceUpdate, setForceUpdate] = React.useState(0);

    React.useEffect(async () => {
        let categories = await fetch('/tasks/categories');
        setCategories(await categories.json());
    }, [forceUpdate]);

    const taskReload = () => {
        setForceUpdate(forceUpdate + 1);
    }

    return (
        <section className='main flex-column'>

        {modal.show ? <Modal setModal={setModal} elementId={modal.categoryId} taskReload={taskReload} initialData={{name: '', description: ''}}/> : ''}

            <div className="categories flex-row">
                {
                    categories.map(elem => {
                        return (
                            <Category
                                info={{
                                    id: elem.id,
                                    name: elem.name,
                                    color: elem.color,
                                    width: 100 / categories.length,
                                }}
                                tasks={elem.tasks}
                                setModal={setModal}
                                taskReload={taskReload}
                                key={elem.id}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
