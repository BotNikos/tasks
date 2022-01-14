// ---imports commented, but works, this fiels importing in index.html as scripts---

// import {Categories, Tasks} from './components/Category.js';
// import {Modal} from './components/Modal.js';

const App = () => {
    const [categories, setCategories] = React.useState([]);
    const [modal, setModal] = React.useState({show: true});
    const [forceUpdate, setForceUpdate] = React.useState(0);

    React.useEffect(async () => {
        let categories = await fetch('/tasks/categories');
        setCategories(await categories.json());
    }, [forceUpdate]);

    const increment = () => {
        setForceUpdate(forceUpdate + 1);
    }

    return (
        <section className='main flex-column'>

            {modal.show ? <Modal/> : ''}

            <div className="categories flex-row">
                {
                    categories.map(elem => {
                        return (
                            <Category
                                name={elem.name}
                                tasks={elem.tasks}
                                color={elem.color}
                                width={100 / categories.length}
                                setModal={setModal}
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
