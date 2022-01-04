'use strict';
const categoryData = [
    {
        id: 1,
        name: 'Not started',
        color: '#FF6D63',
        tasks: [
            {
                id: 0,
                name: 'Some not started task',
                description: 'this task not startd :(',
            }
        ]
    },
    {
        id: 0,
        name: 'In work',
        color: '#FFF15C',
        tasks: [
            {
                id: 0,
                name: 'Hello',
                description: 'Just hello world',
            },
        ],
    },
    {
        id: 2,
        name: 'Done',
        color: '#45FF92',
        tasks: [
            {
                id: 0,
                name: 'Yeah, this is done task',
                description: 'We do it!',
            },
            {
                id: 1,
                name: 'Another done task',
                description: 'This is wery well',
            }
        ]
    }
]

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

const Category = ({name, width, tasks, color}) => {
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
            
        </div>
    )
}

const App = () => {
    return (
        <section className='main'>
            <div className="categories flex-row">
                {
                    categoryData.map(elem => {
                        return (
                            <Category 
                                name={elem.name} 
                                tasks={elem.tasks}
                                color={elem.color}
                                width={100 / categoryData.length} 
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
