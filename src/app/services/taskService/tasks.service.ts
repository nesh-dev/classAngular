
export class TaskService {
  
  tasks = [
    {
      id: 1,
      name: 'Run standup',
      done: false,
      tags: ['important', 'classroom']
    },
    {
      id: 2,
      name: 'conduct one  on one',
      done: false,
      tags: ['important', 'classroom']
    }
    ,
    {
      id: 3,
      name: 'work on student profile',
      done: false,
      tags: ['important', 'development']
    },
    {
      id: 4,
      name: 'Attend Meetings',
      done: false,
      tags: ['important', 'professional']
    },
    {
      id: 5,
      name: 'Help Desk',
      done: false,
      tags: ['important', 'Classroom']
    },
    {
      id: 6,
      name: 'Mark IPs',
      done: false,
      tags: ['important', 'Classroom']
    }
    ];

  constructor( ) {}


   getTasks() {
    const allTasks =  this.tasks;
    return allTasks;
  }

  getLength() {
    return this.tasks.length;
  }

  filterByTag(tag: string) {
    const tempTags = this.tasks;
    this.tasks = this.tasks.filter((item) => item.tags.includes(tag));

    setTimeout(() => {
      this.tasks = tempTags;
    }, 10000);
  }

  addNewTask(item) {
    this.tasks.unshift(item);
  }

}
